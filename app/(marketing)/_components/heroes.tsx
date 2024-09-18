import Image from 'next/image'
import React from 'react'

export const Heroes = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
        <div className='flex items-center'>
            <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[700px] md:h-[400px]'>
                <Image 
                    src="/documents.jpg"
                    fill
                    alt='document'
                />
            </div>
        </div>
    </div>
  )
}
