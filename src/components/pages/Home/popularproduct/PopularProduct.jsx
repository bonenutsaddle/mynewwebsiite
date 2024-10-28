import React, { useEffect, useState } from 'react';
import "./popularproduct.css";
import Pop1 from "../../../../assets/guitar-components/camelbone1.jpg";
import Pop2 from "../../../../assets/guitar-components/boneclasp11.1.jpg";
import Pop3 from "../../../../assets/guitar-components/dyedbonenut1.jpg";
import Pop4 from "../../../../assets/guitar-components/bp5.jpg";
import Pop5 from "../../../../assets/guitar-components/g1111.png";
import Pop6 from "../../../../assets/guitar-components/djb0.jpg";
import Pop7 from "../../../../assets/guitar-components/waterbuffalo0.jpg";
import Pop8 from "../../../../assets/guitar-components/reconetruestone0.jpg";
import Pop9 from "../../../../assets/guitar-components/woodhandle1.jpg";
import Pop10 from "../../../../assets/guitar-components/bhf7.2.jpg";
import Pop11 from "../../../../assets/guitar-components/twbf4.jpg";
import Pop12 from "../../../../assets/guitar-components/hb6.1.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';  // Import useTranslation

function PopularProduct() {
    const { t } = useTranslation();  // Initialize t function
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const [stop, setStop] = useState(false);
    const handleHover = (e) => {
        setStop(true);
    };

    return (
        <>
            <div className="latest-product-container text-center">
                <div data-aos="fade-left" className="latest-text-start">
                    <p className='text-4xl font-semibold'>
                        <span className='text-white'>{t('Popular')}</span>
                        <span>{t('Products')}</span>
                        <div className="hr-line"></div>
                    </p>
                </div>

                <div className='text-center py-10'>
                    <Marquee behavior="" delay={0.0} speed={80} pauseOnHover={handleHover}>
                        <div className="img-slide flex gap-8">
                            <div className="img-box ml-8">
                                <div className="card-latest-p">
                                    <img src={Pop1} alt="" />
                                    <div className="intro-latest-p">
                                        <p className="text-h1 text-base">{t('Camel Bone Dominoes')}</p>
                                        <p className="text-p text-sm">
                                            {t('Many folks have asked us to expand our original 6x6 Dominos game into a 9x9 configuration and we aim to please! In this edition, we added 27 new tiles (for a total of 55 hand-carved dominos/set) essentially doubling the amount of dominos/set.')}
                                        </p>
                                        <div className="latestproduct-button">
                                            <button className='more-product-btn' onClick={() => navigate("/product/details?id=46")}>{t('More Product')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-box">
                                <div className="card-latest-p">
                                    <img src={Pop2} alt="" />
                                    <div className="intro-latest-p">
                                        <p className="text-h1 text-base">{t('Bone Clasp')}</p>
                                        <p className="text-p text-sm">
                                            {t('Bone clasps are useful to add the finishing touch to Japanese bookbinding styles and can be used in creative ways. These genuine bone clasps are one inch in length.')}
                                        </p>
                                        <div className="latestproduct-button">
                                            <button className='more-product-btn' onClick={() => navigate("/product/details?id=51")}>{t('More Product')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-box">
                                <div className="card-latest-p">
                                    <img src={Pop3} alt="" />
                                    <div className="intro-latest-p">
                                        <p className="text-h1 text-base">{t('Dyed Bone Nut Blank')}</p>
                                        <p className="text-p text-sm">
                                            {t('Unleash the tone of your guitar with our premium bone nuts, crafted from sustainably sourced animal bones. Our expert luthiers carefully select and shape each nut to bring out its unique characteristics, resulting in a rich, warm sound')}
                                        </p>
                                        <div className="latestproduct-button">
                                            <button className='more-product-btn' onClick={() => navigate("/product/details?id=1")}>{t('More Product')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-box">
                                <div className="card-latest-p">
                                    <img src={Pop4} alt="" />
                                    <div className="intro-latest-p">
                                        <p className="text-h1 text-base">{t('Guitar Bridge Pin')}</p>
                                        <p className="text-p text-sm">
                                            {t('Whether crafted from camel bones, buffalo horns, or fossilized ivory, each piece is precision-made to perfectly complement your instrument.')}
                                        </p>
                                        <div className="latestproduct-button">
                                            <button className='more-product-btn' onClick={() => navigate("/product/details?id=8")}>{t('More Product')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-box">
                                <div className="card-latest-p">
                                    <img src={Pop5} alt="" />
                                    <div className="intro-latest-p">
                                        <p className="text-h1 text-base">{t('Guitar Slides')}</p>
                                        <p className="text-p text-sm">
                                            {t('Transform your guitar\'s sound with our premium Guitar animals Inlay, crafted from sustainably sourced materials. Our skilled artisans carefully design each inlay to optimize resonance and sustain, delivering a rich, vibrant tone.')}
                                        </p>
                                        <div className="latestproduct-button">
                                            <button className='more-product-btn' onClick={() => navigate("/product/details?id=14")}>{t('More Product')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-box">
                                <div className="card-latest-p">
                                    <img src={Pop6} alt="" />
                                    <div className="intro-latest-p">
                                        <p className="text-h1 text-base">{t('Camel Bone Knife Handle')}</p>
                                        <p className="text-p text-sm">
                                            {t('Our skilled artisans carefully design each component to optimize resonance and sustain, delivering a rich, vibrant tone. Whether crafted from intricate designs, exotic woods, or precious stones, each piece is precision-made to perfectly complement your instrument.')}
                                        </p>
                                        <div className="latestproduct-button">
                                            <button className='more-product-btn' onClick={() => navigate("/product/details?id=20")}>{t('More Product')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Marquee>
                </div>
                <div className='text-center py-5'>
                    <Marquee behavior="" delay={0.0} speed={60} pauseOnHover={handleHover}>
                        <div className="img-slide flex gap-8">
                            <div className="img-box ml-8">
                                <div className="card-latest-p">
                                    <img src={Pop7} alt="" />
                                    <div className="intro-latest-p ">
                                        <p className="text-h1 text-base">{t('Water Buffalo Horn Smooth')}</p>
                                        <p className="text-p text-sm">
                                            {t('Enhance your instrument\'s sound with our premium Water Buffalo Horn, crafted from sustainably sourced materials. Our skilled artisans carefully design each component to optimize resonance and sustain, delivering a rich, vibrant tone')}
                                        </p>
                                        <div className="latestproduct-button">
                                            <button className='more-product-btn' onClick={() => navigate("/product/details?id=22")}>{t('More Product')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-box">
                                <div className="card-latest-p">
                                    <img src={Pop8} alt="" />
                                    <div className="intro-latest-p">
                                        <p className="text-h1 text-base">{t('Recone True Stone')}</p>
                                        <p className="text-p text-sm">
                                            {t('Elevate your performance with our premium Animals, Giraffe Bone Look, Recone True Stone and X-Grip Handle, crafted from expertly selected materials. Our skilled craftsmen meticulously design each element to maximize comfort and control, delivering a confident, expressive show.')}
                                        </p>
                                        <div className="latestproduct-button">
                                            <button className='more-product-btn' onClick={() => navigate("/product/details?id=27")}>{t('More Product')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-box">
                                <div className="card-latest-p">
                                    <img src={Pop9} alt="" />
                                    <div className="intro-latest-p">
                                        <p className="text-h1 text-base">{t('Stabilized Wood Handle')}</p>
                                        <p className="text-p text-sm">
                                            {t('Elevate your performance with our premium Sheep Horn Handles, Ox-Zebu Horn Handles and Stabilized Wood Handle, crafted from expertly selected materials. Our skilled craftsmen meticulously design each element to maximize comfort and control, delivering a confident, expressive show.')}
                                        </p>
                                        <div className="latestproduct-button">
                                            <button className='more-product-btn' onClick={() => navigate("/product/details?id=31")}>{t('More Product')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-box">
                                <div className="card-latest-p">
                                    <img src={Pop10} alt="" />
                                    <div className="intro-latest-p">
                                        <p className="text-h1 text-base">{t('Buffalo Bone Hair Pipe Beads')}</p>
                                        <p className="text-p text-sm">
                                            {t('Real bone hair pipe beads are meticulously crafted from authentic bone, offering a unique and natural texture. Each bead is hand-carved to reveal intricate patterns and a warm, organic feel.')}
                                        </p>
                                        <div className="latestproduct-button">
                                            <button className='more-product-btn' onClick={() => navigate("/product/details?id=42")}>{t('More Product')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-box">
                                <div className="card-latest-p">
                                    <img src={Pop11} alt="" />
                                    <div className="intro-latest-p">
                                        <p className="text-h1 text-base">{t('Teflon Bone Folder')}</p>
                                        <p className="text-p text-sm">
                                            {t('Elevate your bookbinding experience with our premium Teflon Bone Folder, crafted from expertly selected materials. Our skilled craftsmen meticulously design each element to maximize precision and control, delivering a confident, professional finish.')}
                                        </p>
                                        <div className="latestproduct-button">
                                            <button className='more-product-btn' onClick={() => navigate("/product/details?id=35")}>{t('More Product')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    );
}

export default PopularProduct;
