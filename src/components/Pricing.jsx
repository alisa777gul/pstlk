import React from "react";
import { Check, Heart, Users } from "lucide-react";

const Pricing = ({ t }) => {
  return (
    <section
      id="pricing"
      className="py-14 sm:py-20 lg:py-32 bg-[#CDE4F1]/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="tag-chip">{t.pricing.kicker}</span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 text-[#2D3142]">
            {t.pricing.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#5C6173]">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {t.pricing.cards.map((c, i) => (
            <div
              key={i}
              className={`relative rounded-[2.5rem] sm:rounded-[3rem] p-7 sm:p-10 shadow-soft border-2 ${
                i === 1
                  ? "bg-[#2D3142] text-[#FFF8F3] border-transparent"
                  : "bg-white text-[#2D3142] border-[#EBE3DC]"
              } hover:-translate-y-2 transition-transform duration-300`}
              data-testid={`pricing-card-${i}`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-5 sm:mb-6 ${
                  i === 1
                    ? "bg-[#F4B8C1] text-[#2D3142]"
                    : "bg-[#FDF1BA] text-[#2D3142]"
                }`}
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p
                className={`font-display text-xl sm:text-2xl ${i === 1 ? "text-[#FAD4D8]" : "text-[#5C6173]"}`}
              >
                {c.time}
              </p>
              <p className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-none mt-2 sm:mt-3">
                {c.price}
              </p>
              <div
                className={`mt-5 sm:mt-6 flex items-center gap-2 ${i === 1 ? "text-[#CDE4F1]" : "text-[#5C6173]"}`}
              >
                <Users className="w-4 h-4" />
                <span className="font-semibold text-sm">{c.sibling}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 shadow-soft max-w-3xl mx-auto">
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#2D3142] mb-5 sm:mb-6">
            {t.pricing.rules_title}
          </h3>
          <ul className="space-y-3">
            {t.pricing.rules.map((r, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#A8D0E6] flex-shrink-0">
                  <Check className="w-3 h-3 text-[#2D3142]" />
                </span>
                <span className="text-[#5C6173] text-sm sm:text-base">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
