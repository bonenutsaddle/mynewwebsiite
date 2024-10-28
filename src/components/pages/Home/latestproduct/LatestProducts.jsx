import React, { useEffect } from 'react';
import "./latestproduct.css";
import KnifeImg from "../../../../assets/knife-handle.png";
import BoneFolderImg from "../../../../assets/bone-folder.png";
import BoneDiceImg from "../../../../assets/bone-dice.png";
import GuitarComponetImg from "../../../../assets/guitar-component.png";
import PenBlankImg from "../../../../assets/pen-blank.jpeg";
import DrinkingHornImg from "../../../../assets/drinking-horn.jpg";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next'; 
const LatestProducts = () => {
    const { t } = useTranslation();

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
            <div className=' bg-[#21211f] pt-10'>
                <div className="latest-product-container lg:w-[90%] sm:w-full sm:mx-auto ">
                    <div className="latest-text-start">
                        <p className='text-4xl font-semibold'>
                            <span className='text-white'>{t('Latest')}</span> {/* Use t() */}
                            <span>{t('Products')}</span> {/* Use t() */}
                            <div className="hr-line"></div>
                        </p>
                    </div>
                    <div className="container-latest-p sm:gap-[20px] sm:mx-auto sm:text-center sm:items-center grid grid-cols-12 mt-12">
                        <div data-aos="fade-right" className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={KnifeImg} alt={t('Knife handle image')} /> {/* Add t() for alt */}
                            <div className="intro-latest-p">
                                <p className="text-h1">{t('knife handle')}</p> {/* Use t() */}
                                <p className="text-p">
                                    {t('Our expertly crafted bone knife handles are made from premium animal bone, precision-fitted to ensure a comfortable grip and durable performance, perfect for discerning knife enthusiasts and collectors.')}
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn' onClick={() => navigate("/products?headslug=giraffe-bone-recone-true-x-grip")}>
                                        {t('More Product')}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={BoneFolderImg} alt={t('Bone folder image')} /> {/* Add t() for alt */}
                            <div className="intro-latest-p">
                                <p className="text-h1">{t('bone folder')}</p> {/* Use t() */}
                                <p className="text-p">
                                    {t('Our bone folder is a premium quality tool used by crafters and bookbinders alike. Our manufactured bone folders utilize high-quality materials, making them durable and precise.')}
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn' onClick={() => navigate("/products?headslug=teflon-bone-folder")}>
                                        {t('More Product')}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={BoneDiceImg} alt={t('Bone dice image')} /> {/* Add t() for alt */}
                            <div className="intro-latest-p">
                                <p className="text-h1">{t('bone dice')}</p> {/* Use t() */}
                                <p className="text-p">
                                    {t('Add a touch of ancient charm to your tabletop games with our handcrafted Bone Dice. Made from natural bone, these unique dice bring a sense of history and mystique to your gameplay experience.')}
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>
                                        {t('More Product')}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-right" className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={GuitarComponetImg} alt={t('Guitar component image')} /> {/* Add t() for alt */}
                            <div className="intro-latest-p">
                                <p className="text-h1">{t('guitar component')}</p> {/* Use t() */}
                                <p className="text-p">
                                    {t('Discover the unique sound of our bone guitar components. Crafted from animal bone, the nut or saddle adds warmth and sustain, enhancing the overall tone of your instrument.')}
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn' onClick={() => navigate("/products?headslug=bone-nut")}>
                                        {t('More Product')}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={PenBlankImg} alt={t('Pen blanks image')} /> {/* Add t() for alt */}
                            <div className="intro-latest-p">
                                <p className="text-h1">{t('pen blanks')}</p> {/* Use t() */}
                                <p className="text-p">
                                    {t('Create unique pens with our bone pen blanks, made from high-quality animal bone. Durable and distinctive, our blanks offer a variety of shapes and sizes to elevate your pen-making craft.')}
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>
                                        {t('More Product')}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="card-latest-p sm:col-span-12 md:col-span-6 lg:col-span-4">
                            <img src={DrinkingHornImg} alt={t('Drinking horn image')} /> {/* Add t() for alt */}
                            <div className="intro-latest-p">
                                <p className="text-h1">{t('drinking horn')}</p> {/* Use t() */}
                                <p className="text-p">
                                    {t('Unleash your wild side with our genuine animal drinking horns, crafted from naturally shed antlers and horns. A rustic, eco-friendly way to enjoy your favorite beverages.')}
                                </p>
                                <div className="latestproduct-button">
                                    <button className='more-product-btn'>
                                        {t('More Product')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LatestProducts;
