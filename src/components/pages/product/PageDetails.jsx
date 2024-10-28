import React, { useEffect, useState } from "react";
import { ConstantData, OurProductData } from "../../../utiles/Data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from '../../../assets/footerlogo.png';
import CamelBg from "../../../assets/guitar-components/camel-bg2.jpg";
import WaterBuffaloImg from "../../../assets/guitar-components/waterbuffalo-bg.webp";
import KnifeBgImg from "../../../assets/guitar-components/bgggg.webp";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { Autoplay } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import PopUp from "./EnqForm";
import ImageFullView from './ImageFullVeiw';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiHeartWings } from "react-icons/gi";


const PageDetails = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProdId, setSelectedProdId] = useState(null);

  const handleEnquiryClick = (productData) => {
    setSelectedProdId(productData);
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // ImageFillView
  const [showImageFullView, setShowImageFullView] = useState(false); // new state
  const handleContactClick = (productData) => {
    setSelectedProdId(productData);
    setShowImageFullView(true); // show image full view popup
  };
  const handleCloseImageFullView = () => {
    setShowImageFullView(false);
  };

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);

  const settings = {
    className: "bonenutslider",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const producId = parseInt(searchParams.get("id"), 10);
  const flattenedMainData = ConstantData.flatMap((item) => item.mainData);
  const filteredProperties = flattenedMainData.filter(
    (products) => products.id === producId
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
 
  if ((producId >= 18 && producId <= 35) || (producId >= 44 && producId <= 47) || (producId >= 51 && producId <= 70) || (producId >= 200 && producId <= 1000) ) {
    return (
      <>
        <div className="mb-10">
          <img src={producId >= 18 && producId <= 21 ? CamelBg : (producId >= 22 && producId <= 25 ? WaterBuffaloImg : (producId >= 26 ? KnifeBgImg : ''))} alt="" className="opacity-90 absolute w-[100%] h-[100%]" />
          {filteredProperties.map((p) => (
            <div className={`text-center ${producId >= 25 ? 'text-[#fff]' : 'text-[#000000]'} py-10 relative`}>
              <h2 className="font-bold sm:text-[25px] lg:text-4xl">
                {p.title}
                <Helmet>
                  <title>{`World Top ${p.title} | RC Creation`}</title>
                  <meta name="description" content={`Discover our ${p.title} Best Bone & Horn, Handi-crafted all kind of product available. Learn more about our products and get in touch with us for enquiries. | RC Creation`} />
                  <link rel="canonical" href={`/product/details?id=${p.id}`} />
                </Helmet>
                <span className="text-black"> All Products</span>
              </h2>
              <div className="lg:w-[80%] sm:w-[98%] sm:mt-2 lg:mt-10 mx-auto grid grid-cols-12 gap-6">
                <div className="lg:col-span-7 sm:col-span-12">
                  <h4 data-aos="fade-left" className="lg:text-3xl sm:text-xl font-bold rounded-xl text-black bg-white px-6 py-3 w-fit sm:mb-10 lg:mb-5">Now Our Available Size</h4>
                  <p data-aos="fade-right" className="text-black text-left bg-[#CF9B02] font-bold text-lg pr-10 pl-5 py-4 w-fit">
                    <ul>
                      {p.wsize.map((item, index) => (
                        <li key={index} className="flex items-center lg:text-lg sm:text-sm">
                          <FaLongArrowAltRight className="mr-2 text-[#910B0B]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </p>
                </div>
                <div data-aos="fade-left" className="lg:col-span-4 sm:col-span-12">
                  <img src={Logo} alt="" className="lg:mt-20 sm:hidden lg:block bg-white w-full " />
                </div>

              </div>
            </div>
          ))}
        </div>
        <div className="bg-[rgb(33,33,31)]">
          <div className="w-[95%] mx-auto">
            {filteredProperties.map((item, index) => (
              <div>
                {item.usbData && (
                  <div className="grid grid-cols-12 gap-6 py-6">
                    {item.usbData.map((p, i) => (
                      <div data-aos={
                        i % 3 === 0 ? "fade-right" : i % 3 === 1 ? "fade-down" : "fade-left"
                      } className="lg:col-span-4  md:col-span-6 sm:col-span-12 bg-[#E6E96F] rounded-md">
                        <div className="bonewhitecard capitalize px-3 py-4">
                          <div className="slider-container">
                            {p.images && (
                              <Slider {...settings}>
                                {p.images.map((image, index) => (
                                  <div key={index}>
                                    <img
                                      src={image}
                                      alt=""
                                      className={`h-[100%] w-[100%] ${producId >= 18 ? 'border-none  outline-none' : ''}`}
                                      onClick={() => handleContactClick({ id: p.prodId, data: p })}
                                    />
                                  </div>
                                ))}
                              </Slider>
                            )}
                          </div>
                          <h4 className='text-center text-lg font-bold text-black'>{p.prodId}</h4>
                          <h3 className='text-start text-base font-semi-bold px-2 leading-6 text-[#2d2531]'>{p.name}</h3>
                          <div className="text-start sm:text-sm lg:text-[14px]">
                            <p className='mt-1'><b>Brand Name :</b>  RC Creation</p>
                            <p className='mt-1'><b>Guaranteed : </b> {p.size2}</p>
                            <div className="whitebone-enq-btn gap-6">
                              <button className='whitebone-enq-btn1' onClick={() => handleEnquiryClick({ data: p })}>Enquiry Now</button>
                              <button className='whitebone-enq-btn2' onClick={() => handleContactClick({ id: p.prodId, data: p })}>View</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {showPopup && <PopUp onClose={handleClosePopup} prodId={producId} productData={selectedProdId} />}
        {showImageFullView && <ImageFullView onClose={handleCloseImageFullView} productData={selectedProdId} />}
      </>
    );
  } else {

    return (
      <>
 <div className="bg-[#21211f]">
 {filteredProperties.map((p) => (
   <div className="text-center text-[#ECB709] py-10">
     <h2 className="font-bold text-4xl">
       {p.title}
       <Helmet>
         <title>{p.title}</title>
       </Helmet>
       <span className="text-white"> All Products</span>
     </h2>
   </div>
 ))}
 <div className="w-[90%] mx-auto">
   {filteredProperties.map((item, index) => (
     <div>
       {item.usbData && (
         <div className="grid grid-cols-12 gap-6 py-6">
           {item.usbData.map((p, i) => (
             <div
               data-aos={
                 i % 3 === 0 ? "fade-right" : i % 3 === 1 ? "fade-down" : "fade-left"
               }
               className="lg:col-span-4 md:col-span-6 sm:col-span-12 bg-[#E6E96F] rounded-md hover:" >
               <div className="bonewhitecard capitalize px-3 py-4">
                 <div className="slider-container">
                   {p.images && (
                     <Slider {...settings}>
                       {p.images.map((image, index) => (
                         <div key={index}>
                           <img
                             src={image}
                             alt=""
                             className={`h-[100%] w-[100%] ${producId >= 18 ? 'border-none  outline-none' : ''}`}
                             onClick={() => handleContactClick({ id: p.prodId, data: p })}
                           />
                         </div>
                       ))}
                     </Slider>
                   )}
                 </div>
                 <h4 className='text-center text-lg font-bold text-black'>{p.prodId}</h4>
                 <h3 className='text-start text-base font-semi-bold px-2 leading-6 text-[#2d2531]'>{p.name}</h3>
                 <div className="text-start sm:text-sm lg:text-[14px]">
                   <p className='mt-1'><b>Brand Name :</b>  RC Creation</p>
                   <p className='mt-1'><b>Dimension(mm)  :</b> {p.size1}</p>
                   <p className='mt-1'><b>Dimension(Inch) : </b> {p.size2}</p>
                   <p className='mt-1'><b>Additional Size : </b> As Per Client Requir.</p>
                   <div className="whitebone-enq-btn gap-6">
                     <button className='whitebone-enq-btn1' onClick={() => handleEnquiryClick({ id: p.prodId, data: p })}>Enquiry</button>
                     <button className='whitebone-enq-btn2' onClick={() => handleContactClick({ id: p.prodId, data: p })}>View</button>
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
       )}
     </div>
   ))}
 </div>
</div>

       
        {showPopup && <PopUp onClose={handleClosePopup} prodId={producId} productData={selectedProdId} />}
        {showImageFullView && <ImageFullView onClose={handleCloseImageFullView} productData={selectedProdId} />}
      </>
    );
  }
}


export default PageDetails;




