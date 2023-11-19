import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import Product from "./Product/Product";

const Home = () => {
  return (
    <>
      {localStorage.getItem("name") ? (
        <>
          <div className="text-end my-3 mx-2 border-spacing-0 flex justify-between">
            <Link to="/changePassword" className="text-end text-blue-500">
              Change Password
            </Link>
            <Logout />
          </div>
        </>
      ) : (
        ""
      )}
      <Product />
    </>
  );
};

export default Home;
