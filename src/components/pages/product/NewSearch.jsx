// import React from 'react';
// import ConstantData from "../../../utiles/Data";
// import { links } from "../../Navbar/Mylinks";

// function NewSearch() {
//   return (
//     <>
//       <div className="bone-nut bg-[#CFE175]">
//         {ConstantData.map((item, index) => (
//           <div key={index}>
//             <div>
//               <h3 value={item.head}>{item.head}</h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className='bg-black text-white'>
//         {links.map((point, index) => (
//           point.sublinks && (
//             <div key={index}>
//               <ul>
//                 {point.sublinks.map((sublink, subIndex) => (
//                   <li key={subIndex}>
//                     <h3>{sublink.Head}</h3>
//                     <h4>{sublink.name}</h4>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )
//         ))}
//       </div>
//     </>
//   );
// }

// export default NewSearch;



// import React, { useState } from 'react';
// import Logo from '../../../assets/l.png';
// const NewSearch = () => {
//   const [accountId, setAccountId] = useState('');
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     if (!/^\d+$/.test(accountId)) {
//       setError('Please enter the valid Account ID');
//       return;
//     }
//     if (userName.trim() === '') {
//       setError('User Name cannot be empty');
//       return;
//     }
//     setError('');

//     console.log('Login successful', { accountId, userName, password });
//   };

//   return (
//     <div className="flex min-h-screen bg-white rounded-4xl items-center justify-center">
//       <div className="max-w-[98%] py-16 shadow-lg rounded-lg flex w-full">
//         <div className="w-[48%] bg-teal-500 text-white px-8 py-[4rem] rounded-3xl flex flex-col justify-center">
//           <div className='flex w-[70%] m-0 mb-0]'>
//           <img src={Logo} alt="" className='mr-3 w-[40%] m-auto'/>
//           <p className='text-4xl mt-14 font-semibold'>Logo</p>
//           </div>
//           <h1 className="text-5xl font-semibold leading-[55px] text-center">
//             Welcome to Legal Tasks Management and Monitoring Software
//           </h1>
//           <p className="mb-6 mt-4 text-center px-9 text-xl">
//             Your centralized hub for managing legal tasks, tracking case progress, and optimizing workflows.
//           </p>
//         </div>
//         <div className="w-[40%]  m-auto text-center login-details p-8 rounded-2xl" style={{border:"2px solid rgb(160 221 227)"}}>
//           <h2 className="text-4xl font-bold mb-4">Log In</h2>
//           <p className="mb-6 text-gray-600 text-[18px]">Enter your login details below.</p>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           <div className="mb-6">

//             <input
//               type="text"
//               className="w-full p-2 py-4 border rounded focus:border-gray-500 outline-none focus:ring-0"
//               value={accountId}
//               onChange={(e) => setAccountId(e.target.value)}
//               placeholder="Enter your account ID"
//             />
//           </div>
//           <div className="mb-4">

//             <input
//               type="text"
//               className="w-full p-2 py-4 border focus:border-gray-500 rounded outline-none focus:ring-0"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//               placeholder="Enter your user name"
//             />
//           </div>
//           <div className="mb-4">
//           <input
//         type={showPassword ? 'text' : 'password'}
//         className="w-full py-4 p-2 border rounded focus:border-gray-500 outline-none focus:ring-0"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Enter your password"
//       />
//       <span className="ml-[-50px] mt-4 absolute text-sm text-gray-500 cursor-pointer"
//        onClick={() => setShowPassword(!showPassword)}>
//         {showPassword ? 'Hide' : 'Show'}
//       </span>
//           </div>
//           <div className="mb-4 flex items-center ">
//             <input type="checkbox" className="mr-2 rounded-sm p-2" />
//             <label className="text-gray-700 form-checkbox focus:outline-none focus-visible:outline-none">Remember me</label>
//             <a href="#" className="text-teal-500 ml-[170px]">Forget Password?</a>
//           </div>
//           <button
//             onClick={handleLogin}
//             className="w-full bg-teal-500 text-white py-5 rounded-[40px] text-xl hover:bg-teal-600"
//           >
//             Log In
//           </button>
//           <div className="flex w-[60%] m-auto mt-6 text-md">
//             <p>Don't have an account.</p>
//             <a href="#" className="text-teal-500">Sign Up</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewSearch;




// components/Dashboard.js
// import { Sidebar } from "flowbite-react";
// import React from "react";
// import { FiHelpCircle } from "react-icons/fi";
// import SearchResults from "./SearchResults";
// import Logo from "../../../assets/l.png";
// import { FaHome, FaFolderOpen, FaSearch, FaTasks, FaFileAlt } from "react-icons/fa";

// export const NewSearch = () => {
//   return (
//   <>
//    <header className="flex justify-between items-center ">
//       <div className="flex w-[60%]">
//         <img src={Logo} alt="" className="w-[10%]" />
//         <h1 className="text-2xl font-bold mt-6 mr-2">Logo</h1>
//         <h2 className="text-xl mt-6 mx-10"><span className="text-2xl font-bold">Hey Rick,</span> Welcome to 'Your Brand Name Here'</h2>
//       </div>

//         <div className="flex items-center space-x-4">
//           <button className="bg-gray-200 p-2 rounded-full">Light</button>
//           <button className="bg-gray-200 p-2 rounded-full">Dark</button>
//           <div className="w-10 h-10 rounded-full bg-gray-300"></div>
//         </div>
//       </header>
//   <div className="flex h-screen bg-gray-100">

//   <div className="w-64 h-full bg-teal-500 text-white flex flex-col">

//       <nav className="flex flex-col space-y-4 p-6">
//         <a href="/" className="flex items-center space-x-2">
//           <FaHome />
//           <span>Run Conflict</span>
//         </a>
//         <a href="/" className="flex items-center space-x-2">
//           <FaFolderOpen />
//           <span>Open Files</span>
//         </a>
//         <a href="/" className="flex items-center space-x-2">
//           <FaTasks />
//           <span>Workstation</span>
//         </a>
//         <a href="/" className="flex items-center space-x-2">
//           <FaSearch />
//           <span>Quick Search</span>
//         </a>
//         <a href="/" className="flex items-center space-x-2">
//           <FaFileAlt />
//           <span>Advance Search</span>
//         </a>
//       </nav>
//       <div className="p-6 mt-auto">
//         <button className="w-full bg-teal-600 text-white p-2 rounded">Assign Task</button>
//         <button className="w-full bg-teal-600 text-white p-2 mt-2 rounded">Generate Report</button>
//       </div>
//     </div>
//     <div className="flex-1 p-6 overflow-auto">
//       {/* Header Section */}


//       {/* Main Content */}
//       <div className="grid grid-cols-12 gap-6">
//         {/* Closings Section */}
//         <section className="bg-white p-4 col-span-8 rounded-2xl shadow-md">
//           <h3 className="text-lg font-semibold mb-4">Closings</h3>
//           <ul>
//             {["Project Meeting Notes Smith", "Project Meeting Notes Smith", "Project Meeting Notes Smith"].map((file, index) => (
//               <li key={index} className="flex justify-between mb-2">
//                 <span>{file}</span>
//                 <span className="text-gray-500">#53772837384</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//         {/* Requisitions Section */}
//         <section className="col-span-4 bg-white p-4 rounded-2xl shadow-md">
//           <h3 className="text-lg font-semibold mb-4">September 2024</h3>
//           <div className="grid grid-cols-7 gap-2">
//             {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
//               <div key={index} className="text-center">{day}</div>
//             ))}
//             {[...Array(30)].map((_, index) => (
//               <div key={index} className={`text-center ${index === 15 ? "bg-teal-500 text-white rounded" : ""}`}>
//                 {index + 1}
//               </div>
//             ))}
//           </div>
//         </section>

//       </div>

//       {/* Calendar and Help Section */}
//       <div className="grid grid-cols-12 gap-6 mt-6">
//       <section className="bg-white p-4 col-span-8 rounded-2xl shadow-md">
//           <h3 className="text-lg font-semibold mb-4">Requisitions</h3>
//           <ul>
//             {["Project Meeting Notes Smith", "Project Meeting Notes Smith", "Project Meeting Notes Smith"].map((file, index) => (
//               <li key={index} className="flex justify-between mb-2">
//                 <span>{file}</span>
//                 <span className="text-gray-500">#53772837384</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <section className="col-span-4 bg-teal-500 text-white p-4 rounded-2xl shadow-md">
//           <div className="flex justify-between">
//             <div>
//               <h3 className="text-lg font-semibold">Need Help?</h3>
//               <p>We are always here for your support.</p>
//             </div>
//             <FiHelpCircle size={40} />
//           </div>
//           <div className="mt-4 space-y-2">
//             <button className="w-full bg-teal-700 p-2 rounded">Remote Support</button>
//             <button className="w-full bg-teal-700 p-2 rounded">Chat with Support Team</button>
//             <button className="w-full bg-teal-700 p-2 rounded">Chat with Staff Members</button>
//           </div>
//         </section>
//       </div>
//     </div>
//   </div>

//   </>
//   );
// };

// export default NewSearch;



import "./bonenutmain.css";
import React, { useState, useEffect } from 'react';
import Img1 from "../../../assets/ourproductsimages/DSC_0046.png";
import Img2 from "../../../assets/ourproductsimages/DSC_0054-removebg-preview.png";
import Img3 from "../../../assets/ourproductsimages/DSC_0001.png";
import Img4 from "../../../assets/ourproductsimages/WhatsApp_Image_2020-08-30_at_6.png";
import { LuChevronRightCircle } from "react-icons/lu";
import { TiStarOutline } from "react-icons/ti";

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
              <a href="#">
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

