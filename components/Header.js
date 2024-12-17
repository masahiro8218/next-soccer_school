'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
        if (window.innerWidth > 768) {
          setMenuOpened(false);
        }
      }
    };

    // 初期化時に実行
    handleResize();

    // リサイズイベントリスナーを追加
    window.addEventListener('resize', handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex justify-between items-center relative'>
      <Image
        src={'/logo.png'}
        alt='image'
        width={100}
        height={60}
        className='w-[6rem]'
      />

      {isMobile ? (
        <div
          className='fixed right-4 top-4 z-20 p-2 rounded-md bg-darkGray cursor-pointer'
          onClick={() => setMenuOpened(!menuOpened)}
        >
          {menuOpened ? (
            <RiCloseLine className='text-4xl text-lightGray' />
          ) : (
            <RiMenuLine className='text-4xl text-lightGray' />
          )}
        </div>
      ) : null}

      <ul
        className={`flex gap-[2rem] text-white
          max-md:fixed max-md:flex-col max-md:right-0 max-md:top-0 max-md:h-screen 
          max-md:w-[250px] max-md:bg-darkGray max-md:p-[4rem] max-md:pt-[6rem]
          max-md:transition-transform max-md:duration-300 z-10
          ${
            isMobile && !menuOpened
              ? 'max-md:translate-x-full'
              : 'max-md:translate-x-0'
          }
        `}
      >
        <li className='relative cursor-pointer hover:text-yellow'>
          <Link
            to='home'
            spy={true}
            smooth={true}
            onClick={() => setMenuOpened(false)}
            className='relative inline-block after:content-[""] 
                      after:absolute after:left-0 after:w-full after:h-[2px] 
                    after:bg-yellow after:bottom-[-0.3rem] after:opacity-0 
                      after:transition-all after:duration-400 hover:after:bottom-0 
                      hover:after:opacity-100'
          >
            ホーム
          </Link>
        </li>
        <li className='cursor-pointer hover:text-yellow'>
          <Link
            to='programs'
            spy={true}
            smooth={true}
            onClick={() => setMenuOpened(false)}
            className='relative inline-block after:content-[""] 
            after:absolute after:left-0 after:w-full after:h-[2px] 
          after:bg-yellow after:bottom-[-0.3rem] after:opacity-0 
            after:transition-all after:duration-400 hover:after:bottom-0 
            hover:after:opacity-100'
          >
            プログラム
          </Link>
        </li>
        <li className='cursor-pointer hover:text-yellow'>
          <Link
            to='reasons'
            spy={true}
            smooth={true}
            onClick={() => setMenuOpened(false)}
            className='relative inline-block after:content-[""] 
            after:absolute after:left-0 after:w-full after:h-[2px] 
          after:bg-yellow after:bottom-[-0.3rem] after:opacity-0 
            after:transition-all after:duration-400 hover:after:bottom-0 
            hover:after:opacity-100'
          >
            選ばれる理由
          </Link>
        </li>
        <li className='cursor-pointer hover:text-yellow'>
          <Link
            to='plans'
            spy={true}
            smooth={true}
            onClick={() => setMenuOpened(false)}
            className='relative inline-block after:content-[""] 
            after:absolute after:left-0 after:w-full after:h-[2px] 
          after:bg-yellow after:bottom-[-0.3rem] after:opacity-0 
            after:transition-all after:duration-400 hover:after:bottom-0 
            hover:after:opacity-100'
          >
            プラン
          </Link>
        </li>
        <li className='cursor-pointer hover:text-yellow'>
          <Link
            to='testimonials'
            spy={true}
            smooth={true}
            onClick={() => setMenuOpened(false)}
            className='relative inline-block after:content-[""] 
            after:absolute after:left-0 after:w-full after:h-[2px] 
          after:bg-yellow after:bottom-[-0.3rem] after:opacity-0 
            after:transition-all after:duration-400 hover:after:bottom-0 
            hover:after:opacity-100'
          >
            参加者の声
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
