import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      toast.error("Credenziali non valide");
      return;
    }

    toast.success("Accesso effettuato");
    navigate("/admin", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#050505] px-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <img
            src="https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png"
            alt="KS Rent"
            width="250"
            height="50"
            className="h-14 w-auto mx-auto mb-6 object-contain dark:brightness-100 brightness-0"
            fetchPriority="high"
          />
          <p className="text-gold/60 text-xs uppercase tracking-[0.3em]">Area Riservata</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors text-sm"
              placeholder="admin@ksrent.it"
            />
          </div>
          <div>
            <label className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors text-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-md gradient-gold text-primary-foreground font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Accedi"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
