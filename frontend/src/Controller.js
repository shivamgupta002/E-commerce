import React from "react";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import { Routes, Route } from "react-router-dom";
import Service from "./Component/Service";

const Controller = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
};

export default Controller;
