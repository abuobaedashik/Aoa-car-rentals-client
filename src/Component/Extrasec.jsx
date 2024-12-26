import React from 'react';
import image from '../assets/banner/image.jpeg'
import { FaApple, FaAppStore, FaGooglePlay } from 'react-icons/fa';
const Extrasec = () => {
    return (
        <div  className="overflow-hidden p-4 md:flex-row flex-col items-center justify-start flex opacity-7 py-12 border-2 px-6 gap-4  bg-cover bg-center bg-[#050C16]">
          <div className="flex  items-center justify-start flex-col gap-3 px-10">
          <div className="md:text-5xl text-xl  font-extrabold text-[#E00600]">Dreamsrental User Friendly App Available</div>
          <div className="text-base text-[#ffffff]">Appropriately monetize one-to-one interfaces rather than cutting-edge Competently disinte rmediate backward.</div>
           <div className="flex items-center justify-start gap-4 flex-col md:flex-row"> <button className="text-base font-bold flex items-center gap-2 text-[#ffffff] py-2 px-2 bg-[#ff0000]"><FaGooglePlay /> PlayStore</button>
           <button className="text-base font-bold flex items-center gap-2 text-[#ffffff] py-2 px-2 bg-[#0000ff]"> <FaApple /> Apple Store</button></div>
          </div>
          <div className="img"><img src={image} alt="" className='h-[200px] w-[200px] rounded-full border-2 border-[#ff0000]'  /></div>
        </div>
    );
};

export default Extrasec;