import Image from 'next/image';
import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
 
function Reasons() {
  return (
    <div className='grid grid-cols-2 px-[2rem] gap-[2rem]
      max-md:flex max-md:flex-col
    ' id='reasons'>
      {/* 左 */}
      <div className='col-span-1 grid grid-cols-3 gap-[1rem] flex-1
      max-md:grid max-md:grid-flow-row max-md:overflow-hidden max-md:gap-[1rem]
      '>
        <Image
          src={'/reason1.jpg'}
          width={200}
          height={400}
          alt="reasonImage1"
          className='col-span-1 w-[12rem] h-[28rem] object-cover
          max-md:w-[7rem] max-md:h-[17rem]'
        />
        <div className='col-span-2 grid grid-cols-5 gap-[1rem]'> 
          <Image
            src={'/reason2.jpg'}
            width={300}
            height={200}
            alt="reasonImage2"
            className='col-span-5 object-cover w-auto h-[16rem]
            max-md:w-[15rem] max-md:h-[10rem]'
          />
          <Image
            src={'/reason3.jpg'}
            width={300}
            height={200}
            alt="reasonImage3"
            className='col-span-2 object-cover w-[10rem] h-[11rem]
            max-md:w-[7rem] max-md:h-[6rem]'
          />
          <Image
            src={'/reason4.jpg'}
            width={300}
            height={200}
            alt="reasonImage4"
            className='col-span-3 object-cover w-[14rem] h-[11rem]
            max-md:w-[8rem] max-md:h-[6rem]'
          />
        </div>
      </div>
      {/* 右 */}
      <div className='col-span-1 flex flex-col gap-[1rem] flex-1'>
        <div className='text-white text-5xl font-bold
        max-md:text-3xl
        '>
          <span className='stroke-text'>選ばれる</span>
          <span>理由</span>
        </div>
 
        <div className='flex flex-col gap-[1rem]'>
          <div className='flex text-lg text-white gap-[1rem]'>
            <IoMdCheckmarkCircleOutline className='text-4xl text-pink' />
            <p>指導者の質と経験</p>
          </div>
          <div className='flex text-lg text-white gap-[1rem]'>
            <IoMdCheckmarkCircleOutline className='text-4xl text-pink'/>
            <p>練習環境と設備</p>
          </div>
          <div className='flex text-lg text-white gap-[1rem]'>
            <IoMdCheckmarkCircleOutline className='text-4xl text-pink'/>
            <p>チームワークと仲間との絆</p>
          </div>
          <div className='flex text-lg text-white gap-[1rem]'>
            <IoMdCheckmarkCircleOutline className='text-4xl text-pink'/>
            <p>試合や大会への参加機会</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Reasons;