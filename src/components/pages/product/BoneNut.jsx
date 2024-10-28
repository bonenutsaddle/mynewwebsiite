import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bonenutmain.css";
import { ConstantData, OurProductData } from "../../../utiles/Data";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PopularProduct from "../Home/popularproduct/PopularProduct";

function BoneNut() {
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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const producName = searchParams.get("headslug");

  const filteredProperties = ConstantData.filter(
    (products) => products.headslug === producName
  );

  const navigate = useNavigate();
  return (
    <>

      <div className="bone-nut bg-[#CFE175]">
        {filteredProperties.map((item, index) => (
          <div key={index} className="grid grid-cols-12 w-[80%] mx-auto sm:py-2 lg:py-12">
            <div className="lg:col-span-6 md:col-span-12 sm:col-span-12">
              <h3 data-aos="fade-left" className="text-[34px] font-bold sm:mb-1 lg:mb-5">{item.head}</h3>
              <p data-aos="fade-right" className="text-justify">{item.dec}</p>
              <Helmet>
                <title>
                  {item.head} Made by-RC Creations
                </title>
                <meta name="description" content={`${item.dec.substring(0, 167)}...`} />
                <link rel="canonical" href={`/products?headslug=${item.headslug.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}  />  
              </Helmet>
            </div>
            <div data-aos="fade-left" className="lg:col-span-6 md:col-span-12 sm:col-span-12 text-center lg:w-[60%] sm:w-[100%] mx-auto sm:mt-6 relative overflow-hidden bg-cover bg-no-repeat">
              <img
                 src={item.mainData.length >= 3 ? item.mainData[2].img : item.mainData[0].img}
                alt=""
                className="w-full max-h-[300px] rounded-xl hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
      {/* Product-Section */}
      <div className="bg-[#21211f]">
        {filteredProperties.map((item, index) => (
          <div>
            {item.mainData && (
              <div className="grid grid-cols-12 w-[90%] mx-auto lg:gap-4 sm:gap-6 py-10">
                {item.mainData.map((p, i) => (
                  <Link
                    to={`/product/details?id=${p.id} `}
                    className="lg:col-span-3 md:col-span-6 sm:col-span-12 main-col-border"
                    data-aos={
                      i % 3 === 0 ? "fade-right" : i % 3 === 1 ? "fade-down" : "fade-left"
                    }
                  >
               
                    <div className="whiteboneproduct-img">
                      <img src={p.img} alt="" />
                    </div>
                    <p className="text-center text-[#ECB709] h-[50px]">
                      {p.title}
                    </p>
                    <div className="text-center mt-3">
                      <button
                        type="button"
                        class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-[#353131]  focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                      >
                        View All Products
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <PopularProduct />
    </>
  );
}

export default BoneNut;
