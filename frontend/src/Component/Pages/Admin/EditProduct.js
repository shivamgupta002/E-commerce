import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const Navigate=useNavigate();
  const [input, setInput] = useState({
    title: "",
    image: "",
    price: "",
    rating: "",
    category: "",
  });
//----------------------- fetch Data -----------------------------
  const { id } = useParams();
  const URL = `http://localhost:5000/api/product/getProductById/${id}`;
  const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };
  useEffect(() => {
    fetchHandler().then((data) => setInput(data.product));
  }, [id]);

  //-------------- onSubmit -----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(input);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/product/updateProduct/${id}`,
        input
      );
      if (response.status === 201) {
        alert(response.data.message)
        Navigate('/adminPanel')
      }
      if (response.status === 208) {
        alert(response.data.message)
      }
    }catch(e){
      console.log(e.message)
    }
    
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit Product
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
            {/*-------------------- Product Name (title) ------------------------- */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Name
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  value={input.title}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>

            {/*-------------------- Image Src ------------------------- */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image Link
              </label>
              <div className="mt-2">
                <input
                  id="image"
                  name="image"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  value={input.image}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>
            {/*-------------------- Price of Product ------------------------- */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price (in Rupee)
              </label>
              <div className="mt-2">
                <input
                  id="price"
                  name="price"
                  type="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  value={input.price}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>
            {/*-------------------- Category of Product ------------------------- */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category Of Product
              </label>
              <div className="mt-2">
                <input
                  id="category"
                  name="category"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  value={input.category}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>
            {/*-------------------- Rating of product ------------------------- */}
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rating (out from 5)
              </label>
              <div className="mt-2">
                <input
                  id="rating"
                  name="rating"
                  type="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  value={input.rating}
                  onChange={(e) =>
                    setInput({ ...input, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>

            {/* --------------------- Button  ----------------------- */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
