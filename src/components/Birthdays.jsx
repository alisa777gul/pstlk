import React from "react";
import { Check, Sun, Cake } from "lucide-react";

const Birthdays = ({ t }) => {
  return (
    <section id="birthdays" className="py-14 sm:py-20 lg:py-32 bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-6 sm:gap-10">
        {/* Birthday card */}
        <div className="lg:col-span-7 bg-[#FAD4D8] rounded-[2rem] sm:rounded-[3rem] p-7 sm:p-8 lg:p-12 relative overflow-hidden">
          <span className="tag-chip"><Cake className="w-3.5 h-3.5" /> {t.birthdays.kicker}</span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 text-[#2D3142]">
            {t.birthdays.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#5C6173] max-w-md">{t.birthdays.subtitle}</p>

          <div className="mt-6 sm:mt-8">
            <p className="font-bold uppercase text-xs tracking-wider text-[#2D3142] mb-3">
              {t.birthdays.includes_title}
            </p>
            <ul className="space-y-2">
              {t.birthdays.includes.map((it, i) => (
                <li key={i} className="flex items-center gap-3 text-[#2D3142] font-semibold text-sm sm:text-base">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white flex-shrink-0">
                    <Check className="w-3 h-3 text-[#F4B8C1]" />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>

          <a href="#reservation" className="mt-7 sm:mt-8 inline-flex btn-pill btn-primary text-sm sm:text-base" data-testid="birthdays-cta">
            {t.birthdays.cta}
          </a>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#F4B8C1] opacity-40" />
        </div>

        {/* Summer card */}
        <div className="lg:col-span-5 bg-[#FDF1BA] rounded-[2rem] sm:rounded-[3rem] p-7 sm:p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
          <div>
            <span className="tag-chip" style={{ backgroundColor: "#FFF8F3" }}>
              <Sun className="w-3.5 h-3.5" /> Letný tábor
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 text-[#2D3142]">
              {t.birthdays.summer_title}
            </h3>
            <p className="mt-3 sm:mt-4 text-[#5C6173] leading-relaxed text-sm sm:text-base">{t.birthdays.summer_text}</p>
          </div>

          <div className="mt-6 sm:mt-8 arch overflow-hidden aspect-[4/3]">
            <img
              src="https://images.pexels.com/photos/7450611/pexels-photo-7450611.png?auto=compress&cs=tinysrgb&dpr=2&h=500&w=700"
              alt="birthday cake"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Birthdays;
