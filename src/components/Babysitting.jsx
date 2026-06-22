import React from "react";
import { Baby, Phone, Sparkles, Check } from "lucide-react";

const Babysitting = ({ t }) => {
  const b = t.babysitting;
  return (
    <section id="babysitting" className="py-14 sm:py-20 lg:py-24 bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#CDE4F1] via-[#FFF8F3] to-[#FAD4D8] p-7 sm:p-10 lg:p-16 shadow-soft">
          {/* novinka tag */}
          <div className="absolute -top-2 -right-12 sm:-right-10 rotate-[18deg] origin-center">
            <div className="bg-[#F4B8C1] text-[#2D3142] px-12 sm:px-16 py-2 font-display font-bold tracking-[0.3em] text-xs sm:text-sm shadow-soft">
              {b.badge.toUpperCase()}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 relative z-10">
              <span className="tag-chip">
                <Baby className="w-3.5 h-3.5" /> {b.kicker}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 text-[#2D3142]">
                {b.title}
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#5C6173] max-w-lg">
                {b.subtitle}
              </p>

              <div className="mt-6 sm:mt-8 flex items-baseline gap-2">
                <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-[#2D3142] leading-none">
                  {b.price}
                </span>
                <span className="text-[#5C6173] text-base sm:text-lg font-semibold">
                  {b.price_unit}
                </span>
              </div>

              <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {b.perks.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#2D3142] font-semibold text-sm sm:text-base"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white flex-shrink-0">
                      <Check className="w-3 h-3 text-[#F4B8C1]" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#reservation"
                  data-testid="babysitting-cta"
                  className="btn-pill btn-primary text-sm sm:text-base"
                >
                  <Sparkles className="w-4 h-4" /> {b.cta}
                </a>
                <a
                  href={`tel:${b.phone.replace(/\s/g, "")}`}
                  data-testid="babysitting-phone"
                  className="btn-pill btn-secondary text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4" /> {b.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-sm aspect-square arch bg-white shadow-soft overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=700"
                  alt="Babysitting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-2 sm:-left-2 bg-white rounded-2xl shadow-soft px-4 py-2.5 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FDF1BA] flex items-center justify-center">
                  <Baby className="w-4 h-4 text-[#2D3142]" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#2D3142]">
                  {b.phone_label}:{" "}
                  <span className="text-[#F4B8C1]">{b.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Babysitting;
