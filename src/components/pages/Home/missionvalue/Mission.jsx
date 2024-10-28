import React, { useEffect } from 'react';
import "./mission.css";
import { GiNightVision } from "react-icons/gi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { SiSemanticuireact } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';  // Import the useTranslation hook

function Mission() {
    const { t } = useTranslation(); // Initialize the t function

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <div className="containe w-[90%] mx-auto lg:px-16 sm:px-4 p-4">
                <div className="latest-text-start mt-10 text-center">
                    <p data-aos="fade-left" className='lg:text-4xl sm:text-2xl font-semibold'>
                        <span className='text-black'>{t('Our Vision & Experts, Quality').split('&')[0]}</span> {/* Use t() */}
                        <span>{t('Our Vision & Experts, Quality').split('&')[1]}</span> {/* Use t() */}
                        <div className="hr-line" style={{ border: "1px solid #d79f00" }}></div>
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-10">
                    <div data-aos="flip-left" className="rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-4 shadow-lg p-6 bg-amber-600 hover:bg-amber-800">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                                <GiNightVision style={{ fontSize: "60px" }} />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-black text-center mb-2">{t('Vision')}</h2> {/* Use t() */}
                        <p className="text-white text-sm px-4 font-extralight">
                            {t('Our main priority is to attain absolute customer satisfaction for which our team works efficiently to keep the product\'s quality. Moreover, our team.')}
                        </p>
                    </div>
                    <div data-aos="fade-down" className="rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-4 shadow-lg p-6 hover:bg-amber-600">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                                <BsFillRocketTakeoffFill style={{ fontSize: "60px" }} />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-black text-center mb-2">{t('Experts')}</h2> {/* Use t() */}
                        <p className="text-black text-sm px-4">
                            {t('Our experts have a deep knowledge of dominant market trends. Therefore they have practiced enough to appreciate the exact obligation of the client.')}
                        </p>
                    </div>
                    <div data-aos="flip-right" className="rounded-lg sm:col-span-12 md:col-span-6 lg:col-span-4 shadow-lg p-6 bg-amber-600 hover:bg-amber-800">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                                <SiSemanticuireact style={{ fontSize: "60px" }} />
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-black text-center mb-2">{t('Quality')}</h2> {/* Use t() */}
                        <p className="text-white text-sm px-4 font-extralight">
                            {t('Apart from the compliance of different products with global quality standards, we have become a good choice for our clients. We focus more on ethical.')}
                        </p>
                    </div>
                </div>
                <div className="testimonial-container">
                    <div data-aos="fade-right" className="testimonial-text lg:mx-[20%] lg:my-[8%] sm:m-4 text-center">
                        <div className="border-text">
                            <p>{t('In promotion and advertising, a testimonial consists of a person\'s experience in a written statement extolling the integrity of a product or services.')}</p>
                            <div className="testimonial-btn">
                                <button onClick={() => navigate('/about-us')}>{t('Get More Info.')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mission;
