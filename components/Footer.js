import Image from 'next/image';
import React from 'react';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';

function Footer() {
  return (
    <div className='relative mb-[5rem]'>
      <hr className='border-[1px] border-lightGray' />
      <div className='flex flex-col py-[1rem] px-[2rem] gap-[4rem] items-center justify-center h-[20rem]'>
        <div className='flex gap-[4rem]'>
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
            width={200}
            height={100}
            alt='logo'
            className='w-[10rem]'
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
