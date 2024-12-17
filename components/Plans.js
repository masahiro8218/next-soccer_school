import { plansData } from '@/constants/plansData';
import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
 
function Plans() {
  return (
    <div className="px-[2rem] flex flex-col gap-[4rem] relative" id="plans">
      {/* ブラー */}
      <div className='blur w-[32rem] h-[23rem] top-[6rem] left-0'/>
      <div className='blur w-[32rem] h-[23rem] top-[10rem] right-0'/>
 
      {/* タイトル */}
      <div className="flex font-bold text-5xl justify-center text-white italic gap-[2rem]
      max-md:flex max-md:flex-col max-md:text-3xl max-md:gap-[1rem] max-md:text-center
      ">
        <span className="stroke-text">レベルに合った</span>
        <span>最高の</span>
        <span className="stroke-text">上達プラン</span>
      </div>
 
      {/* カード */}
      <div className="flex justify-center items-center gap-[2rem]
      max-md:flex max-md:flex-col
      ">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray text-white gap-[1rem] p-[1rem] w-[15rem] h-[26rem]"
          >
            <span
              className="text-4xl text-white"
            >
              {plan.icon}
            </span>
            <p className="font-bold text-lg">{plan.name}</p>
            <p className="text-5xl font-bold">
              {plan.price}
              <span className="text-xl align-bottom">/月</span>
            </p>
            <div className="flex flex-col gap-[1rem]">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-[1rem] ">
                  <FaRegCheckCircle className="text-white text-lg" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Plans;