import React from 'react';

interface productType {
  id: number;
  name: string;
  description: string;
  price: number;
}
export default function Home() {

  const clothes : productType[] = [
    {
      id: 1,
      name: 'T-shirt',
      description: 'A comfortable cotton t-shirt',
      price: 19.99
    },
    {
      id: 2,
      name: 'Jeans',
      description: 'Stylish denim jeans',
      price: 49.99
    },
    {
      id: 3,
      name: 'Jacket',
      description: 'Warm winter jacket',
      price: 89.99
    }
  ]

  return (
    <div>
      <header className='text-center border-b-2 border-gray-800 mb-4'>
        <h1 className='text-4xl font-bold p-6'>
          selling clothes
        </h1>

        <h3 className='text-2xl font-semibold p-2'>
          why a website? idk lol im bored
        </h3>
      </header>

      <main className='flex justify-center items-center'>
        {
          clothes.map((product, index) => (
            <div key={index} className='p-4 border border-white h-50 w-100'>
              <h2 className='text-2xl font-semibold'>{product.name}</h2>
              <p className='text-lg'>{product.description}</p>
              <p className='text-xl font-bold'>${product.price.toFixed(2)}</p>
            </div>
          ))
}
      </main>

    </div>
  );
}
