-- 11 — Verifica disponibilità booking lato backend (Supabase) — v2 per-veicolo
-- ==========================================================================
-- Applicata in produzione via MCP (migration "booking_availability_per_vehicle",
-- 2026-05-27). Questo file è il record versionato nel repo.
--
-- Contesto:
--  • La pagina /prenotaora (React client:only, anon key) NON può leggere `bookings`
--    (RLS: pubblico solo INSERT). Serve quindi una RPC SECURITY DEFINER.
--  • Il booking mostra 1 card per `make+model`: quindi SH 125 / SH 350 e
--    RS3 (Verde) / RS3 (Grigio) sono GIÀ card distinte → la disponibilità va
--    calcolata PER RIGA VEICOLO, non per group_slug (che sommerebbe 125+350).
--  • Il DB ha 1 riga per modello/variante, non 1 riga per unità fisica → la
--    quantità reale è in `vehicles.units`.
--  • Overlap ESCLUSIVO: stesso giorno rientro/ritiro NON è conflitto
--    ("la consegna del veicolo è all'orario del ritiro").
-- Il submit della prenotazione resta sul webhook N8N (/create-booking, Nota #12).
-- (NB: supera la v1 per-gruppo con vehicle_group_stock/check_group_availability,
--  qui rimossa.)

-- 1) Quantità reali per riga veicolo (card).
alter table public.vehicles add column if not exists units integer not null default 1;

update public.vehicles set units = 15 where group_slug = 'fiat-panda';
update public.vehicles set units = 4  where group_slug = 'mercedes-classe-a';
update public.vehicles set units = 2  where group_slug = 'jeep-avenger';
update public.vehicles set units = 1  where group_slug = 'bmw-m2';
update public.vehicles set units = 1  where group_slug = 'yamaha-quad-raptor';
update public.vehicles set units = 15 where group_slug = 'honda-sh' and model = 'SH 125';
update public.vehicles set units = 3  where group_slug = 'honda-sh' and model = 'SH 350';
update public.vehicles set units = 1  where group_slug = 'audi-rs3' and color = 'Verde';
update public.vehicles set units = 2  where group_slug = 'audi-rs3' and color = 'Grigio';

-- 2) Cleanup eventuale approccio v1 per-gruppo.
drop function if exists public.check_group_availability(text, date, date);
drop table if exists public.vehicle_group_stock;

-- 3) Disponibilità per veicolo (riga). Overlap esclusivo sui bordi.
create or replace function public.check_vehicle_availability(
  p_vehicle_id uuid,
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
  if p_vehicle_id is null or p_start is null or p_end is null or p_start > p_end then
    return jsonb_build_object('available', false, 'free_units', 0, 'total_units', 0, 'invalid', true);
  end if;

  select coalesce(units, 1) into v_units from public.vehicles where id = p_vehicle_id;
  if v_units is null then
    return jsonb_build_object('available', false, 'free_units', 0, 'total_units', 0, 'invalid', true);
  end if;

  select count(*) into v_booked
  from public.bookings b
  where b.vehicle_id = p_vehicle_id
    and coalesce(b.status, '') <> 'cancelled'
    and b.start_date < p_end
    and b.end_date > p_start;

  v_free := v_units - v_booked;

  return jsonb_build_object(
    'available', v_free > 0,
    'free_units', greatest(v_free, 0),
    'total_units', v_units
  );
end;
$$;

grant execute on function public.check_vehicle_availability(uuid, date, date) to anon, authenticated;
