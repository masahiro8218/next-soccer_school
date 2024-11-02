'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { RiMenuLine } from 'react-icons/ri';

function Header() {
  const [menuOpenend, setMenuOpenend] = useState(false);

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768 ? true : false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className='flex justify-between'>
      <Image
        src={'/logo.png'}
        alt='image'
        width={100}
        height={60}
        className='w-[7rem]'
      />

      {menuOpenend === false && mobile === true ? (
        <div
          className='fixed bg-darkGray p-[0.5rem] rounded-md right-[2rem] top-[2rem] z-20'
          onClick={() => setMenuOpenend(true)}
        >
          <RiMenuLine className='text-4xl text-lightGray' />
        </div>
      ) : (
        <ul
          className='flex gap-[2rem] text-white
          max-md:fixed max-md:flex-col  max-md:right-[2rem] max-md:z-20  max-md:bg-darkGray max-md:p-[2rem]
        
        '
        >
          <li className='cursor-pointer hover:text-pink'>
            <Link
              to='home'
              spy={true}
              smooth={true}
              onClick={() => setMenuOpenend(false)}
            >
              ホーム
            </Link>
          </li>
          <li className='cursor-pointer hover:text-pink'>
            <Link
              to='programs'
              spy={true}
              smooth={true}
              onClick={() => setMenuOpenend(false)}
            >
              プログラム
            </Link>
          </li>
          <li className='cursor-pointer hover:text-pink'>
            <Link
              to='reasons'
              spy={true}
              smooth={true}
              onClick={() => setMenuOpenend(false)}
            >
              選ばれる理由
            </Link>
          </li>
          <li className='cursor-pointer hover:text-pink'>
            <Link
              to='plans'
              spy={true}
              smooth={true}
              onClick={() => setMenuOpenend(false)}
            >
              プラン
            </Link>
          </li>
          <li className='cursor-pointer hover:text-pink'>
            <Link
              to='testimonials'
              spy={true}
              smooth={true}
              onClick={() => setMenuOpenend(false)}
            >
              参加者の声
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
