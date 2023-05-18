"use client";

import React from "react";
import { ProductCard } from "../components";
import { Checkbox } from "@chakra-ui/react";


export default async function Products() {

  const products = await fetch('https://fakestoreapi.com/products');
  const productData = await products.json();

  const categories = await fetch('https://fakestoreapi.com/products/categories');
  const categoriesData = await categories.json();

  return (
    <main className="">
      <br></br>
      <br></br>
      <div className="p-5 mt-10 ml-20 mb-1">
        <h1 className="font-extrabold text-5xl font-sans">
          Out Products:
        </h1>
      </div>
      <br></br>
      <div className="flex space-x-4 justify-center items-center mb-5 ">
        {categoriesData.map(category => (
          <Checkbox onChange={chosenCategory.push(category)} key={category.indexOf} className="bg-gray-800 p-2 rounded-lg hover:bg-indigo-700 transition duration-400 ">{category}</Checkbox>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-10 justify-items-center">
        {productData.map((product) => (
            <ProductCard key={product.id} title={product.title} price={product.price} category={product.category} description={product.description} image={product.image} />
          ))}
      </div>
    </main>
  )
}