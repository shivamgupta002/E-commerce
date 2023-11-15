import React from "react";
import Products from "./ProductData";
import "./product.css";
const Product = () => {
  return (
    <>
      <div className="container">
        {Products.map((product) => (
          <>
            <div className="box">
              <div className="img">
                <img src={product.imageSrc} alt={product.imageAlt} />
              </div>
              <div className="content">
                <h3 className="text-2xl">{product.name}</h3>
                <div className="flex">
                  <h2 className="mx-2">
                    <span> Price :</span>
                  </h2>{" "}
                  <p>{product.price}</p>
                </div>
                <button className="cart">
                  ADD
                  <ion-icon name="cart-outline" className="cart"></ion-icon>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Product;
