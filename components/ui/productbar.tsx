import React from "react";
import Image from "next/image";
//for whatever soul is reading this im using next images cos of optimisation stuffs
// should probably design api for this but im laz y
import {
    Carousel,
    CarouselItem,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
  
  } from "./carousel";
interface productType {
    id: string;
    name: string;
    price: number;
    front: string;
    back: string;
    }

  const clothes: productType[] = [
    {
      id: "0000",
      name: "mclovin's id card from superbad [M]",
      price: 35,
      front: "/images/0000-1.png",
      back: "/images/0000-2.png",
    },
    
    {
      id: "0006",
      name: "hard soda mr.escobar [L]",
      price: 25,
      front: "/images/0006-1.png",
      back: "/images/0006-2.png",
    },
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
      id: "0009",
      name: "cactus jack mcd's crew tee [M]",
      price: 30,
      front: "/images/0007-1.png",
      back: "/images/0007-2.png",
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
    {
      id: "0003",
      name: "random employee polo[M]",
      price: 10,
      front: "/images/0003-1.png",
      back: "/images/0003-2.png",
    },
  ];
const ProductBar = () => {
    return (
        <div className='border-b border-t border-gray-500 rounded-lg p-4'>
                  {
                  clothes.map((product, index) => (
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
            <p className="text-black text-center">
                more stuff to come :)
            </p>
                </div>
    );
}

export default ProductBar;
