import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 relative'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#5b1e1e]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>SHOP THE LOOKS THAT</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Your Favourite Stars</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>LOVE</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />

      {/* Rectangular Pink Box with White Text */}
      <div className='absolute bottom-5 left-5 bg-[#5b1e1e] text-white font-bold text-lg px-4 py-2 rounded-md shadow-lg'>
        SHOP LIKE A STAR
      </div>
    </div>
  );
};

export default Hero