import React from "react";
import Image from "next/image";

import {
    Carousel,
    CarouselItem,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
  
  } from "./carousel";

export interface productType {
    id: string;
    name: string;
    price: number;
    front: string;
    back: string;
    }

  const clothes: productType[] = [
    
    {
      id: "0007",
      name: " hbd grimace [L]",
      price: 20,
      front: "/images/0009-1.png",
      back: "/images/0009-2.png",
    },
    {
      id: "0008",
      name: "luwahati sa pilipinas [M]",
      price: 20,
      front: "/images/0008-1.png",
      back: "/images/0008-2.png",
    },
    
    {
      id: "0010",
      name: "chick-fil-a chiken [L]",
      price: 15,
      front: "/images/0010-1.png",
      back: "/images/0010-2.png",
    },
    {
      id: "0002",
      name: "admiral branded englang 00's polo [L]",
      price: 30,
      front: "/images/0002-1.png",
      back: "/images/0002-2.png",
    },
  ];
const ProductBar = () => {
    return (

        <div>
          <h6 className=' text-center font-semibold p-2'>
          selling sum stuff i find, all items are thrifted and in good conditon,
        </h6>
        <h6 className=' text-center font-semibold p-2'>
            if interested, text me at 971545799032 or dm me on insta
        </h6>
        <p className="text-center mb-10 font-semibold p-2">
          also if anyone says they wanna buy it, other people can steal it by buying it for 10 dirhams more (2 whole shawarmas for me) 
        </p>
        
          <div className='border-b border-t border-gray-500 rounded-lg p-4'>
          
                  {
                  clothes.map((product, index) => (
                    <div key={index} className='p-4 border-b border-gray-300 max-w-2xl text-center mx-auto'>
                      <h2 className='text-2xl font-semibold text-center'>{product.name}</h2>
                      <div className='flex justify-center items-center text-center'>
                      
                        <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full max-w-sm p-4 justify-center items-center mx-auto"
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
            <p className="text-black text-center">
                more stuff to come :)
            </p>
                </div>
        </div>
        
    );
}

export default ProductBar;
