import React from "react";
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

  const clothes : productType[] = [
    {
      id: "0001",
      name: 'random school jacket [L]',
      price: 25,
      front: "/images/0001-1.png",
      back: "/images/0001-2.png"
    },
    {
      id: "0002",
      name: 'england shirt [L]',
      price: 30,
      front: "/images/0002-1.png",
      back: "/images/0002-2.png"
    },
    {
      id: "0003",
      name: 'random employee polo [M]',
      price: 10,
      front: "/images/0003-1.png",
      back: "/images/0003-2.png"
    }
    ]
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
                          <CarouselPrevious className='bg-white border border-black hover:bg-black hover:text-white'/>
                          <CarouselNext className='bg-white border border-black hover:bg-black hover:text-white'/>
                        </Carousel>
                      </div>
                      
                      <p className='text-xl font-bold text-center'>{product.price +" dirhams"}</p>
                    </div>
                  ))
        }
                </div>
    );
}

export default ProductBar;