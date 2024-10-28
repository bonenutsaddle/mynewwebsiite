import React, { useEffect } from 'react';
import "./footer.css";
import FooterLogo from "../../assets/footerlogo.png";
import { IoLocation } from "react-icons/io5";
import { FcCellPhone } from "react-icons/fc";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import WhtspIcon from "../../assets/whatsapp.png";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { FaCircleChevronUp } from "react-icons/fa6";
function Footer() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    const navigate = useNavigate();
    return (
        <>
            <div className="whatsapp-icon">
                <div className="whtasapp sytem-top">
                    <div className="whatsapp-chat chat-box-whats text-black">
                        {t('Whatsapp Chat')}
                    </div>
                    <Link to={"https://web.whatsapp.com/919310452760"} target="_blank">
                        <span className="whats-img-last">
                            <img src={WhtspIcon} alt='' />
                        </span>
                    </Link>
                </div>
            </div>

            <div className='fixed bottom-8 left-[25px]'>
                <button className='text-4xl w-100 text-black bg-white p-2 rounded-md' onClick={handleClick}><FaCircleChevronUp /></button>
            </div>
            <footer className='footer-main'>
                <div className="w-[90%]  my-10 mx-auto justify-center grid grid-cols-12 sm:gap-4 gap-10 ">
                    <div data-aos="fade-right" className="footer1 sm:col-span-12 md:col-span-6 lg:col-span-3 mt-[-35px] ">
                        <ul>
                            <li>
                                <img src={FooterLogo} alt="" onClick={() => navigate('/')} className='cursor-pointer' />
                            </li>
                            <li >
                                <p className='lg:w-[85%] md:w-[85%]  sm:w-full text-[0.9rem]'>
                                    {t('RC Creation found 1985 was a cottage industries, now are the world wide largest Exporter , with an affirmation to manufacturing and retailing a high-quality range of Camel bone and water buffalo horn , Wooden and Leather Handicraft Items.')}
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div data-aos="fade-down" className="footer2 sm:col-span-12 md:col-span-6 lg:col-span-3">
                        <h3 className='text-2xl font-bold mb-4'>{t('Explore')}</h3>
                        <ul>
                            <li onClick={() => navigate('/about-us')}>{t('About Us')}</li>
                            <li onClick={() => navigate('/')}>{t('Home')}</li>
                            <li onClick={() => navigate('/contact-us')}>{t('Contact Us')}</li>
                            <h3 className='text-2xl font-bold my-4'>{t('Follow Us')}</h3>
                            <div className="flex gap-2 follow-us">
                                <FaFacebook />
                                <AiFillInstagram />
                                <FaSquareTwitter />
                                <FaLinkedin />
                            </div>
                        </ul>
                    </div>
                    <div data-aos="fade-up" className="footer2 sm:col-span-12 md:col-span-6 lg:col-span-3">
                        <h3 className='text-2xl font-bold mb-4'>{t('Our Products')}</h3>
                        <ul>
                            <li onClick={() => navigate('/products?headslug=water-buffalo-horn')}>{t('Knife Handles')}</li>
                            <li onClick={() => navigate('/products?headslug=teflon-bone-folder')}>{t('Teflon Bone Folder')}</li>
                            <li onClick={() => navigate('/products?headslug=guitar-horn-nut-saddle-pics')}>{t('Horn Saddle')}</li>
                            <li onClick={() => navigate('/products?headslug=bone-nut')}>{t('Guitar Components')}</li>
                            <li onClick={() => navigate('/products?headslug=dominoes-set')}>{t('Dominoes Set')}</li>
                        </ul>
                    </div>
                    <div data-aos="fade-left" className="footer4 sm:col-span-12 md:col-span-6 lg:col-span-3">
                        <h3 className='text-2xl font-bold mb-4'>{t('Head Office Address')}</h3>
                        <ul>
                            <li><p className='flex'>
                                <span><IoLocation /></span>
                                <span>{t('Khasra No: 1703/1, Toli Mohalla, Mohalla Purvi Jatav, LONI – Ghaziabad-201102, UP, INDIA')}</span>
                            </p></li>
                            <li><div className='flex'>
                                <span><FcCellPhone /></span>
                                <a href='tel:+919266-116358'>+91 9266-116358</a>
                            </div></li>
                            <li><div className='flex'>
                                <span><GiRotaryPhone /></span>
                                <a href='tel:+9111-4227-3742'>+91 11-4227-3742</a>
                            </div></li>
                            <li><div className='flex'>
                                <span><IoMail /></span>
                                <a href='mailto:info@bonehornmart.com'>info@bonehornmart.com</a>
                            </div></li>
                            <li><div className='flex'>
                                <span><IoMail /></span>
                                <a href='mailto:rccreation.team@yahoo.com'>rccreation.team@yahoo.com</a>
                            </div></li>
                        </ul>
                    </div>
                </div>
                <div className="reserved-section">
                    <div className='hr-line w-full' />
                    <p className='text-center'>{t("Copyright © 1985-2024")} <span className='text-[#F9C51C] font-semibold'>RC Creation.</span> {t("All Rights Reserved.")} </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
