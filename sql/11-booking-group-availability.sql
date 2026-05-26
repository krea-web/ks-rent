-- 11 — Verifica disponibilità booking lato backend (Supabase)
-- ============================================================
-- Applicata in produzione via MCP (migration "booking_group_availability", 2026-05-27).
-- Questo file è il record versionato nel repo.
--
-- Contesto: la pagina /prenotaora (React client:only, anon key) NON può leggere
-- la tabella `bookings` (RLS: pubblico solo INSERT). Inoltre il DB modella 1 riga
-- "rappresentante" per modello, non 1 riga per unità fisica. Quindi:
--  1) `vehicle_group_stock` tiene le quantità REALI per gruppo;
--  2) `check_group_availability(...)` (SECURITY DEFINER) verifica l'overlap di date
--     sulle prenotazioni non cancellate del gruppo vs lo stock, restituendo solo
--     un booleano (+ unità libere) senza esporre righe di prenotazione.
-- Il submit della prenotazione resta sul webhook N8N (Nota Critica #12): qui si
-- tocca SOLO la verifica disponibilità.

create table if not exists public.vehicle_group_stock (
  group_slug text primary key,
  units integer not null check (units >= 0),
  updated_at timestamptz not null default now()
);

alter table public.vehicle_group_stock enable row level security;

drop policy if exists "Admin gestisce stock" on public.vehicle_group_stock;
create policy "Admin gestisce stock" on public.vehicle_group_stock
  for all using (exists (select 1 from public.profiles where profiles.id = auth.uid() and profiles.is_admin = true));

-- Inventario reale (aggiornare qui quando cambia la flotta).
insert into public.vehicle_group_stock (group_slug, units) values
  ('audi-rs3', 3),            -- 1 verde + 2 grigie
  ('bmw-m2', 1),
  ('mercedes-classe-a', 4),   -- Classe A 180d
  ('jeep-avenger', 2),
  ('fiat-panda', 15),
  ('honda-sh', 18),           -- 15× SH125 + 3× SH350 (gruppo unico nel booking)
  ('yamaha-quad-raptor', 1)
on conflict (group_slug) do update set units = excluded.units, updated_at = now();

create or replace function public.check_group_availability(
  p_group_slug text,
  p_start date,
  p_end date
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_units integer;
  v_booked integer;
  v_free integer;
begin
  if p_group_slug is null or p_start is null or p_end is null or p_start > p_end then
    return jsonb_build_object('available', false, 'free_units', 0, 'total_units', 0, 'invalid', true);
  end if;

  select units into v_units from public.vehicle_group_stock where group_slug = p_group_slug;
  if v_units is null then
    select greatest(count(*), 1) into v_units
    from public.vehicles
    where group_slug = p_group_slug and coalesce(is_archived, false) = false;
  end if;

  select count(*) into v_booked
  from public.bookings b
  join public.vehicles v on v.id = b.vehicle_id
  where v.group_slug = p_group_slug
    and coalesce(b.status, '') <> 'cancelled'
    and b.start_date <= p_end
    and b.end_date >= p_start;

  v_free := v_units - v_booked;

  return jsonb_build_object(
    'available', v_free > 0,
    'free_units', greatest(v_free, 0),
    'total_units', v_units
  );
end;
$$;

grant execute on function public.check_group_availability(text, date, date) to anon, authenticated;
