import "./bonenutmain.css";
import React, { useState, useEffect } from 'react';
import { LuChevronRightCircle } from "react-icons/lu";
import { TiStarOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

import { ConstantData, OurProductData } from "../../../utiles/Data";

const NewSearch = () => {

  return (
    <div>
      <header className="bg-green-600 text-white text-center py-8">
        <h1 className="text-4xl font-semibold">Our Products</h1>
        <p className="mt-2 text-lg w-[80%] mx-auto capitalize">Discover an exquisite collection of bone and horn handicrafts, from timeless statement pieces to everyday essentials and elegant decor for every occasion</p>
      </header>
      <div className="grid grid-cols-12 mt-8 gap-4 mx-auto w-[90%]">
      {OurProductData.map((product) => (
        <div className="col-span-4" key={product.id}>
          <div className="max-w-sm bg-white border box-shadow-bg border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg h-[50vh] w-full mx-auto bg-[#E3E3E3]" src={product.img} alt={product.name} />
            </a>
            <div className="px-5 pt-5">
              <a href="">
                <h5 className="mb-2 text-xl text-center font-semibold tracking-tight flex text-[#FF6609E0] dark:text-white">
                  {product.name}
                  <span className='ml-4 text-3xl'><LuChevronRightCircle /></span>
                </h5>
                <p className="flex text-sm pb-2">
                  <TiStarOutline className="mr-2 mt-1 text-[#FF6609E0]" />
                  {product.subname}
                </p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default NewSearch;

