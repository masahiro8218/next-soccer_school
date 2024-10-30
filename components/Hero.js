import React from 'react';
import Header from './Header';

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
        {/* 軽い実績 */}
        {/* 案内ボタン */}
      </div>

      {/* 右 */}
      <div className='col-span-4'>
        {/* レート */}
        {/* メイン写真 */}
        {/* 背景写真 */}
      </div>
    </div>
  );
}

export default Hero;
