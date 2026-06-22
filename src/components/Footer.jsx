import React from "react";
import { Heart, Phone, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
const Footer = ({ t }) => {
  return (
    <footer className="bg-[#2D3142] text-[#FFF8F3] py-14 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="font-display text-3xl font-bold">
              Pastel<span className="text-[#F4B8C1]">kovo</span>
            </p>
            <p className="mt-3 text-sm text-[#CDE4F1]/70 max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-[#FAD4D8]">
              <MapPin className="w-4 h-4" /> Pavlovičovo námestie 34, Prešov
            </div>
            <div className="flex items-center gap-2 text-[#FAD4D8]">
              <Phone className="w-4 h-4" /> 0902 154 300
            </div>
            <a
              href="https://instagram.com/pastelkovo.presov"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[#FAD4D8] hover:text-white"
            >
              <FaInstagram className="w-4 h-4" /> @pastelkovo.presov
            </a>
          </div>

          <div className="text-sm text-[#CDE4F1]/70 md:text-right">
            <p>© {new Date().getFullYear()} Pastelkovo.</p>
            <p className="mt-1">{t.footer.rights}</p>
            <p className="mt-4 flex md:justify-end items-center gap-1">
              Made with{" "}
              <Heart className="w-3 h-3 text-[#F4B8C1] fill-[#F4B8C1]" /> in
              Prešov
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
