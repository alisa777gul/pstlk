import React from "react";
import { HERO } from "../constants/testIds";
import { MapPin, Coffee, Star } from "lucide-react";

const Hero = ({ t }) => {
  const h = t?.hero;

  if (!h) return null;

  return (
    <section
      id="hero"
      data-testid={HERO.section}
      className="relative pt-24 pb-20 sm:pt-32 lg:pt-40 overflow-hidden"
    >
      {/* floating decoration */}
      <div className="absolute top-24 right-10 w-20 h-20 rounded-full bg-[#FDF1BA] animate-bob opacity-80 hidden md:block" />
      <div className="absolute bottom-32 left-12 w-12 h-12 rounded-full bg-[#A8D0E6] animate-bob opacity-70 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* TEXT */}
        <div className="lg:col-span-7 relative z-10">
          <span className="tag-chip">
            <Star className="w-3.5 h-3.5" /> {h.tag}
          </span>

          <h1 className="font-display text-[2.8rem] sm:text-6xl lg:text-[7rem] leading-[0.95] font-bold text-[#2D3142] mt-5">
            Pastel<span className="text-[#F4B8C1]">kovo</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-[#5C6173] max-w-xl leading-relaxed">
            {h.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#reservation"
              data-testid={HERO.ctaPrimary}
              className="btn-pill btn-primary text-sm sm:text-base"
            >
              {h.cta_primary}
            </a>

            <a
              href="#menu"
              data-testid={HERO.ctaSecondary}
              className="btn-pill btn-outline text-sm sm:text-base"
            >
              <Coffee className="w-4 h-4" /> {h.cta_secondary}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-[#5C6173]">
            <MapPin className="w-4 h-4 text-[#F4B8C1]" />
            <span className="font-semibold">{h.addr}</span>
          </div>
        </div>

        {/* IMAGE */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto w-full max-w-md aspect-[3/4] arch bg-[#FAD4D8] shadow-soft">
            <img
              src="https://images.pexels.com/photos/8430292/pexels-photo-8430292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700"
              alt="Pastelkovo play area"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white rounded-3xl shadow-soft px-4 py-3 sm:px-5 sm:py-4 hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FDF1BA] flex items-center justify-center">
              <Star className="w-5 h-5 text-[#2D3142]" />
            </div>

            <div>
              <p className="font-bold text-sm text-[#2D3142]">200+ rodín</p>
              <p className="text-xs text-[#5C6173]">{h.tag}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
