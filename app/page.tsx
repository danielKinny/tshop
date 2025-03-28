
"use client";
import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,

} from "../components/ui/carousel";

import ProductBar from "../components/ui/productbar";
export default function Home() {

  return (
    <div>
      <header className='text-center border-b-2 border-gray-800 mb-4'>
        <h1 className='text-4xl font-bold p-6'>
          fund my next big back adventure!!!
        </h1>

      </header>

      <main className='flex flex-col justify-center items-center'>
        <h6 className=' text-center font-semibold p-2'>
          hi, im just selling sum stuff i find, all items are thrifted and in good condiiton,
        </h6>
        <h6 className=' text-center mb-10 font-semibold p-2'>
            if interested, contact 971545799032, prices negotiable but dont be kanjoos bru
        </h6>
        
        <ProductBar />
        
      </main>

    </div>
  );
}
