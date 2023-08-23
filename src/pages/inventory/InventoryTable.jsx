import React, { useState } from "react";
import { ReactComponent as Sort } from "../../assets/images/inventory/sort.svg";
import TablePagination from "@mui/material/TablePagination";
import "react-toastify/dist/ReactToastify.css";

const InventoryTable = ({ productData }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = productData && productData.slice(startIndex, endIndex);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1500px]">
          <thead>
            <tr className="border-y-2 h-10">
              <th className="text-left flex gap-2">
                <input className="scale-150 mx-4 mt-3" type="checkbox" />
              </th>
              <th className="text-left text-[16px]">Images</th>
              <th className="text-left flex-grow-1 text-[16px]">
                Name <Sort className="inline" />
              </th>
              <th className="text-left text-[16px]">
                SKU <Sort className="inline" />
              </th>
              <th className="text-left text-[16px]">Stock</th>
              <th className="text-left text-[16px]">
                Price <Sort className="inline" />
              </th>
              <th className="text-left text-[16px]">Categories</th>
              <th className="text-left text-[16px]">Tags</th>
              <th className="text-left text-[16px]">
                Date <Sort className="inline" />
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {paginatedData.map((d, index) => (
              <tr
                className={`${index % 2 === 0 && "bg-[#f9f9f9]"} h-20`}
                key={d._id}
              >
                <td>
                  <input className="scale-150 mx-4" type="checkbox" />
                </td>
                <td className="h-full p-2 flex">
                  <img
                    src={`/images/${d.thumbnail}`}
                    alt="upload"
                    className="h-10 w-10 rounded-lg"
                  />
                </td>
                <td className="name-buttons text-[16px]">
                  {d.productName}
                  <div className="flex text-xs gap-2 text-[#2f4ef7cc] -mr-16">
                    <span className="text-[#A6A8B1]">ID: 35</span> |
                    <button>Edit</button> |
                    <button className="text-red-500">Delete</button> |
                    <button>View</button> |<button>Duplicate</button>
                  </div>
                </td>
                <td>
                  <p className=" -mr-4 text-[16px]">{d.sku}</p>
                </td>
                <td className="text-sm font-semibold text-[#38ca6d]">
                  {d.stock}
                </td>
                <td>
                  {d.discount !== 0 && (
                    <del className="text-[#a5a7b1]">Rs {d.basePrice}</del>
                  )}
                  <p>
                    Rs{" "}
                    {d.discount === 0
                      ? d.basePrice
                      : d.discountType === "percentage"
                      ? Math.round(
                          d.basePrice - (d.basePrice / 100) * d.discount
                        )
                      : d.basePrice - d.discount}
                  </p>
                </td>
                <td>
                  {d.categories.map((items, index) => (
                    <React.Fragment key={index}>
                      {items}
                      {d.categories.length !== index + 1 && ", "}
                    </React.Fragment>
                  ))}
                </td>
                <td>
                  {d.tags.map((items, index) => (
                    <React.Fragment key={index}>
                      {items}
                      {d.tags.length !== index + 1 && ", "}
                    </React.Fragment>
                  ))}
                </td>
                <td>
                  {d.status}
                  <p>2020/10/22 at 10:09 am</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination
        component="div"
        count={productData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default InventoryTable;
