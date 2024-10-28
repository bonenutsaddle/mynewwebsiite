import React from 'react';
import "./shippingpartners.css"
import FedExImg from "../../../../assets/fedex.png";
import DhlImg from "../../../../assets/dhl.png";
import UpsImg from "../../../../assets/ups.png";
import UspImg from "../../../../assets/us-150x150.png";
import { useTranslation } from 'react-i18next';

function ShippingPartners() {
    const { t } = useTranslation();

    return (
        <>
            <div className=" w-[95%] mx-auto  py-16 items-center justify-center">
                <p className='text-center font-bold text-4xl'>
                    <span>{t('Our')}</span>
                    <span className='text-amber-600'> {t('Shipping Partners')}</span>
                </p>
                <div className="hr-line" style={{ border: "1px solid #d79f00" }}></div>

                <section className="logoMarqueeSection">
                    <div className="container" id="logoMarqueeSection">
                        <div className="default-content-container lg:px-[5rem] flex items-center">
                            <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
                                <div className="marquee" style={{ animationDuration: '10s' }}>
                                    <a target="_blank" rel="noopener noreferrer"><img src={FedExImg} alt={t('Shipping partner')} title={t('Shipping partner')} className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank" rel="noopener noreferrer"><img src={DhlImg} alt={t('Shipping partner')} title={t('Shipping partner')} className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank" rel="noopener noreferrer"><img src={UpsImg} alt={t('Shipping partner')} title={t('Shipping partner')} className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank" rel="noopener noreferrer"><img src={UspImg} alt={t('Shipping partner')} title={t('Shipping partner')} className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>

                                </div>
                                <div className="marquee" style={{ animationDuration: '10s' }}>
                                    <a target="_blank" rel="noopener noreferrer"><img src={FedExImg} alt={t('Shipping partner')} title={t('Shipping partner')} className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank" rel="noopener noreferrer"><img src={DhlImg} alt={t('Shipping partner')} title={t('Shipping partner')} className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank" rel="noopener noreferrer"><img src={UpsImg} alt={t('Shipping partner')} title={t('Shipping partner')} className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>
                                    <a target="_blank" rel="noopener noreferrer"><img src={UspImg} alt={t('Shipping partner')} title={t('Shipping partner')} className="marqueelogo" style={{ width: 'auto', maxWidth: 'none' }} /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ShippingPartners
