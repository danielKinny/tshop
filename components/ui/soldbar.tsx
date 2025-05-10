import React from "react";
import Image from "next/image";

import {
    Carousel,
    CarouselItem,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
  
  } from "./carousel";
  
import { productType } from "./productbar";

const SoldBar = () => {

    const soldItems : productType[] = [
        {
      id: "0001",
      name: "mclovin's id card from superbad [M]",
      price: 35,
      front: "/images/0001-1.png",
      back: "/images/0001-2.png",
    },
    
    {
      id: "0004",
      name: "hard soda mr.escobar [L]",
      price: 25,
      front: "/images/0004-1.png",
      back: "/images/0004-2.png",
    },
    {
      id: "0003",
      name: "random employee polo[M]",
      price: 10,
      front: "/images/0003-1.png",
      back: "/images/0003-2.png",
    },
    ];

  return (
    
            <div className='border-b border-t border-gray-500 rounded-lg p-4'>
                      {
                      soldItems.map((product: productType, index: number) => (
                        <div key={index} className='p-4 border-b border-gray-300 max-w-2xl text-center'>
                          <h2 className='text-2xl font-semibold text-center'>{product.name}</h2>
                          <div className='flex justify-center items-center text-center'>
                          
                            <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full max-w-sm p-4 justify-center items-center"
                  >
                              <CarouselContent>
                                <CarouselItem className="items-center justify-center flex">
                                  <Image
                                    src={product.front}
                                    className=" w-full rounded-lg"
                                    alt="front of the shirt"
                                    width={300}
                                    height={300}
                                  />
                                </CarouselItem>
                                <CarouselItem className="items-center justify-center flex">
                                  <Image
                                    src={product.back}
                                    width={300}
                                    height={300}
                                    className="w-full rounded-lg"
                                    alt="back of the shirt"
                                  />
                                </CarouselItem>
                              </CarouselContent>
                              <CarouselPrevious className='bg-white border border-black hover:bg-black hover:text-white'/>
                              <CarouselNext className='bg-white border border-black hover:bg-black hover:text-white'/>
                            </Carousel>
                          </div>
                          
                          <p className='text-xl font-bold text-center'>{product.price +" dirhams"}</p>
                        </div>
                      ))
            }
            </div>
  )
}

export default SoldBar