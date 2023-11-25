import React, { useEffect } from "react";
// import Products from "./ProductData";
import loadingImg from "../../Image/loader.gif";
import "./product.css";
import { add } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchProducts } from "../Redux/ProductSlice";
import ProductFilter from "./ProductFilter";
const Product = () => {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const { data: product, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (status === STATUSES.Loading) {
    return (
      <div className="flex justify-center mt-[27vh]">
        <img src={loadingImg} alt="loading" />
      </div>
    );
  }
  return (
    <>
      <h1 className="text-4xl text-center text-gray-600 my-4">Product List</h1>
      <div className="filterPhone">
        {/* <div className="lg:bg-slate-600 md:bg-slate-400 sm:bg-slate-950"> */}
        <ProductFilter />
        {/*----------------------------- Product start -----------------------------*/}
        <div className="container">
          {product.map((product) => (
            <>
              <div className="box">
                <div className="rating">
                  <i class="fa-solid fa-star"></i>
                  <span>{product.rating}</span>
                  <span>/5</span>
                </div>
                <div className="img">
                  <img src={product.image} alt={product.imageAlt} />
                </div>
                <div className="content">
                  <h3 className="text-2xl">{product.title}</h3>
                  <div className="flex">
                    <h2 className="mx-2">
                      <span> Price :</span>
                    </h2>{" "}
                    <p>&#8377; {product.price}</p>
                  </div>
                  <button className="cart" onClick={() => handleAdd(product)}>
                    ADD
                    <ion-icon name="cart-outline" className="cart"></ion-icon>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        {/*----------------------------- Product end --------------------------------- */}
       
      </div>
    </>
  );
};

export default Product;
