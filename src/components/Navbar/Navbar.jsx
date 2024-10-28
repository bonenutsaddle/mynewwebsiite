// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
// import NavLinks from "./NavLinks";
// import "./navbar.css"
// import { FcSearch } from "react-icons/fc";
// const Navbar = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false)
//   const handleCloseNavbar = () => {
//     setOpen(false);
//   };

//   const handleClick = (e) => {
//     handleCloseNavbar();
//   };

//   return (
//     <nav className="bg-white navbar1 sticky" >
//       <div className="flex items-center  font-medium justify-around">
//         <div className="z-50 p-5 md:w-auto w-full flex justify-between">
//           <img src={Logo} loading="eager" title="logo section" onClick={() => navigate("/")} alt="logo" className="md:cursor-pointer h-9 " />
//           <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
//             <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
//           </div>
//         </div>
//         <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
//           <li>
//             <Link to="/" className="py-7 px-3 inline-block" onClick={handleClick}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about-us" className="py-7 px-3 inline-block" onClick={handleClick}>
//               About Us
//             </Link>
//           </li>
//           <NavLinks handleClick={handleClick} />

//           <li>
//             <Link to="/contact-us" className="py-7 px-3 inline-block" onClick={handleClick}>
//               Contact Us
//             </Link>
//           </li>
//           {/* <li><FcSearch className="text-4xl cursor-pointer" onClick={ =()=> navigate ("/prod")}/></li> */}
//         </ul>
//         {/* Mobile nav */}
//         <ul
//           className={`
//   md:hidden bg-white z-50 fixed w-full capitalize navbar1 top-0 overflow-y-auto bottom-0 pt-[75px] pl-4
//   duration-500 ${open ? "left-0" : "left-[-100%]"}
// `}
//         >
//           <li>
//             <Link to="/" className="py-7 px-3 inline-block" onClick={handleClick}>
//           Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about-us" className="py-7 px-3 inline-block" onClick={handleClick}>
//               About Us
//             </Link>
//           </li>
//           <NavLinks handleClick={handleClick} />
//           <li>
//             <Link to="/contact-us" className="py-7 px-3 inline-block" onClick={handleClick}>
//               Contact Us
//             </Link>
//           </li>
//           <div className="py-5">
//             {/* <Button /> */}
//           </div>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import NavLinks from "./NavLinks";
import "./navbar.css";
import { FcSearch } from "react-icons/fc";
import SearchLogo from '../../assets/searching-logo.png'; 
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  
  const handleClick = () => {
    setOpen(false);
  };


  const LanguageSwitcher = () => (
    <select value={i18n.language} className="border-none focus:outline-none focus:shadow-outline focus:ring-0 focus:border-white appearance-none border" onChange={(e) => handleLanguageChange(e.target.value)}>
      <option className='text-sm' value="en">{t('English')}</option>
      <option className='text-sm' value="fr">{t('French')}</option>
      <option className='text-sm' value="es">{t('Spanish')}</option>
      <option className='text-sm' value="jn">{t('Japanese')}</option>
      <option className='text-sm' value="il">{t('Italian')}</option>
      {/* Add more languages here */}
    </select>
  );

  return (
    <nav className="bg-white navbar1 sticky">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} loading="eager" title={t('logoSection')} onClick={() => navigate("/")} alt={t('logo')} className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? t('close') : t('menu')}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-4 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-1 inline-block hover:text-orange-500" onClick={() => setOpen(false)}>
              {t('home')}
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="py-7 px-1 inline-block hover:text-orange-500" onClick={() => setOpen(false)}>
              {t('about Us')}
            </Link>
          </li>
          <NavLinks t={t} handleClick={handleClick} />
          <li> 
            <Link to="/contact-us" className="py-7 px-1 inline-block hover:text-orange-500" onClick={() => setOpen(false)}>
              {t('contact Us')}
            </Link>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
          <li>
            <img src={SearchLogo} alt="" className='w-[35px] h-[35px] cursor-pointer hover:opacity-80' onClick={() => navigate("/searchproducts")} />
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-white z-50 fixed w-full capitalize navbar1 top-0 overflow-y-auto bottom-0 mt-[80px] pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li>
            <LanguageSwitcher onClick={() => setOpen(false)} />
          </li>
          <li>
            <Link to="/" className="py-7 px-1 inline-block" onClick={() => setOpen(false)}>
              {t('home')}
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="py-7 px-1 inline-block" onClick={() => setOpen(false)}>
              {t('about Us')}
            </Link>
          </li>
          <NavLinks t={t} handleClick={handleClick} />
          <li>
            <Link to="/contact-us" className="py-7 px-1 inline-block" onClick={() => setOpen(false)}>
              {t('contact Us')}
            </Link>
          </li>
         
          <li>
            <img src={SearchLogo} alt="" 
              className='w-[50px] h-[50px] my-7 cursor-pointer hover:opacity-8'
              onClick={() => {
                navigate("/searchproducts");
                setOpen(false);
              }}  
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;