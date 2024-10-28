import React, { useEffect, useState } from 'react';
import ContactBanner from "../../../assets/contact-banner.webp";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import QueryForm from "../../pages/Home/queryform/QueryForm";
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    const ids = [1, 2, 3, 4, 5];
    const listElements = ids.map((id) => {
        return (
            <li key={id.toString()}>
                {id}
            </li>
        )
    })

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>
       <Helmet>
  <title>Contact-Us RC Creations</title>
  <meta name="description" content="Contact RC Creations for natural horn combs, bone hair combs, and more. Reach out for inquiries, feedback, or business opportunities." />
  <link rel="canonical" href="/contact-us" />
</Helmet>
            <div className="relative w-full  sm:h-[12rem] lg:h-[70vh] text-center ">
                <img src={ContactBanner} alt="" className='absolute  opacity-80 w-full sm:h-fit lg:h-full object-full' />
                <div className="absolute top-16 left-10 ">
                    <h1 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className="md:text-6xl lg:text-5xl text-black sm:text-xl font-semibold">
                        Contact Us <p className='text-[#902fff] text-start mt-3'>Now</p>
                    </h1>

                </div>
            </div>

            <div className="w-[90%] mx-auto lg:my-16 sm:my-2">
                <h4 data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" className='text-center my-10 lg:text-4xl sm:text-2xl sm:w-[95%] lg:w-[70%] font-bold mx-auto'>Please don't hesitate to contact us
                    with any inquiries or messages.</h4>
                <div className="bg-[#003780] p-10 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div data-aos="fade-right" className="flex flex-col items-center justify-center sm:w-full lg:w-[33%] gap-2">
                            <FaMapMarkerAlt className="text-white text-7xl border-2 p-5 cursor-pointer hover:bg-transparent rounded-full  bg-black" />
                            <h3 className="text-white text-3xl font-bold mt-4">Head Office Address</h3>
                            <p className="text-white text-base w-[100%]  ">
                                Khasra No: 1703/1, Toli Mohalla, Mohalla Purvi Jatav, LONI – Ghaziabad-201102, UP, INDIA
                            </p>
                        </div>
                        <div data-aos="fade-up" className="flex flex-col items-center justify-center gap-2">
                            <FaPhone className="text-white text-7xl border-2 p-5 cursor-pointer hover:bg-transparent  rounded-full bg-black" />
                            <h3 className="text-white text-3xl font-bold mt-4">Get In Touch</h3>
                            <p className="text-white text-base cursor-pointer">
                                <a href="tel:+91 9266-116358">+91 9266-116358</a>
                            </p>
                            <p className="text-white text-base cursor-pointer">
                                <a href="tel:+91 11- 4227-3742">+91 11-4227-3742</a>
                            </p>
                        </div>
                        <div data-aos="fade-left" className="flex flex-col items-center justify-center gap-2">
                            <FaEnvelope className="text-white text-7xl border-2 cursor-pointer hover:bg-transparent  p-5 rounded-full bg-black" />
                            <h3 className="text-white text-3xl font-bold mt-4 ">Email Address</h3>
                            <p className="text-white text-base cursor-pointer">
                                <a href="mailto:info@bonehornmart.com">info@bonehornmart.com</a>
                            </p>
                            <p className="text-white text-base cursor-pointer">
                                <a href="mailto:rccreation.team@yahoo.com">rccreation.team@yahoo.com</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <QueryForm />




        </>
    )
}

export default Contact