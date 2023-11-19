import React from "react";
import Navbar from "./Component/Navbar";
import About from "./Component/Pages/About";
import { Routes, Route } from "react-router-dom";
import Service from "./Component/Pages/Service";
import SignUp from "./Component/authPage/SignUp";
import Login from "./Component/authPage/Login";
import Home from "./Component/Pages/Home";
import ChangePassword from "./Component/authPage/changePassword";
import ProtectedRoute from "./Component/Service/ProtectedRoute";
import Cart from "./Component/Pages/Cart";
import AddProduct from "./Component/Pages/Admin/AddProduct";

const Controller = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Auth Page */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/service" element={<Service />} />
        </Route>
      </Routes>
    </>
  );
};

export default Controller;
