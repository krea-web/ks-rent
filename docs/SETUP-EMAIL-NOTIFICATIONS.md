# Setup Email Transazionali (B5)

Sistema di notifica email automatica quando viene creata una prenotazione,
**parallelo** al webhook N8N esistente (non lo sostituisce).

## Architettura

```
PrenotaOra.tsx  →  N8N webhook  →  Supabase INSERT bookings  ↘
                                                              trigger AFTER INSERT
                                                              ↓
                                                     pg_net.http_post (async)
                                                              ↓
                                            Edge Function booking-notification
                                                              ↓
                                            Resend API (2 email: cliente + admin)
```

Sicurezza:
- Trigger no-op silent se vault secrets mancanti (non rompe insert)
- Edge function no-op silent se `RESEND_API_KEY` mancante (return 200)
- Errori HTTP non bloccano la transazione (pg_net è async)

## Setup richiesto (una sola volta)

### 1. Account Resend + API Key

1. Registrati su [resend.com](https://resend.com) (free tier: 3.000 email/mese, 100/giorno)
2. Crea API key in **API Keys** → tieni nascosta la stringa `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
3. **Opzionale ma raccomandato**: verifica dominio `ksrentsardinia.com`
   - Resend > Domains > Add → segui istruzioni DNS (3 record TXT/CNAME su Vercel DNS o registrar)
   - Verifica → puoi usare `from = "KS Rent Sardinia <booking@ksrentsardinia.com>"`
   - Senza verifica dominio: forzato a usare `onboarding@resend.dev` (ok per test)

### 2. Edge Function Secrets

Da **Supabase Dashboard → Edge Functions → booking-notification → Secrets**:

| Nome | Valore | Note |
|------|--------|------|
| `RESEND_API_KEY` | `re_xxxxx...` | obbligatoria — senza, no-op silent |
| `RESEND_FROM_EMAIL` | `KS Rent Sardinia <booking@ksrentsardinia.com>` | opz — default `onboarding@resend.dev` |
| `ADMIN_NOTIFY_EMAIL` | `ksrentsrl@gmail.com` | opz — default `ksrentsrl@gmail.com` |

### 3. Vault Secrets (DB)

Da **Supabase Dashboard → SQL Editor**, esegui una sola volta:

```sql
SELECT vault.create_secret(
  'https://zgytnkimjpoosvshfopz.supabase.co',
  'project_url'
);

SELECT vault.create_secret(
  '<SERVICE_ROLE_KEY>',  -- da Settings > API > service_role (secret)
  'service_role_key'
);
```

⚠️ **Service role key è altamente privilegiata** — bypassa RLS. Non condividerla
e non committarla in git. Vault la cripta a riposo.

Per aggiornare in futuro (es. dopo key rotation):

```sql
SELECT vault.update_secret(
  (SELECT id FROM vault.secrets WHERE name = 'service_role_key'),
  '<NEW_SERVICE_ROLE_KEY>',
  'service_role_key'
);
```

## Test funzionamento

Dopo setup completo:

```sql
-- Test trigger (manda email reale a un indirizzo controllato)
INSERT INTO public.bookings (
  customer_name, customer_surname, email, phone,
  start_date, end_date, total_price, status
) VALUES (
  'Test', 'Resend', 'tua-email-test@gmail.com', '+393333333333',
  '2026-06-01', '2026-06-07', 350.00, 'pending'
);

-- Verifica risposta pg_net (status, body)
SELECT id, status_code, error_msg, content
  FROM net._http_response
  ORDER BY id DESC LIMIT 5;
```

In Resend dashboard → **Emails** dovresti vedere 2 nuovi invii:
- a `tua-email-test@gmail.com` (conferma cliente HTML branded)
- a `ksrentsrl@gmail.com` (notifica admin)

Rimuovi il record test:

```sql
DELETE FROM public.bookings WHERE email = 'tua-email-test@gmail.com' AND customer_name = 'Test';
```

## Rollback (disabilitare temporaneamente)

```sql
-- Disabilita trigger senza droppare la function
ALTER TABLE public.bookings DISABLE TRIGGER booking_notify_on_insert;

-- Riattiva
ALTER TABLE public.bookings ENABLE TRIGGER booking_notify_on_insert;
```

## Stato attuale

- ✅ Edge function `booking-notification` deployata (v1)
- ✅ Trigger `booking_notify_on_insert` su `public.bookings` attivo
- ⏳ **Resend API key** — da configurare via Dashboard
- ⏳ **Vault secrets** — da configurare via SQL Editor
- ⏳ **Dominio Resend** — verifica DNS opzionale per `from` brandato

Finché i 3 punti pending non sono completati, il trigger è **no-op silent**:
non rompe nulla, le email semplicemente non partono.
