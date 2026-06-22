import React from "react";
import { Coffee, GlassWater, Leaf, CupSoda } from "lucide-react";

const Menu = ({ t }) => {
  const groups = [
    { key: "coffee", title: t.menu.coffee, icon: Coffee, color: "#FDF1BA" },
    { key: "limo", title: t.menu.limo, icon: GlassWater, color: "#F4B8C1" },
    { key: "matcha", title: t.menu.matcha, icon: Leaf, color: "#A8D0E6" },
    { key: "icetea", title: t.menu.icetea, icon: CupSoda, color: "#FAD4D8" },
  ];

  return (
    <section id="menu" className="py-14 sm:py-20 lg:py-32 bg-[#FFF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="tag-chip">{t.menu.kicker}</span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 text-[#2D3142]">
            {t.menu.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#5C6173]">{t.menu.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.key}
                className="bg-white rounded-[2.5rem] p-8 shadow-soft border border-[#EBE3DC] hover:-translate-y-1 transition-transform duration-300"
                data-testid={`menu-card-${g.key}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: g.color }}
                >
                  <Icon className="w-6 h-6 text-[#2D3142]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#2D3142]">
                  {g.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {t.menu.items[g.key].map((it, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between text-[#5C6173] border-b border-dashed border-[#EBE3DC] py-2 last:border-0"
                    >
                      <span>{it}</span>
                      <span className="text-[#2D3142] font-bold">·</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="text-center mt-8 text-sm text-[#5C6173] italic">
          {t.menu.note}
        </p>
      </div>
    </section>
  );
};

export default Menu;
