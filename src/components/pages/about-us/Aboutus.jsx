import React, { useState, useEffect } from 'react';
import aboutUsImage from "../../../assets/about-us.jpg";
import { Helmet } from 'react-helmet';
import AboutBriefImg from "../../../assets/about-briefly.png";
import TeamImg from "../../../assets/teamimg.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ChooseUsImg from "../../../assets/choose-us-img.jpg";
import Mission from "../Home/missionvalue/Mission";
import PackagingImg from "../../../assets/packaging-img.jpg";
import CountUp from "react-countup";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Aboutus() {
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
    const Counter = ({ number, title }) => (
        <div className="number">
            <CountUp duration={10} className="counter" end={number} />
            <span>{title}</span>
        </div>


    );
    return (
        <>
           <Helmet>
  <title>About-Us RC Creations</title>
  <meta name="description" content="Learn about RC Creations, a leading manufacturer and exporter of natural teflon folder, knife handle, bone dice, guitar components, dominoes set, viking craft and more." />
  <link rel="canonical" href="/about-us" />
</Helmet>
            <div className="about-us relative lg:h-[79vh] sm:h-[55vh]">
                <div className="image-container  absolute ">
                    <img src={aboutUsImage} alt="" className="object-cover opacity-80 lg:h-full sm:h-[417px] w-full" />
                </div>
                <div className="relative text-center lg:top-32 sm:top-24 lg:w-[60%] sm:w-full mx-auto">
                    <h4 data-aos="fade-right" className="lg:text-6xl sm:text-3xl font-bold">About Us</h4>
                    <p data-aos="fade-left" className='font-semibol p-5 rounded-xl mt-4 text-justify lg:text-xl sm:text-sm bg-black text-white'>
                        RC Creation found 1985 was a cottage industries, now are the world wide largest Exporter , with an affirmation to manufacturing and retailing a high-quality range of Camel bone and water buffalo horn , Wooden and Leather Handicraft Items. Offered products range consists of Knife handles, bone folder, and Bone horn beads, bone horn button . In adding to this, our range of products is admired for attributes like strong construction, long life, easy usability, and low cost.</p>
                </div>

            </div>
            {/* Number of Speak */}
            <div className="bg-[#b8b532] text-hite p-16 ">
                <div className="grid grid-cols-12 text-center w-[90%] mx-auto">
                    <div data-aos="fade-right" className="lg:col-span-3 sm:col-span-12 ">
                        <h4 className='text-3xl font-bold lg:text-start sm:text-center  sm:mb-4'>Numbers Speak For Themselves!</h4>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-12 ">
                        <h4 className='text-3xl font-bold '><Counter number={350} title={"+"} /></h4>
                        <p className='font-semibold text-xl'>Total Products</p>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-12 ">
                        <h4 className='text-3xl font-bold '><Counter number={150} title={"+"} /></h4>
                        <p className='font-semibold text-xl'>Exporting Countries</p>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-12 ">
                        <h4 className='text-3xl font-bold '> <Counter number={45} title={"+"} /></h4>
                        <p className='font-semibold text-xl'>Product Categories</p>
                    </div>
                </div>
            </div>
            {/* About Us Brief */}
            <div className="bg-[#21211f] text-[#fff]">
                <div className="about-brief w-[90%] mx-auto py-10">
                    <div className=" grid grid-cols-12 gap-5">
                        <div data-aos="fade-down" className="lg:col-span-6 sm:col-span-12">
                            <div className="text-4xl font-bold text-[#ECB709] mb-5">About Us Brief</div>
                            <div className='font-sans text-[#fff] w-[95%]'>
                                <p className='mb-2'>We are registered Company based on Natural Buffalo Horn & Bone Products, We specialize in Natural Horn & Bone Products Like Natural Buffalo Horn Plates/Scales, Natural Buffalo Bone Scales, Natural Buffalo Horn Rolls,  Natural Buffalo Horn Toggles, Teflon Folder, Bone Dice, Drinking Horn, Buttons etc, just to full fill all needs of your companies as well as throughout the world so that you give the bright and fascinating look to every of your intended designs.</p>
                                <p className='mb-2'>All these products are produced with the latest tools in accordance with our customers needed sizes with the help of our experienced craftsmen in our production unit. We use only fresh raw material to avoid of any sort of lack in processing the products.</p>
                                <p className='mb-2'>Also you can get a better quotation than your present suppliers with the fastest delivery, We are desirous of establishing firm and continuous business with you so as to quote you very competitive price for the high specified natural quality.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="lg:col-span-6 sm:col-span-12 relative w-full overflow-hidden bg-cover bg-no-repeat">
                            <img src={AboutBriefImg} alt="" className='rounded-xl w-full transition duration-300 ease-in-out hover:scale-125' />
                        </div>
                    </div>

                </div>

                {/* Our Team */}
                <div className="about-brief w-[90%] mx-auto py-16">
                    <div className=" grid grid-cols-12 gap-5">
                        <div data-aos="fade-right" className="lg:col-span-6 sm:col-span-12 relative w-[90%] overflow-hidden bg-cover bg-no-repeat">
                            <img src={TeamImg} alt="" className='rounded-xl  transition duration-300 ease-in-out hover:scale-110 w-[100%]' />
                        </div>
                        <div data-aos="fade-left" className="lg:col-span-6 sm:col-span-12">
                            <div className="text-4xl font-bold text-[#ECB709] mb-5">Our Professional Team</div>
                            <div className='font-sans text-[#fff] '>
                                <p className='mb-2'>We are backed by a well-experienced team of professionals who work in complete passion to enable the quality range of Camel & cattle bone horn handicraft items. The raw material we use to design this range is procured from the reliable vendors of the market. We have gained a significant position in the market due to the client-centric approach, easy mode of payment, outstanding quality of the Camel bone and water buffalo horn,<h1> Wooden and Leather Handicraft Items, and punctual delivery.</h1></p>
                                <p className='mb-2'>Our mentor Team manages the entire business activities and work on business principles. His priceless contribution plays an important role in creating a healthy relationship with other business associates.</p>
                                <p>The company is backed by a skilled team of Diligent and Delivery Experts, Client Handle Politely,  Packaging experts, and many more. All these individuals have always contributed equally towards the company’s growth in the last two years.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="about-brief w-[90%] mx-auto py-10">
                    <div className=" grid grid-cols-12 gap-5">
                        <div data-aos="fade-down-right" className="lg:col-span-6 sm:col-span-12">
                            <div className="text-4xl font-bold text-[#ECB709] mb-5">Why Coose Us?</div>
                            <div className='font-sans text-[#fff] w-[95%]'>
                                <p className=''>We provide premium quality Camel bone and water buffalo horn, Wooden and Leather Handicraft Items.</p>
                                <p className='mb-2'>Our specialty in offering top-class products and an experience of more than thirty four years has made us a more popular name in the industry. In addition to this, we are also capable of meeting the bulk requirements of the clients on time.</p>
                                <h4 className='text-2xl font-semibold mb-2'>Some of the factors are:</h4>
                                <p className='flex mb-1'><FaArrowAltCircleRight className='text-xl text-[#ECB709] mx-2' />Transparent Dealings</p>
                                <p className='flex mb-1'><FaArrowAltCircleRight className='text-xl text-[#ECB709] mx-2' />Total Quality Management</p>
                                <p className='flex mb-1'><FaArrowAltCircleRight className='text-xl text-[#ECB709] mx-2' />Best Packaging</p>
                                <p className='flex mb-1'><FaArrowAltCircleRight className='text-xl text-[#ECB709] mx-2' />Experienced Professionals</p>
                                <p className='flex mb-1'><FaArrowAltCircleRight className='text-xl text-[#ECB709] mx-2' />Timely Delivery</p>
                            </div>
                        </div>
                        <div data-aos="fade-down-left" className="lg:col-span-6 sm:col-span-12 relative w-full overflow-hidden bg-cover bg-no-repeat">
                            <img src={ChooseUsImg} alt="" className='rounded-xl w-full transition duration-300 ease-in-out hover:scale-125' />
                        </div>
                    </div>

                </div>

            </div>
            <Mission />

            {/* our Packaging */}
            <div className="bg-[#21211f] text-[#fff]">
                <div className="about-brief w-[90%] mx-auto py-16">
                    <div className=" grid grid-cols-12 gap-5">
                        <div data-aos="flip-left" className="lg:col-span-6 sm:col-span-12 relative w-[90%] overflow-hidden bg-cover bg-no-repeat">
                            <img src={PackagingImg} alt="" className='rounded-xl  transition duration-300 ease-in-out hover:scale-110 w-[100%]' />
                        </div>
                        <div data-aos="flip-right" className="lg:col-span-6 sm:col-span-12">
                            <div className="text-4xl font-bold text-[#ECB709] mb-5">Our Packaging Process </div>
                            <div className='font-sans text-[#fff] '>
                                <p className='mb-2'>Export packaging enables your goods arrive intact and undamaged with your overseas buyer.</p>
                                <p className='mb-2'>Transport or export packaging is the outermost layer of packaging and is designed to protect your goods during transit. Examples of export packaging include wooden crates or boxes, metal drums and plastic shrink-wrapping.
                                </p>
                                <p className='mb-2'>Also you can get a better quotation than your present suppliers with the fastest delivery, We are desirous of establishing firm and continuous business with you so as to quote you very competitive price for the high specified natural quality.</p>
                                <p>Owing to wide distribution channels, we have been able to serve the different parts of the world with great ease. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="py-6">
                    <table className='lg:w-[60%] sm:w-[95%] border mx-auto ' >
                        <tbody className='text-start'>
                            <tr>
                                <td className='border p-2 font-semibold bg-gray-400 text-black '>Name Of Founder</td>
                                <td className='border p-2'>Mohd. Arzil Ahmed</td>
                            </tr>
                            <tr>
                                <td className='border p-2 font-semibold bg-gray-400 text-black '>Year of Establishment</td>
                                <td className='border p-2'>1990</td>
                            </tr>
                            <tr>
                                <td className='border p-2 font-semibold bg-gray-400 text-black'>Nature of Business</td>
                                <td className='border p-2'>Manufacturer, Exporter & Supplier</td>
                            </tr>
                            <tr>
                                <td className='border p-2 font-semibold bg-gray-400 text-black'>Number of Employees</td>
                                <td className='border p-2'>40 People</td>
                            </tr>
                            <tr>
                                <td className='border p-2 font-semibold bg-gray-400 text-black '>Annual Turnover</td>
                                <td className='border p-2'>Rs. 5 crore+</td>
                            </tr>
                            <tr>
                                <td className='border p-2 font-semibold bg-gray-400 text-black '>Market Covered</td>
                                <td className='border p-2'>Worldwide</td>
                            </tr>
                            <tr>
                                <td className='border p-2 font-semibold bg-gray-400 text-black '>GST No.</td>
                                <td className='border p-2'>09HBIPM4368B1ZF</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>




        </>

    );
}

export default Aboutus;