import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

const URL = "http://localhost:5000/api/product/getProduct";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const AdminPanel = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setProduct(data.product));
  }, []);
  // console.log(product);
  //   ----------------------------------------------
  const columns = [
    // {
    //   name: "Id",
    //   selector: (row) => row._id,
    //   sortable: true,
    // },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => row.image,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
    },
    {
      name: "Edit",
      cell: (row) => (
        <>
          <Link to={`/editProduct/${row._id}`}>
            <i className="fa-solid fa-pen-to-square mr-4 text-xl text-yellow-400 hover:text-yellow-700 transition-all duration-500 ease-in-out hover:scale-110"></i>
          </Link>
          <div onClick={() => deleteProduct(row._id)}>
            <i className="fa-solid fa-trash text-xl text-red-500 hover:text-red-600 transition-all duration-500 ease-in-out hover:scale-110"></i>
          </div>
        </>
      ),
    },
  ];

  const deleteProduct = () => {};
  return (
    <>
      <DataTable
        title="Product"
        columns={columns}
        data={product}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        striped
        responsive
        noDataText="No data found"
        paginationRowsPerPageOptions={[10, 25, 50, 75, 100]}
        paginationRowsPerPage={10}
      />
    </>
  );
};

export default AdminPanel;
