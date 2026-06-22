import React, { useState } from "react";
import { CONTACT } from "../constants/testIds";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { toast } from "sonner";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Contact = ({ t }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success(t.contact.sent);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(t.contact.error);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      icon: MapPin,
      label: t.contact.address_label,
      value: t.contact.address,
      color: "#FAD4D8",
    },
    {
      icon: Phone,
      label: t.contact.phone_label,
      value: t.contact.phone,
      color: "#CDE4F1",
    },

    {
      icon: FaInstagram,
      label: t.contact.ig_label,
      value: t.contact.ig,
      color: "#FDF1BA",
    },
    {
      icon: Clock,
      label: t.contact.hours_label,
      value: t.contact.hours,
      color: "#F4B8C1",
    },
  ];

  return (
    <section
      id="contact"
      data-testid={CONTACT.section}
      className="py-14 sm:py-20 lg:py-32 bg-[#FFF8F3] pb-28 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5">
          <span className="tag-chip">{t.contact.kicker}</span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 text-[#2D3142]">
            {t.contact.title}
          </h2>

          <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="bg-white border border-[#EBE3DC] rounded-3xl p-5 hover:shadow-soft transition-shadow"
                  data-testid={`contact-info-${i}`}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: c.color }}
                  >
                    <Icon className="w-5 h-5 text-[#2D3142]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#5C6173]">
                    {c.label}
                  </p>
                  <p className="mt-1 font-semibold text-[#2D3142]">{c.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            data-testid={CONTACT.form}
            className="bg-[#CDE4F1]/40 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10"
          >
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D3142]">
              {t.contact.form_title}
            </h3>

            <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
              <input
                required
                name="name"
                placeholder={t.contact.name}
                value={form.name}
                onChange={handleChange}
                className="input-field"
                data-testid={CONTACT.name}
              />
              <input
                required
                type="email"
                name="email"
                placeholder={t.contact.email}
                value={form.email}
                onChange={handleChange}
                className="input-field"
                data-testid={CONTACT.email}
              />
              <textarea
                required
                name="message"
                rows="5"
                placeholder={t.contact.message}
                value={form.message}
                onChange={handleChange}
                className="input-field resize-none"
                data-testid={CONTACT.message}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              data-testid={CONTACT.submit}
              className="btn-pill btn-primary mt-6 disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {loading ? "..." : t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
