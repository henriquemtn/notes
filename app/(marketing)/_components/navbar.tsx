"use client";

import { useConvexAuth } from 'convex/react';

import React from 'react'
import { ModeToggle } from '@/components/mode-toggle';
import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';
import Link from 'next/link';

export const Navbar = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    const scrolled = useScrollTop();

  return (
    <div className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 bg-white dark:bg-[#202020]",
        scrolled && "border-b shadow-sm"
    )}>
        <h1 className='text-black font-bold text-3xl hidden md:block dark:text-white'>Notes</h1>
        <div className='md:ml-auto md:justify-end
        justify-between w-full flex items-center gap-x-2 dark:text-white'>
            {isLoading && (
                <Spinner />
            )}
            {!isAuthenticated && !isLoading && (
                <>
                <SignInButton mode='modal'>
                    <Button variant='ghost' size='sm'>
                        Login       
                    </Button>
                </SignInButton>
                <SignInButton mode='modal'>
                    <Button size='sm'>
                        Get Notes free       
                    </Button>
                </SignInButton>
                </>
            )}
            {isLoading && (
                <div className='w-full flex items-center justify-center'>
                    <Spinner size='lg'/>
                </div>
            )}
            {isAuthenticated && !isLoading && (
              <>
                <Button variant='ghost' size='sm'>
                    <Link href='/notes'>
                        Enter Notes
                    </Link>
                </Button>
                <UserButton afterSwitchSessionUrl='/' />
              </>
            )}
            <ModeToggle />
        </div>
    </div> 
  )
}

export default Navbar;