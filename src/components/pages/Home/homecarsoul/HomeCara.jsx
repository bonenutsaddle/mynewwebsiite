// import Home1 from "../../../../assets/home3.jpg";
// import Home2 from "../../../../assets/homeimg2.avif";
// import Home3 from "../../../../assets/homeimg4.jpg";
// import Home4 from "../../../../assets/homeimg5.jpg"
// import "./homecara.css";
// import React, { useRef, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import LatestProducts from "../latestproduct/LatestProducts";
// import Mission from "../missionvalue/Mission";
// import OurWebsite from "../welcome-website/OurWebsite";
// import ShippingPartners from "../shippingpartner/ShippingPartners";
// import PopularProduct from "../popularproduct/PopularProduct";
// import QueryForm from "../queryform/QueryForm";
// import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import { useTranslation } from 'react-i18next';
// const HomeCara = () => {
//   const { t } = useTranslation();
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//   };
//   const navigate = useNavigate();
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }, [])
//   return (
//     <>
//       <Helmet>
//         <title>Bone Horn Mart – RC Creation Handicraft Manufacturer & Exporter</title>
//         <meta name="description" content="We are providing Natural Horn Comb, Bone Hair Comb, Wooden Hair Comb, Horn Drinking Mugs, Horn Bone Jewelry Box, teflon folder,guitar components,Cue stick components etc." />
//      <link rel="canonical" href="/" />
//       </Helmet>
//       <div className="overflow-x-hidden">
//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,

//           }}
//           navigation={true}
//           loop={true}
//           modules={[Autoplay, Navigation]}
//           onAutoplayTimeLeft={onAutoplayTimeLeft}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <div className="relative w-full  sm:h-[15rem] md:h-[70vh] lg:h-[90vh]">
//               <img src={Home1} loading="eager" title="Handicrafts Manufacturer" alt="buffalo bone" className='absolute  opacity-90 w-full sm:h-fit lg:h-full object-full' />
//               <div className="absolute flex flex-col capitalize lg:top-28 sm:top-2 text-center lg:w-full items-center lg:h-full">
//                 <p className="text-black lg:text-2xl lg:font-medium sm:text-sm">welcome to</p>
//                 <span className="md:text-6xl text-3xl text-black sm:text-xl font-semibold py-5">
//                   {t("RC CREATION")}
//                 </span>
//                 <h1 className='text-black lg:text-2xl font-medium sm:text-sm'>Bone & Horn, Wooden Handicrafts Manufacturer & Exporter Worldwide.</h1>
//                 <div className="button-section-home">
//                   <button onClick={() => navigate('/products?headslug=camel-bone-knife-handle')}>Knife Handle</button>
//                   <button className='btn-home2' onClick={() => navigate('/products?headslug=teflon-bone-folder')}>Bone Folder</button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="relative w-full sm:h-[15rem] md:h-[70vh] lg:h-[90vh]">
//               <img src={Home2} alt="" className='absolute  opacity-90 lg:w-full lg:h-full sm:h-fit object-full' />
//               <div className="absolute flex flex-col capitalize lg:top-28 sm:top-2 text-center lg:w-full items-center lg:h-full">
//                 <p className="text-black lg:text-2xl font-medium sm:text-sm ">welcome to</p>
//                 <span className="md:text-6xl text-3xl sm:text-xl text-black font-semibold py-5">
//                   RC CREATION
//                 </span>
//                 <p className='text-black lg:text-2xl font-medium sm:text-sm '>We provide premium quality Camel bone and water buffalo horn</p>
//                 <div className="button-section-home">
//                   <button onClick={() => navigate('/products?headslug=bone-saddle')}> Guitar Component</button>
//                   <button className='btn-home2' onClick={() => navigate('/products?headslug=dominoes-set')}>Dominoes Set</button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="relative w-full sm:h-[15rem] md:h-[70vh] lg:h-[90vh]">
//               <img src={Home3} alt="" className='absolute  opacity-80 lg:w-full lg:h-full sm:w-[100%] sm:h-full object-full' />
//               <div className="absolute flex flex-col capitalize lg:top-28 sm:top-2 text-center lg:w-full items-center lg:h-full">
//                 <p className="text-black lg:text-2xl font-medium sm:text-sm">welcome to</p>
//                 <span className="md:text-6xl text-3xl text-black font-semibold py-5 sm:text-xl">
//                   RC CREATION
//                 </span>
//                 <p className='text-black lg:text-2xl font-medium sm:text-sm'>Wooden and Leather Handicraft Items, to make sure <br /> that these meet the industry quality standards</p>
//                 <div className="button-section-home">
//                   <button className='btn-home2' onClick={() => navigate('/product/details?id=41')}>Horn Beads</button>
//                   <button onClick={() => navigate('/products?headslug=stag-bone-button')}>Bone Button</button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="relative w-full sm:h-[15rem] md:h-[70vh] lg:h-[90vh]">
//               <img src={Home4} alt="" className='absolute  opacity-90 lg:w-full lg:h-full sm:w-[100%] sm:h-full object-full' />
//               <div className="absolute flex flex-col capitalize lg:top-28 sm:top-2 text-center lg:w-full items-center lg:h-full">
//                 <p className="text-black lg:text-2xl font-medium sm:text-sm">welcome to</p>
//                 <span className="md:text-6xl text-3xl text-black font-semibold py-5 sm:text-xl">
//                   RC CREATION
//                 </span>
//                 <p className='text-black lg:text-2xl font-medium sm:text-sm sm:w-[100%] lg:w-[60%] mx-auto'>We provide premium quality Camel bone and water buffalo horn, Wooden and Leather Handicraft Items.</p>
//                 <div className="button-section-home">
//                   <button className='btn-home2' onClick={() => navigate('/product/details?id=53')}>Bone Dice</button>
//                   <button onClick={() => navigate('/product/details?id=51')}>Bone Clasp</button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper >

//         <LatestProducts />
//         <Mission />
//         <OurWebsite />
//         <ShippingPartners />
//         <PopularProduct />
//         <QueryForm />
//       </div>


//     </>
//   )
// }

// export default HomeCara;





import Home1 from "../../../../assets/home3.jpg";
import Home2 from "../../../../assets/homeimg2.avif";
import Home3 from "../../../../assets/homeimg4.jpg";
import Home4 from "../../../../assets/homeimg5.jpg";
import "./homecara.css";
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import LatestProducts from "../latestproduct/LatestProducts";
import Mission from "../missionvalue/Mission";
import OurWebsite from "../welcome-website/OurWebsite";
import ShippingPartners from "../shippingpartner/ShippingPartners";
import PopularProduct from "../popularproduct/PopularProduct";
import QueryForm from "../queryform/QueryForm";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import { useI18n } from '../../../../i18nContext';

const HomeCara = () => {
  const { t, i18n } = useI18n();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => { };
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('Bone Horn Mart – RC Creation Handicraft Manufacturer & Exporter')}</title>
        <meta name="description" content={t('We are providing Natural Horn Comb, Bone Hair Comb, Wooden Hair Comb, Horn Drinking Mugs, Horn Bone Jewelry Box, teflon folder,guitar components,Cue stick components etc.')} />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="overflow-x-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative w-full sm:h-[15rem] md:h-[70vh] lg:h-[90vh]">
              <img src={Home1} loading="eager" title={t("Handicrafts Manufacturer")} alt={t("buffalo bone")} className='absolute opacity-90 w-full sm:h-fit lg:h-full object-full' />
              <div className="absolute flex flex-col capitalize lg:top-28 sm:top-2 text-center lg:w-full items-center lg:h-full">
                <p className="text-black lg:text-2xl lg:font-medium sm:text-sm">{t('welcome to')}</p>
                <span className="md:text-6xl text-3xl text-black sm:text-xl font-semibold py-5">
                  {t("RC CREATION")}
                </span>
                <h1 className='text-black lg:text-2xl font-medium sm:text-sm'>{t('Bone & Horn, Wooden Handicrafts Manufacturer & Exporter Worldwide.')}</h1>
                <div className="button-section-home">
                  <button onClick={() => navigate('/products?headslug=camel-bone-knife-handle')}>{t('Knife Handle')}</button>
                  <button className='btn-home2' onClick={() => navigate('/products?headslug=teflon-bone-folder')}>{t('Bone Folder')}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full sm:h-[15rem] md:h-[70vh] lg:h-[90vh]">
              <img src={Home2} alt="" className='absolute opacity-90 lg:w-full lg:h-full sm:h-fit object-full' />
              <div className="absolute flex flex-col capitalize lg:top-28 sm:top-2 text-center lg:w-full items-center lg:h-full">
                <p className="text-black lg:text-2xl font-medium sm:text-sm ">{t('welcome to')}</p>
                <span className="md:text-6xl text-3xl sm:text-xl text-black font-semibold py-5">
                  {t('RC CREATION')}
                </span>
                <p className='text-black lg:text-2xl font-medium sm:text-sm '>{t('We provide premium quality Camel bone and water buffalo horn')}</p>
                <div className="button-section-home">
                  <button onClick={() => navigate('/products?headslug=bone-saddle')}>{t('Guitar Component')}</button>
                  <button className='btn-home2' onClick={() => navigate('/products?headslug=dominoes-set')}>{t('Dominoes Set')}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full sm:h-[15rem] md:h-[70vh] lg:h-[90vh]">
              <img src={Home3} alt="" className='absolute opacity-80 lg:w-full lg:h-full sm:w-[100%] sm:h-fit object-full' />
              <div className="absolute flex flex-col capitalize lg:top-28 sm:top-2 text-center lg:w-full items-center lg:h-full">
                <p className="text-black lg:text-2xl font-medium sm:text-sm">{t('welcome to')}</p>
                <span className="md:text-6xl text-3xl text-black font-semibold py-5 sm:text-xl">
                  {t('RC CREATION')}
                </span>
                <p className='text-black lg:text-2xl font-medium sm:text-sm'>{t('Wooden and Leather Handicraft Items, to make sure')} <br /> {t('that these meet the industry quality standards')}</p>
                <div className="button-section-home">
                  <button className='btn-home2' onClick={() => navigate('/product/details?id=41')}>{t('Horn Beads')}</button>
                  <button onClick={() => navigate('/products?headslug=stag-bone-button')}>{t('Bone Button')}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full sm:h-[15rem] md:h-[70vh] lg:h-[90vh]">
              <img src={Home4} alt="" className='absolute opacity-90 lg:w-full lg:h-full sm:w-[100%] sm:h-fit object-full' />
              <div className="absolute flex flex-col capitalize lg:top-28 sm:top-2 text-center lg:w-full items-center lg:h-full">
                <p className="text-black lg:text-2xl font-medium sm:text-sm">{t('welcome to')}</p>
                <span className="md:text-6xl text-3xl text-black font-semibold py-5 sm:text-xl">
                  {t('RC CREATION')}
                </span>
                <p className='text-black lg:text-2xl font-medium sm:text-sm sm:w-[100%] lg:w-[60%] mx-auto'>{t('We provide premium quality Camel bone and water buffalo horn, Wooden and Leather Handicraft Items.')}</p>
                <div className="button-section-home">
                  <button className='btn-home2' onClick={() => navigate('/product/details?id=53')}>{t('Bone Dice')}</button>
                  <button onClick={() => navigate('/product/details?id=51')}>{t('Bone Clasp')}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper >

        <LatestProducts />
        <Mission />
        <OurWebsite />
        <ShippingPartners />
        <PopularProduct />
        <QueryForm />
      </div>
    </>
  );
}

export default HomeCara;
