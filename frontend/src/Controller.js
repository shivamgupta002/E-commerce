import React from "react";
import Navbar from "./Component/Navbar";
import About from "./Component/Pages/About";
import { Routes, Route } from "react-router-dom";
import Service from "./Component/Pages/Service";
import SignUp from "./Component/authPage/SignUp";
import Login from "./Component/authPage/Login";
import Home from "./Component/Pages/Home";
import ChangePassword from "./Component/authPage/changePassword";

const Controller = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Auth Page */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
};

export default Controller;
