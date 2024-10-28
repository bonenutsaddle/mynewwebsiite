import React, { useState, useEffect, useCallback } from 'react';
import { ConstantData, OurProductData } from "../../../utiles/Data";
import Slider from "react-slick";
import PopUp from "./EnqForm";
import ImageFullView from './ImageFullVeiw';
import { FcSearch } from "react-icons/fc";
import NotFoundImg from "../../../assets/notfoundimg.webp";
import RightButton from "../../../assets/guitar-components/1.1.1.png";
import LeftButton from "../../../assets/guitar-components/2.2.2.png";

const SearchResults = () => {
  const ROWS_PER_PAGE = 1; 
  const COLUMNS_PER_ROW = 1; 
  const PRODUCTS_PER_PAGE = ROWS_PER_PAGE * COLUMNS_PER_ROW;

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProdId, setSelectedProdId] = useState(null);
  const [showImageFullView, setShowImageFullView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false); 
  const flattenedMainData = ConstantData.flatMap((item) => item.mainData);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]); 
  const filterProducts = (currentPage) => {
    if (searchTerm.trim() === '') {
      setFilteredProperties([]);
      setError('');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');

    const filtered = flattenedMainData.filter((product) => {
      return (
        product.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.usbData.some((usbDataItem) =>
          usbDataItem.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          usbDataItem.prodId.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });

    const filteredUsbData = filtered.map((product) => {
      return {
        ...product,
        usbData: product.usbData.filter((usbDataItem) =>
          usbDataItem.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          usbDataItem.prodId.toString().toLowerCase().includes(searchTerm.toLowerCase())
        ),
      };
    });
    setFilteredProperties(filteredUsbData);
    setLoading(false);
    setCurrentPage(1);
    setHasSearched(true); 
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterProducts();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const handleEnquiryClick = (productData) => {
    setSelectedProdId(productData);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleContactClick = (productData) => {
    setSelectedProdId(productData);
    setShowImageFullView(true);
  };

  const handleCloseImageFullView = () => {
    setShowImageFullView(false);
  };

  const settings = {
    className: "bonenutslider",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  };

  const totalPages = Math.ceil(filteredProperties.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = filteredProperties.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  let timeoutId = null;

  const handlePageChange = (newPage) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      if (newPage !== currentPage && newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage); 
      }
    }, 100);
  };

  return (
    <div>
      <div style={{ marginTop: "40px" }}>
        <form onSubmit={handleSearch}>
          <div className='flex justify-center mb-4'>
            <FcSearch className='relative left-10 top-6 text-3xl' />
            <input
              className='shadow placeholder-black appearance-none 
                name-input-box border-black lg:w-[50%]  sm:w-full md-w-full rounded py-6 pl-12 leading-tight
                focus:outline-none focus:shadow-outline lg:text-lg sm:text-sm'
              type="text"
              placeholder="Search by product name or ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className='py-[1px]'>
              <button className='bg-[#F9C51C] relative right-20 rounded-sm py-6 px-[11px] text-black ' type="submit">Search</button>
            </div>
          </div>

          {!hasSearched && (
            <p className='text-center bg-white text-2xl my-10 font-semibold capitalize'>
              Please Enter a product name or ID to start searching...
            </p>
          )}

          <div className="w-[95%] mx-auto">
            {hasSearched && paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 py-6">
                {paginatedProducts.map((item, index) => (
                  <div key={index}>
                    {item.usbData && (
                      <div className="grid grid-cols-12 gap-6 py-6">
                        {item.usbData.map((p, i) => (
                          <div key={i} className="lg:col-span-4 md:col-span-6 sm:col-span-12 bg-[#ADADA5] rounded-md">
                            <div className="bonewhitecard capitalize px-3 py-4">
                              <div className="slider-container">
                                {p.images && (
                                  <Slider {...settings}>
                                    {p.images.map((image, index) => (
                                      <div key={index}>
                                        <img
                                          src={image}
                                          alt=""
                                          className={`h-[100%] w-[100%] ${p.prodId >= 18 ? 'border-none outline-none' : ''}`}
                                          onClick={() => handleContactClick({ id: p.prodId, data: p })}
                                        />
                                      </div>
                                    ))}
                                  </Slider>
                                )}
                              </div>
                            </div>
                            <div className="p-3 text-black">
                              <h4 className='text-center text-lg font-bold'>{p.prodId}</h4>
                              <h3 className='text-start text-base font-semi-bold px-2 leading-6 '>{p.name}</h3>
                              <div className="text-start sm:text-sm lg:text-[14px]">
                                <p className='mt-1'><b>Brand Name :</b> RC Creation</p>
                                <p className='mt-1'><b>Guaranteed :</b> 100% Genuine Product</p>
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
            ) : (
              hasSearched && paginatedProducts.length === 0 && (
                <div className="placeholder-message lg:flex sm:block bg-white text-center items-center w-full mx-0 flex justify-center">
                  <img src={NotFoundImg} alt='Not Found' className='h-[50vh] w-fit' />
                    <p className='lg:w-[40%] sm:w-[90%] lg:mx-0 sm:mx-auto text-gray-700 sm:text-xl lg:text-3xl font-bold border-[4px] border-[solid] border-[gray] rounded-[42px] rounded-tl-none p-[30px]'>Oops! Looks Like You’re Entered Something Wrong Keyword Please Try Again..</p>
                </div>
              )
            )}
          </div>

          {filteredProperties.length > PRODUCTS_PER_PAGE && (
            <div className="pagination flex justify-center my-4">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)} // Pass currentPage - 1
                className={`px-4 py-2 mx-1 ${currentPage === 1 ? '' : ''}`}
              >
                <img src={LeftButton} alt='' className='bg-white w-[7vh] h-[8vh] hover:opacity-70 '/>
              </button>
              <p className="py-4 font-bold sm:text-[12px] lg:text-2xl">Page <span className='border-[3px] px-4 py-2 sm:text-[12px] lg:text-2xl mx-2 border-orange-500 rounded-[50%] text-orange-500'>{currentPage}</span> of <span className='border-[3px] px-4 py-2 text-orange-500 sm:text-[12px] lg:text-2xl mx-2 border-orange-500 rounded-[50%]'>{totalPages}</span></p>
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)} // Pass currentPage + 1
                className={`px-4 py-2 mx-1 ${currentPage === totalPages ? '' : ''}`}
              >
                <img src={RightButton} alt='' className='bg-white w-[7vh] h-[8vh] hover:opacity-70' />
              </button>
            </div>
          )}
        </form>
      </div>
      {showPopup && <PopUp onClose={handleClosePopup} prodId={selectedProdId.prodId} productData={selectedProdId} />}
      {showImageFullView && <ImageFullView onClose={handleCloseImageFullView} productData={selectedProdId} />}
    </div>
  );
};

export default SearchResults;
