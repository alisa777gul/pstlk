import React from "react";

const images = [
  {
    src: "https://images.pexels.com/photos/8430246/pexels-photo-8430246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=500",
    className: "row-span-2 arch bg-[#FAD4D8]",
  },
  {
    src: "https://images.pexels.com/photos/33618578/pexels-photo-33618578.jpeg",
    className: "rounded-[2rem] bg-[#FDF1BA]",
  },
  {
    src: "https://images.unsplash.com/photo-1722478347260-5aba978612ff?auto=format&fit=crop&w=800&q=80",
    className: "rounded-[2rem] bg-[#CDE4F1]",
  },
  {
    src: "https://images.pexels.com/photos/7450611/pexels-photo-7450611.png?auto=compress&cs=tinysrgb&dpr=2&h=600&w=500",
    className: "arch bg-[#F4B8C1]",
  },
  {
    src: "https://images.pexels.com/photos/8430292/pexels-photo-8430292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=500",
    className: "rounded-[2rem] bg-[#A8D0E6]",
  },
];

const Gallery = ({ t }) => {
  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-32 bg-[#FAD4D8]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <span className="tag-chip">{t.gallery.kicker}</span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 text-[#2D3142]">
              {t.gallery.title}
            </h2>
          </div>
          <p className="text-[#5C6173] max-w-md text-base sm:text-lg">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 sm:gap-4 lg:gap-6 h-[420px] sm:h-[560px] md:h-[640px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden ${img.className} ${i === 0 ? "row-span-2" : ""} shadow-soft transition-transform duration-500 hover:scale-[1.02]`}
            >
              <img
                src={img.src}
                alt={`gallery-${i}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
