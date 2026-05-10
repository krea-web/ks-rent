import { supabase } from "@/lib/supabase";

export type AuditAction = "create" | "update" | "delete" | "upload" | "sync";

export async function logAdminAction(params: {
  action: AuditAction;
  table: string;
  recordId?: string | null;
  diff?: Record<string, unknown> | null;
}) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("admin_audit_log").insert({
      user_id: user.id,
      user_email: user.email,
      action: params.action,
      table_name: params.table,
      record_id: params.recordId ?? null,
      diff: params.diff ?? null,
    });
  } catch {
    // audit log non deve mai bloccare l'operazione principale
  }
}
