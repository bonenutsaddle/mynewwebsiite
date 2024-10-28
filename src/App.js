import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeCara from "./components/pages/Home/homecarsoul/HomeCara";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./components/pages/about-us/Aboutus";
import Contact from "./components/pages/contact-us/Contact";
import BoneNut from "./components/pages/product/BoneNut";
import PageDetails from "./components/pages/product/PageDetails";
import ImageFullVeiw from "./components/pages/product/ImageFullVeiw";
import SearchResults from "./components/pages/product/SearchResults";
import NewSearch from "./components/pages/product/NewSearch";
import Logo from "./assets/footerlogo.png";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); 
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="">
      <div class="loader-container">
      <div class="loader-box">
        <div class="loader"><span></span></div>
        <div class="loader"><span></span></div>
        <div class="loader"><i></i></div>
        <div class="loader"><i></i></div>
      </div>
      <img src={Logo} alt="" className="newlogo sm:hidden md:hidden lg:block" />
    </div>
      </div>
    );
  }

  return (
    <section
      className="h-screen bg-Hero bg-cover font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeCara />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/products?" element={<BoneNut />} />
        <Route path="/page-details" element={<ImageFullVeiw />} />
        <Route path="/product/details?" element={<PageDetails />} />
        <Route path="/searchproducts" element={<SearchResults />} />
        <Route path="/newsearch" element={<NewSearch />} />
      </Routes>
      <Footer />
    </section>
  );
};

export default App;
