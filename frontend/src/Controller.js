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
import Cart from "./Component/Pages/Cart/Cart";
import AddProduct from "./Component/Pages/Admin/AddProduct";
import EditProduct from "./Component/Pages/Admin/EditProduct";
import AdminPanel from "./Component/Pages/Admin/AdminPanel";
import AdminLogin from "./Component/Pages/Admin/AdminLogin";

const Controller = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/adminPanel" element={<AdminPanel />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Route>
      </Routes>
    </>
  );
};

export default Controller;
