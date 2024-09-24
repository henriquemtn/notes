'use client';

import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs';
import { useConvexAuth } from 'convex/react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export const Heroes = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className='max-w-7xl flex justify-between items-start gap-2 mt-24 mx-auto dark:text-white'>
      <div className='max-w-xl flex flex-col gap-4'>
        <h1 className='font-bold text-[76.5px] leading-[95%] tracking-[-0.04rem] text-left'>Escreva. Planeje. Organize.</h1>
        <h3 className='font-medium text-xl'>Com uma ajudinha da IA.</h3>
        <div className='flex flex-row gap-2'>
          {isAuthenticated && !isLoading && (
            <>
              <Button onClick={() => router.push("/documents")} variant='default' className='font-bold py-6'>
                Use o Weekly de Graça
              </Button>
              <Button variant='secondary' className='font-bold py-6'>
                Veja o plano Premium
              </Button>
            </>
          )}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button className='font-bold py-6'>
                  Faça parte do Weekly
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </SignInButton>
              <Button variant='secondary' className='font-bold py-6'>
                Veja o plano Premium
              </Button>
            </>
          )}
        </div>
      </div>
      <Image className='shadow-md rounded-md' src='/preview.webp' width={700} height={700} alt='Hero' />
    </div>
  )
}
