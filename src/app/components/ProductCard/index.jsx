"use client";

import React from 'react';
import { Button, Image, Text } from '@chakra-ui/react';

export function ProductCard({ key, title, price, category, description, image }) {
  return (
    <div className="relative flex w-2/3 h-auto space-x-1 rounded-lg shadow-md bg-gray-800">
      <Image
      className="rounded-l-lg shadow-md w-1/6 h-auto"
      src={image ? image : "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}
      alt='Cool alt text?'
      borderRadius='md'
      />
      <div className='p-2 '>
        <div className="divide-y-2 divide-gray-600">
          <h2 className="font-sans font-bold text-lg text-gray-100">
            {title ? title : "Sofa Couch"}
          </h2>
          <Text noOfLines={8} className="text-xs text-gray-400 overflow-ellipsis overflow-auto mb-10">
          { description ? description : "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing." } 
          </Text>
        </div>
        <h2 className='px-1 absolute -top-px -left-px bg-green-800 border-2 border-green-500 rounded-lg w-auto text-center text-green-100 cursor-default'>${price ? price : "15"}</h2>
        <br></br>
        <div className='absolute bottom-6 space-x-8 ml-3'>
          <Button colorScheme='purple' variant='solid'>
            Buy now
          </Button>
          <Button colorScheme='purple' variant='outline'>
            Add to Cart
          </Button>
        </div>
      </div>

    </div>
  )
}