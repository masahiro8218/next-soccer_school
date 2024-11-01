'use client';

import React from 'react';
import Header from './Header';
import ReactCountUp from 'react-countup';
import { MdOutlineSportsTennis } from 'react-icons/md';
import Image from 'next/image';

function Hero() {
  return (
    <div className='justify-between grid grid-cols-12' id='home'>
      {/* ブラー */}

      {/* 左 */}
      <div className='flex flex-col col-span-8 p-[2rem] pt-[1.5rem] gap-[2rem]'>
        {/* ヘッダー */}
        <Header />
        {/* セールス文 */}
        <div
          className='relative flex mt-[4rem] bg-darkdarkGray rounded-full w-fit 
                        py-[1.2rem] px-[0.8rem] text-white text-center justify-start'
        >
          <div className='absolute  bg-pink w-[5.5rem] h-[80%] left-[0.5rem] rounded-full bottom-[0.375rem] z-10'></div>
          <p className='z-20'>全国100店舗オープンを目指しています！</p>
        </div>
        {/* タイトル */}
        <div className='flex flex-col gap-[1.5rem] text-7xl font-bold text-white'>
          <div>
            <span className='stroke-text'>ORIGIN</span>
            <span>.Dog</span>
          </div>
          <div>
            <span>テニススクール</span>
          </div>
          <div className='text-lg font-normal w-[80%] tracking-wider normal-case'>
            <p>
              約5,000人のお客様にご愛願いただいております。
              会社帰りに職場の近くのテニススクールへ・休日にご自宅近くのテニススクールへ。
            </p>
          </div>
        </div>
        {/* 軽い実績 */}
        <div className='flex gap-[2rem] pt-[2rem] text-center'>
          <div className='flex flex-col'>
            <span className='text-white text-3xl'>
              <ReactCountUp start={100} end={140} duration={4} />人
            </span>
            <p className='text-gray'>在籍コーチ</p>
          </div>
          <div>
            <span className='text-white text-3xl'>
              <ReactCountUp start={5000} end={5978} duration={4} />名
            </span>
            <p className='text-gray'>会員数</p>
          </div>
          <div>
            <span className='text-white text-3xl'>
              <ReactCountUp start={10} end={62} duration={4} />名
            </span>
            <p className='text-gray'>店舗数</p>
          </div>
        </div>
        {/* 案内ボタン */}
        <div className='flex gap-[1rem] font-normal pt-[1rem]'>
          <a
            href='#'
            className='text-white bg-pink w-[8rem] p-[0.5rem] font-bold text-center'
          >
            会員
          </a>
          <a
            href='#'
            className='text-white bg-transparent w-[8rem] p-[0.5rem] border-[4px] border-pink font-bold text-center'
          >
            体験
          </a>
        </div>
      </div>

      {/* 右 */}
      <div className='col-span-4 relative bg-gradient-to-br from-pink via-pink to-yellow-500'>
        {/* レート */}
        <div
          className='absolute flex flex-col gap-[1rem] bg-darkGray w-fit p-[1rem]
                        text-start rounded-md right-[4rem] top-[8rem]'
        >
          <MdOutlineSportsTennis className='text-pink text-5xl' />
          <span className='text-gray'>UTR Rate</span>
          <span className='text-white text-2xl'>9.5</span>
        </div>
        {/* メイン写真 */}
        <Image
          src={'/heroImg.png'}
          alt='heroImg'
          width={300}
          height={600}
          className='absolute right-[13rem] top-[13rem] w-[25rem]'
        />
        {/* 背景写真 */}
        <img src='/herobg.png' alt='herobg' className='absolute right-[12rem] top-[4rem] -z-10 h-[43rem]' />
      </div>
    </div>
  );
}

export default Hero;
