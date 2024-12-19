'use client';

import React, { useEffect, useState } from 'react';
import Header from './Header';
// import ReactCountUp from 'react-countup';
import { PiSoccerBallLight } from 'react-icons/pi';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Hero() {
  const transition = {
    type: 'spring',
    duration: 2,
  };
  const [mobile, setMobile] = useState();
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768 ? true : false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div
      className='justify-between grid grid-cols-12 md:overflow-hidden max-md:flex max-md:flex-col'
      id='home'
    >
      {/* ブラー */}
      <div className='blur w-[22rem] h-[30rem] left-0 max-md:w-[14rem]' />

      {/* 左 */}
      <div className='flex flex-col col-span-8 p-[2rem] pt-[0.2rem] gap-[2rem]'>
        {/* ヘッダー */}
        <Header />

        {/* セールス文 */}
        <div
          className='relative flex mt-[1rem] bg-darkdarkGray rounded-full w-fit 
                        py-[1.2rem] px-[0.8rem] text-white text-center justify-start
                        max-md:my-[1.5rem] max-md:text-sm max-md:self-center max-md:transform scale-75'
        >
          <motion.div
            key={mobile}
            initial={{ left: mobile ? '175px' : '245px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
            className='absolute  bg-[#daa520] w-[5.5rem] h-[80%] left-[0.5rem] rounded-full bottom-[0.375rem]'
          ></motion.div>
          <p className='z-20'>全国50店舗オープンを目指しています！</p>
        </div>

        {/* タイトル */}
        <div
          className='flex flex-col gap-[1.5rem] text-7xl font-bold text-white max-sm:text-4xl max-md:text-center
                    max-md:justify-center max-md:gap-[1rem]'
        >
          <div>
            <span className='stroke-text tracking-wider'>Mesluz</span>
          </div>
          <div>
            <span>サッカースクール</span>
          </div>
          <div className='text-lg font-normal w-[80%] tracking-wider normal-case max-md:text-sm max-md:tracking-wider max-md:self-center'>
            <p>
              お子様の運動能力を伸ばし、チームワークを学びながら、サッカーを楽しんでみませんか？
              当スクールでは、 楽しさ と 成長
              を大切にしたサッカーを指導しています。経験豊富なコーチが、個々の成長に合わせて優しくサポートします。
            </p>
          </div>
        </div>
        {/* 軽い実績 */}
        <div className='flex gap-[2rem] pt-[2rem] text-center max-md:self-center'>
          <div className='flex flex-col'>
            <span className='text-white text-3xl max-md:text-xl'>
              20人
            </span>
            <p className='text-yellow max-md:text-sm'>在籍コーチ</p>
          </div>
          <div>
            <span className='text-white text-3xl max-md:text-xl'>
              230名
            </span>
            <p className='text-yellow max-md:text-sm'>会員数</p>
          </div>
          <div>
            <span className='text-white text-3xl max-md:text-xl'>
              6施設
            </span>
            <p className='text-yellow max-md:text-sm'>店舗数</p>
          </div>
        </div>

        {/* 案内ボタン */}
        <div className='flex gap-[1rem] font-normal pt-[1rem] max-md:justify-center'>
          <a
            href='#'
            className='text-white bg-[#daa520] w-[8rem] p-[0.5rem] font-bold flex items-center justify-center'
          >
            会員
          </a>
          <a
            href='#'
            className='text-white bg-transparent w-[8rem] p-[0.5rem] border-[4px] border-[#daa520] font-bold flex items-center justify-center'
          >
            体験
          </a>
        </div>
      </div>

      {/* 右 */}
      <div
        className='col-span-4 relative bg-gradient-to-br from-yellow via-yellow to-orange-500
                      max-md:relative max-md:bg-none'
      >
        {/* レート */}
        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={{ transition }}
          className='absolute flex flex-col gap-[1rem] bg-darkGray w-fit p-[1rem]
                        text-start rounded-md right-[4rem] top-[8rem] max-md:left-[1rem] max-md:top-[2rem]'
        >
          <PiSoccerBallLight className='text-yellow text-5xl' />
          <span className='text-yellow'>Rate</span>
          <span className='text-white text-2xl'>9.0</span>
        </motion.div>

        {/* メイン写真 */}
        <Image
          src={'/heroImg.png'}
          alt='heroImg'
          width={300}
          height={600}
          className='absolute right-[8rem] top-[12rem] w-[25rem]
                    max-md:relative max-md:w-[15rem] max-md:left-[7rem]
                    max-md:top-[4rem] max-md:self-center'
        />
      </div>
    </div>
  );
}

export default Hero;
