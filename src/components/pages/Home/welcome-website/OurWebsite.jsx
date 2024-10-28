import React, { useEffect } from 'react';
import OurWebsiteImg from '../../../../assets/ourwebsiteimg.webp';
import "./ourwebsite.css";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';  // Import the useTranslation hook

function OurWebsite() {
    const { t } = useTranslation(); // Initialize the t function

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <>
            <div className="mt-10 overflow-hidden">
                <div className="border grid grid-cols-12 border-black lg:mx-10 sm:mx-4 sm:p-5 lg:p-10 sm:gap-0 lg:gap-10">
                    <div data-aos="zoom-in" className="ourwebsite-img sm:col-span-12 md:col-span-6 lg:col-span-6">
                        <img src={OurWebsiteImg} alt="" className='lg:w-[100%] sm:w-[100%] lg:h-fit sm:p-2' />
                    </div>
                    <div data-aos="zoom-in-up" className="ourwebsite-text sm:pb-4 sm:col-span-12 md:col-span-6 lg:col-span-6">
                        <p className='lg:text-4xl sm:pt-6 sm:text-2xl font-bold'>{t('Welcome to our Website')}</p> {/* Use t() */}
                        <p className='sm:text-sm lg:text-base'>
                            {t('About us Located in Ghaziabad, Uttar Pradesh (India), we at Gift Mart was established in the year 2015.')}
                            <h3>{t('We are one of the preeminent Suppliers of exquisite range that includes Wooden and Resin Coaster Set, Natural Horn Comb, Bone Hair Comb, Wooden Hair Comb, Horn Drinking Mugs, Horn Bone Jewelry Box, Wooden MDF Box, Mother of Pearl Box, Buffalo Horn Box, Wooden Lamp and Buffalo Horn Toggles, etc.')}</h3>
                            {t('Apart from the compliance of different products with global quality standards, we have become a good choice for our clients. We focus more on ethical business policies and help the clients with open quality products. Additionally, to answer the needs of the clients, we make proper quality testing of the products at different levels. Our experts have a deep knowledge of dominant market trends.')}
                        </p>
                        <div className="testimonial-btn text-start">
                            <button onClick={() => navigate('/about-us')}>{t('Read More.')}</button> {/* Use t() */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurWebsite;
