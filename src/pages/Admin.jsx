import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { Lock, LogOut, Calendar, Mail, Phone, Users, MessageSquare, RefreshCw } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Admin = () => {
  const [token, setToken] = useState(localStorage.getItem("pk_admin_token") || "");
  const [password, setPassword] = useState("");
  const [reservations, setReservations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [tab, setTab] = useState("reservations");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/admin/login`, { password });
      localStorage.setItem("pk_admin_token", res.data.token);
      setToken(res.data.token);
      toast.success("Prihlásený");
    } catch {
      toast.error("Nesprávne heslo");
    }
  };

  const logout = () => {
    localStorage.removeItem("pk_admin_token");
    setToken("");
    setReservations([]);
    setMessages([]);
  };

  const fetchData = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const headers = { "X-Admin-Token": token };
      const [r, m] = await Promise.all([
        axios.get(`${API}/reservations`, { headers }),
        axios.get(`${API}/contact`, { headers }),
      ]);
      setReservations(r.data);
      setMessages(m.data);
    } catch (err) {
      if (err?.response?.status === 401) {
        logout();
        toast.error("Relácia vypršala");
      } else {
        toast.error("Chyba pri načítaní");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F3] px-6">
        <Toaster position="top-right" richColors />
        <form
          onSubmit={login}
          className="bg-white rounded-[2.5rem] shadow-soft p-10 w-full max-w-md"
          data-testid="admin-login-form"
        >
          <div className="w-14 h-14 rounded-full bg-[#FAD4D8] flex items-center justify-center mb-6">
            <Lock className="w-6 h-6 text-[#2D3142]" />
          </div>
          <h1 className="font-display text-3xl font-bold text-[#2D3142]">Admin</h1>
          <p className="text-[#5C6173] mt-2 mb-6 text-sm">Vstup len pre personál Pastelkova.</p>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Heslo"
            className="input-field"
            data-testid="admin-password-input"
          />
          <button type="submit" className="btn-pill btn-primary mt-5 w-full justify-center" data-testid="admin-login-submit">
            Prihlásiť sa
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F3] py-10 px-6">
      <Toaster position="top-right" richColors />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-4xl font-bold text-[#2D3142]">Admin · Pastelkovo</h1>
            <p className="text-[#5C6173] text-sm mt-1">Prehľad rezervácií a správ.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={fetchData} className="btn-pill btn-secondary text-sm" data-testid="admin-refresh">
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Obnoviť
            </button>
            <button onClick={logout} className="btn-pill btn-outline text-sm" data-testid="admin-logout">
              <LogOut className="w-4 h-4" /> Odhlásiť
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("reservations")}
            className={`btn-pill text-sm ${tab === "reservations" ? "btn-primary" : "btn-secondary"}`}
            data-testid="tab-reservations"
          >
            <Calendar className="w-4 h-4" /> Rezervácie ({reservations.length})
          </button>
          <button
            onClick={() => setTab("messages")}
            className={`btn-pill text-sm ${tab === "messages" ? "btn-primary" : "btn-secondary"}`}
            data-testid="tab-messages"
          >
            <MessageSquare className="w-4 h-4" /> Správy ({messages.length})
          </button>
        </div>

        {tab === "reservations" && (
          <div className="space-y-3">
            {reservations.length === 0 && (
              <p className="text-[#5C6173] text-center py-12">Žiadne rezervácie zatiaľ.</p>
            )}
            {reservations.map((r) => (
              <div key={r.id} className="bg-white rounded-2xl p-5 shadow-soft border border-[#EBE3DC]" data-testid={`reservation-${r.id}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-lg text-[#2D3142]">{r.name}</p>
                    <p className="text-sm text-[#5C6173] flex items-center gap-3 mt-1 flex-wrap">
                      <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {r.phone}</span>
                      {r.email && <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {r.email}</span>}
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {r.children} detí</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl font-bold text-[#2D3142]">{r.date} · {r.time}</p>
                    <span className="tag-chip mt-1" style={{ fontSize: "0.7rem" }}>{r.duration} · {r.occasion}</span>
                  </div>
                </div>
                {r.note && <p className="text-sm text-[#5C6173] mt-3 italic">"{r.note}"</p>}
                <p className="text-xs text-[#8E94A8] mt-2">{new Date(r.created_at).toLocaleString("sk-SK")}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "messages" && (
          <div className="space-y-3">
            {messages.length === 0 && (
              <p className="text-[#5C6173] text-center py-12">Žiadne správy zatiaľ.</p>
            )}
            {messages.map((m) => (
              <div key={m.id} className="bg-white rounded-2xl p-5 shadow-soft border border-[#EBE3DC]" data-testid={`message-${m.id}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-lg text-[#2D3142]">{m.name}</p>
                    <p className="text-sm text-[#5C6173] flex items-center gap-1 mt-1">
                      <Mail className="w-3.5 h-3.5" /> {m.email}
                    </p>
                  </div>
                  <p className="text-xs text-[#8E94A8]">{new Date(m.created_at).toLocaleString("sk-SK")}</p>
                </div>
                <p className="text-[#2D3142] mt-3 whitespace-pre-wrap">{m.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
