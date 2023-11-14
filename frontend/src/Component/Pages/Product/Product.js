import React from "react";
import Products from "./ProductData";
import "./product.css";
const Product = () => {
  return (
    <>
      {/* <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between flex-row flex-wrap w-[30%]">
            {Products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className=" overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full  object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div> */}
      <div className="container">
        {Products.map((product) => (
          <>
            <div className="box">
              <img src={product.imageSrc} alt={product.imageAlt} />
              <div className="content">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Product;
