import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { MdSkipPrevious } from "react-icons/md";
import { CgPlayTrackNext } from "react-icons/cg";

const PopUp = ({ onClose, productData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = productData?.data?.images || [];
    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            {productData?.data?.images.map((image, index) => {
                return (
                    <div key={index}>
                        <div className="fixed top-12 left-0 w-full bg-black h-full bg-opacity-70 flex justify-center items-center">
                            <div className='flex gap-1'>
                                <button onClick={handlePrev} className='h-fit text-5xl p-1 rounded-sm mr-[-48px] z-50 hover:text-[#89450A] sm:mt-[30%] lg:mt-[40%]'><MdSkipPrevious /></button>
                                <div>
                                    <img src={images[currentIndex]} alt="" className='sm:h-[300px] lg:h-[480px] w-[600px] rounded-md' />
                                    <div className='flex'>
                                        <h3 className='text-white text-2xl py-2 text-center w-fit mx-auto'>{productData?.data?.prodId}</h3>
                                        <p className='text-white text-lg'>{currentIndex + 1} / {images.length}</p>
                                    </div>
                                </div>
                                <button onClick={handleNext} className='h-fit text-5xl p-1 rounded-sm ml-[-48px] hover:text-[#89450A] sm:mt-[30%] lg:mt-[40%]'><CgPlayTrackNext /></button>
                                <button onClick={onClose} className='bg-white h-fit hover:text-[#89450A] hover:-rotate-6 p-2'><ImCross /></button>
                            </div>
                        </div>
                    </div>
                );
            })
            }
          
        </div >
    );
};

export default PopUp;