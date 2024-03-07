'use client';

import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/app/hooks/use-scroll';
import { cn } from '@/app/libs/utils';
import { AccountCircleOutlined } from '@mui/icons-material';


const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          'border-b border-black-200 bg-white/75 backdrop-blur-lg': scrolled,
          'border-b border-black-200 bg-white': selectedLayout,
        },
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
            <span className="font-bold text-xl flex ">SONGA</span>
          </Link>
        </div>
        <div className=''>
        <SearchOutlinedIcon/>
       <input 
       
       type="text"  placeholder='Search...' />
      </div>
      <NotificationsNoneOutlinedIcon className='md-block'/>
      <AccountCircleOutlined/>
        
      </div>
    </div>
  );
};

export default Header;