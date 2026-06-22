import React, { useState } from "react";
import { RES } from "../constants/testIds";
import { toast } from "sonner";
import axios from "axios";
import { CalendarHeart, Send } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Reservation = ({ t }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    duration: "1.5h",
    children: 1,
    occasion: "visit",
    note: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === "children" ? parseInt(value || "1", 10) : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { ...form };
      if (!payload.email) delete payload.email;
      await axios.post(`${API}/reservations`, payload);
      toast.success(t.reservation.success);
      setForm({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        duration: "1.5h",
        children: 1,
        occasion: "visit",
        note: "",
      });
    } catch (err) {
      toast.error(t.reservation.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="reservation"
      data-testid={RES.section}
      className="py-14 sm:py-20 lg:py-32 bg-[#FAD4D8]/40"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="tag-chip">
            <CalendarHeart className="w-3.5 h-3.5" /> {t.reservation.kicker}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 text-[#2D3142]">
            {t.reservation.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#5C6173]">{t.reservation.subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          data-testid={RES.form}
          className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 shadow-soft grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          <div className="md:col-span-2">
            <label className="text-sm font-bold text-[#2D3142] mb-2 block">{t.reservation.name}</label>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input-field"
              data-testid={RES.name}
            />
          </div>
          <div>
            <label className="text-sm font-bold text-[#2D3142] mb-2 block">{t.reservation.phone}</label>
            <input
              required
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="input-field"
              data-testid={RES.phone}
            />
          </div>
          <div>
            <label className="text-sm font-bold text-[#2D3142] mb-2 block">{t.reservation.email}</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input-field"
              data-testid={RES.email}
            />
          </div>
          <div>
            <label className="text-sm font-bold text-[#2D3142] mb-2 block">{t.reservation.date}</label>
            <input
              required
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="input-field"
              data-testid={RES.date}
            />
          </div>
          <div>
            <label className="text-sm font-bold text-[#2D3142] mb-2 block">{t.reservation.time}</label>
            <input
              required
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="input-field"
              data-testid={RES.time}
            />
          </div>
          <div>
            <label className="text-sm font-bold text-[#2D3142] mb-2 block">{t.reservation.duration}</label>
            <select
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="input-field"
              data-testid={RES.duration}
            >
              <option value="1.5h">{t.reservation.duration_options["1.5h"]}</option>
              <option value="3h">{t.reservation.duration_options["3h"]}</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-bold text-[#2D3142] mb-2 block">{t.reservation.children}</label>
            <input
              required
              type="number"
              min="1"
              max="20"
              name="children"
              value={form.children}
              onChange={handleChange}
              className="input-field"
              data-testid={RES.children}
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-bold text-[#2D3142] mb-2 block">{t.reservation.occasion}</label>
            <select
              name="occasion"
              value={form.occasion}
              onChange={handleChange}
              className="input-field"
              data-testid={RES.occasion}
            >
              <option value="visit">{t.reservation.occasion_options.visit}</option>
              <option value="birthday">{t.reservation.occasion_options.birthday}</option>
              <option value="event">{t.reservation.occasion_options.event}</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm font-bold text-[#2D3142] mb-2 block">{t.reservation.note}</label>
            <textarea
              name="note"
              rows="3"
              value={form.note}
              onChange={handleChange}
              className="input-field resize-none"
              data-testid={RES.note}
            />
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              data-testid={RES.submit}
              className="btn-pill btn-primary disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {loading ? "..." : t.reservation.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
