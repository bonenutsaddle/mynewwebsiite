import "./bonenutmain.css";
import React, { useState, useEffect } from 'react';
import { LuChevronRightCircle } from "react-icons/lu";
import { TiStarOutline } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

import { ConstantData, OurProductData } from "../../../utiles/Data";
import { links } from "../../Navbar/Mylinks";

const InsideProductPage = () => {

    const newlocation = useLocation();
    const searchParams = new URLSearchParams(newlocation.search);
    const slug = searchParams.get("slug");
    
    const newfilteredProperties = OurProductData.filter(
        (products) => products.slug === slug
    );
    console.log("slug",newfilteredProperties)

  return (
    <div>
      <header className="bg-green-600 text-white text-center py-8">
        <h1 className="text-4xl font-semibold">Our Products New Products</h1>
        <p className="mt-2 text-lg w-[80%] mx-auto capitalize">Discover an exquisite collection of bone and horn handicrafts, from timeless statement pieces to everyday essentials and elegant decor for every occasion</p>
      </header>
    <div>
    {newfilteredProperties.map((item, index) => (
    <div className="grid grid-cols-12 mt-8 gap-4 mx-auto w-[90%]">
{item.OurProductInsideData.map((data)=>(

 <div className="col-span-4" key={data.id}>
 <div className="max-w-sm bg-white border box-shadow-bg border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <Link to={data.insidelink}>
     <img className="rounded-t-lg h-[50vh] w-full mx-auto bg-[#E3E3E3]" src={data.img} alt={data.name} />
   </Link>
   <div className="px-5 pt-5">
     <a href="">
       <h5 className="mb-2 text-xl text-center font-semibold tracking-tight flex text-[#FF6609E0] dark:text-white">
         {data.name}
         <span className='ml-4 text-3xl'><LuChevronRightCircle /></span>
       </h5>
       <p className="flex text-sm pb-2">
         <TiStarOutline className="mr-2 mt-1 text-[#FF6609E0]" />
         {data.subname}
       </p>
     </a>
   </div>
 </div>
</div>
))}

{/* 
     {item.OurProductInsideData && (

       
        )} */}
     
    </div>
     ))}
    </div>
    </div>
  );
};

export default InsideProductPage;

