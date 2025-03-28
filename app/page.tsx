
"use client";
import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,

} from "../components/ui/carousel";

interface productType {
  id: string;
  name: string;
  price: number;
  front: string;
  back: string;
}
export default function Home() {

  const clothes : productType[] = [
    {
      id: "0001",
      name: 'random school jacket [L]',
      price: 25,
      front: "/images/0001-1.jpg",
      back: "/images/0001-2.jpg"
    },
    {
      id: "0002",
      name: 'england shirt [L]',
      price: 30,
      front: "/images/0002-1.jpg",
      back: "/images/0002-2.jpg"
    },
    {
      id: "0003",
      name: 'random employee polo [M]',
      price: 10,
      front: "/images/0003-1.jpg",
      back: "/images/0003-2.jpg"
    }
  ]

  return (
    <div className='text-white bg-black min-h-screen'>
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
        
        <div className='border border-gray-500 rounded-lg p-4'>
          {
          clothes.map((product, index) => (
            <div key={index} className='p-4 border-b border-gray-800 max-w-2xl text-center'>
              <h2 className='text-2xl font-semibold'>{product.name}</h2>
              <div className='flex justify-center items-center'>
              
                <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm p-4"
      >
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src={product.front}
                        className=" w-full rounded-lg"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src={product.back}
                        className="w-full rounded-lg"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className='bg-black'/>
                  <CarouselNext className='bg-black'/>
                </Carousel>
              </div>
              
              <p className='text-xl font-bold'>{product.price +" dirhams"}</p>
            </div>
          ))
}
        </div>
        
      </main>

    </div>
  );
}
