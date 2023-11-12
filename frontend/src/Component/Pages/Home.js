import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

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

      <h1 className="text-center text-3xl mt-20">Home Page</h1>
    </>
  );
};

export default Home;
