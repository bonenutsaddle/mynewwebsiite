import React from 'react';
import { ImCross } from "react-icons/im";

const PopUp = ({ onClose, productData}) => {
 
    return (
        <div className="fixed sm:top-[40px] z-50 lg:top-10 left-0 sm:p-2 w-full h-full bg-gray-900 bg-opacity-80 flex justify-center items-center">
            <div className="bg- rounded shadow-lg sm:p-[5px] lg:p-4 w-1/1 md:w-1/3 lg:w-3/5 xl:w-3/5" style={{ backgroundImage: "linear-gradient(to bottom right, red, yellow)", border: "2px solid white", backdropFilter: "blur(10px)" }}>
                <div className="grid grid-cols-12 gap-5 p-4" >
                    <div className="lg:col-span-6 sm:col-span-12">
                        <h3 className='bg-[#00000099] py-[10px] text-white px-[15px] text-base w-full font-semibold'>
                            {productData?.data?.name}
                        </h3>
                        <img src={productData?.data?.images[0]} alt="" className='w-full sm:hidden lg:block lg:h-[47vh]' />
                        <h3 className='w-fit sm:py-0 sm:px-2 lg:py-[10px] lg:px-[15px] sm:text-lg lg:text-2xl font-bold'>
                        {productData?.data?.prodId}
                        </h3>
                    </div>
                    <div className="lg:col-span-6 sm:col-span-12">
                        <div className="flex justify-between mb-4">
                            <h2 className="text-lg font-bold sm:mb-0 lg:mb-2 bg-[#ECB709] py-[10px] px-[15px] w-[80%]">Get a Quick Quote</h2>
                            <button className="text-xl hover:text-lg hover:text-[white] h-fit w-fit text-black " onClick={onClose}><ImCross /></button>
                        </div>
                        <p className="text-sm lg:block sm:hidden mb-4">Please fill out the form to enquire about this product.</p>
                        <form>
                            <div className="lg:mb-4 sm:mb-1">
                                <input placeholder='Enter Your Name*' className="w-full p-2 border border-gray-400 focus:ring-0 focus:border-blue-500" type="text" id="name" />
                            </div>
                            <div className="lg:mb-4 sm:mb-1">
                                <input placeholder='Enter Your Mail*' className="w-full p-2 border border-gray-400 focus:ring-0 focus:border-blue-500" type="email" id="email" />
                            </div>
                            <div className="lg:mb-4 sm:mb-1">
                                <input placeholder='Enter Your Quantity*' className="w-full p-2 border border-gray-400 focus:ring-0 focus:border-blue-500" type="number" id="quantity" />
                            </div>
                            <div className="lg:mb-2 sm:mb-1">
                                <textarea placeholder='Enter Your Message*' className="w-full p-2 border border-gray-40 focus:ring-0 focus:border-blue-500" id="message" rows="2"></textarea>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:ring focus:border-blue-500" type="submit">Send Enquiry</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopUp;