"use client";

import { ModeToggle } from '@/components/mode-toggle';
import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import React from 'react'

export const Navbar = () => {
const scrolled = useScrollTop();

  return (
    <div className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
    )}>
        <h1 className='text-black font-bold text-3xl hidden md:block dark:text-white'>Notes</h1>
        <div className='md:ml-auto md:justify-end
        justify-between w-full flex items-center gap-x-2'>
            <ModeToggle />
        </div>
    </div> 
  )
}

export default Navbar;