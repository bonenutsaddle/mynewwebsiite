import React, { useState, useEffect } from 'react';
import QueryFormImg from "../../../../assets/work-from-home.png";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./queryform.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

function QueryForm() {
    const { t } = useTranslation(); // Use translation hook
    const [phone, setPhone] = useState();

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        watch,
        control,
        setValue,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
        mode: "onTouched",
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState(false);

    const apiKey = process.env.PUBLIC_ACCESS_KEY || "f79ff2f9-b9fd-4757-bf4b-879447bad7b1";

    const { submit: onSubmit } = useWeb3Forms({
        access_key: apiKey,
        settings: {
            from_name: t("RC Creation Website Form"),
            subject: t("New Contact Message from your Website"),
        },
        formData: {
            name: watch("name"),
            email: watch("email"),
            phone: watch("phone"),
            message: watch("message"),
        },
        onSuccess: (msg, data) => {
            setIsSuccess(true);
            setMessage(msg);
            reset();
        },
        onError: (msg, data) => {
            setIsSuccess(false);
            setMessage(msg);
        },
    });

    return (
        <>
            <div className="bg-blue-500 min-h-fit grid grid-cols-12 justify-center">
                <div data-aos="fade-right" className="w-[80%] lg:col-span-6 sm:col-span-12 mx-auto p-10">
                    <div className="query-img h-[80%] w-[80%]">
                        <img src={QueryFormImg} alt={t("alt")} />
                    </div>
                </div>
                <div data-aos="fade-left" className="query-form-text mt-12 lg:col-span-6 sm:col-span-12 sm:pb-4 sm:ml-5">
                    <h4 data-aos="flip-left" className="text-4xl font-bold text-white w-[90%]">
                        {t("Let's Connect With Us")}
                    </h4>
                    <form onSubmit={handleSubmit(onSubmit)} autocomplete="off" action="" className='space-y-4 mt-10 w-[80%] mx-auto'>
                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
                            <div>
                                <input
                                    type="text"
                                    autocomplete="off"
                                    placeholder={t('*Your Name')}
                                    {...register("name", {
                                        required: t("Full Name is Required"),
                                        maxLength: 60,
                                    })}
                                    className="shadow placeholder-white appearance-none focus:ring-0 focus:border-white name-input-box border border-white bg-blue-800 rounded w-[100%] py-3 px-2 leading-tight text-white focus:outline-none focus:shadow-outline"
                                />
                                {errors.name && (
                                    <div className="mt-1 text-white ml-2">
                                        <small>{errors.name.message}</small>
                                    </div>
                                )}
                            </div>
                            <div>
                                <input
                                    autocomplete="off"
                                    type="email"
                                    placeholder={t('*E-Mail')}
                                    id="email_address"
                                    name="email"
                                    {...register("email", {
                                        required: t("Enter your email"),
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: t("Please enter a valid email"),
                                        },
                                    })}
                                    className="shadow placeholder-white focus:ring-0 focus:border-white appearance-none border border-white bg-blue-800 rounded w-[100%] py-3 px-2 text-white leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors.email && (
                                    <div className="mt-1 text-white ml-2">
                                        <small>{errors.email.message}</small>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
                            <div>
                                <input
                                    autocomplete="off"
                                    type="tel"
                                    id="phone"
                                    placeholder={t('*Your Phone Number')}
                                    name="phone"
                                    {...register("phone", {
                                        required: t("Phone number is required"),
                                    })}
                                    className="shadow placeholder:text-white focus:ring-0 focus:border-white text-white appearance-none border border-white bg-blue-800 rounded w-[100%] py-[10px] px-2 "
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('*Organization Name')}
                                    id="name"
                                    {...register("Organization Name", {
                                        maxLength: 50,
                                    })}
                                    className="shadow placeholder-white focus:ring-0 focus:border-white appearance-none name-input-box border border-white bg-blue-800 rounded w-[100%] py-3 px-2 leading-tight text-white focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('*Products/Service Looking For')}
                                    id="name"
                                    {...register("products", {
                                        maxLength: 50,
                                        message: t("Please enter your products"),
                                    })}
                                    className="shadow placeholder-white focus:ring-0 focus:border-white appearance-none name-input-box border border-white bg-blue-800 rounded w-[100%] py-3 px-2 leading-tight text-white focus:outline-none focus:shadow-outline"
                                />
                                {errors.products && (
                                    <div className="mt-1 text-red-600">
                                        <small>{errors.products.message}</small>
                                    </div>
                                )}
                            </div>
                            <div>
                                <select
                                    placeholder={t("*Select Your Country")}
                                    className="shadow placeholder-white focus:ring-0 focus:border-white appearance-none name-input-box border border-white bg-blue-800 rounded w-[100%] py-3 px-2 leading-tight text-white focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">{t('*Select Your Country')}</option>
                                    <option value="">{t('India')}</option>
                                    <option value="">{t('United States')}</option>
                                    <option value="">{t('Japan')}</option>
                                    <option value="">{t('Australia')}</option>
                                    <option value="">{t('Canada')}</option>
                                    <option value="">{t('China')}</option>
                                    <option value="">{t('Germany')}</option>
                                    <option value="">{t('United Kingdom')}</option>
                                    <option value="">{t('Russia')}</option>
                                </select>
                            </div>
                        </div>
                        <div className='grid grid-cols-1'>
                            <textarea
                                autocomplete="off"
                                name="message"
                                id="requirements"
                                placeholder={t('*Describe Your Requirements')}
                                {...register("message", {
                                    required: t("Enter your Message"),
                                })}
                                className="shadow placeholder:text-white focus:ring-0 focus:border-white text-white appearance-none border border-white bg-blue-800 rounded w-[100%] py-1 px-2 "
                            >
                                {errors.message && (
                                    <div className="mt-1 text-red-600">
                                        <small>{errors.message.message}</small>
                                    </div>
                                )}
                            </textarea>
                        </div>
                        <div className="latestproduct-button text-center">
                            <button
                                type="submit"
                                className='more-product-btn px-8 py-3 text-base'>{t('Submit')}</button>
                        </div>
                    </form>
                </div>
            </div>
            {isSubmitSuccessful && isSuccess && (
                <div className="mt-3 text-sm text-center text-green-500">
                    {message || t("Success. Message sent successfully")}
                </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
                <div className="mt-3 text-sm text-center text-red-500">
                    {message || t("Something went wrong. Please try later.")}
                </div>
            )}
        </>
    );
}

export default QueryForm;
