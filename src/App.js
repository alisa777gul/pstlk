import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { translations } from "./i18n";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Pricing from "./components/Pricing";
import Birthdays from "./components/Birthdays";
import Babysitting from "./components/Babysitting";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";

const Site = () => {
  const [lang, setLang] = useState("sk");
  const t = translations[lang];
  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <About t={t} />
      <Gallery t={t} />
      <Menu t={t} />
      <Pricing t={t} />
      <Birthdays t={t} />
      <Babysitting t={t} />
      <Reservation t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
};

function App() {
  return (
    <div className="App font-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Site />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
