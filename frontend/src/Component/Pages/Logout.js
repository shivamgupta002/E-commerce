import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const Navigate = useNavigate();

  // ---------------  LogOut  -----------------------------
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    Navigate("/login");
  };
  return (
    <>
    <button
        type="submit"
        className="bg-indigo-600 text-white font-[poppins] py-2 px-5 rounded md:ml-8 hover:bg-indigo-800 duration-500"
        onClick={handleLogOut}
      >
        Logout
      </button>
      {/* <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleLogOut}
      >
        Logout
      </button> */}
    </>
  );
};

export default Logout;
