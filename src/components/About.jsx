import React from "react";
import { Check } from "lucide-react";

const About = ({ t }) => {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-32 bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-5 relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="arch overflow-hidden aspect-[3/4] bg-[#CDE4F1]">
              <img
                src="https://images.pexels.com/photos/8430246/pexels-photo-8430246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=500"
                alt="indoor playground"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[2rem] overflow-hidden aspect-[3/4] mt-8 sm:mt-12 bg-[#FDF1BA]">
              <img
                src="https://images.pexels.com/photos/33618578/pexels-photo-33618578.jpeg"
                alt="matcha latte"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="tag-chip">{t.about.kicker}</span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 text-[#2D3142]">
            {t.about.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#5C6173] leading-relaxed">{t.about.p1}</p>
          <p className="mt-3 text-base sm:text-lg text-[#5C6173] leading-relaxed">{t.about.p2}</p>

          <ul className="mt-7 space-y-3">
            {t.about.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F4B8C1] text-[#2D3142] flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-[#2D3142] font-semibold">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
