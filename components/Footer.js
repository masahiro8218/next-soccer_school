import Image from 'next/image';
import React from 'react';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';

function Footer() {
  return (
    <div className='relative mb-[0.1rem]'>
      <hr className='border-[1px] border-lightGray' />
      <div className='flex flex-col py-[1rem] px-[2rem] gap-[2rem] items-center justify-center h-[12rem]'>
        <div className='flex gap-[3rem]'>
          <a href=''>
            <FaTwitter className='text-4xl text-white' />
          </a>
          <a href=''>
            <IoLogoInstagram className='text-4xl text-white' />
          </a>
          <a href=''>
            <FaYoutube className='text-4xl text-white' />
          </a>
        </div>
        <div>
          <Image
            src={'/logo.png'}
            width={50}
            height={50}
            alt='logo'
            className='w-[5rem]'
          />
        </div>
      </div>

      {/* ブラー */}
      <div
        className='blur bottom-0 right-[15%] w-[26rem] h-[12rem]'
        style={{ background: 'red' }}
      />
      <div className='blur bottom-0 left-[15%] w-[26rem] h-[12rem]' />
    </div>
  );
}

export default Footer;
