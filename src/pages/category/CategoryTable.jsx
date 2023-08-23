import React, { useState } from "react";
import { ReactComponent as Sort } from "../../assets/images/inventory/sort.svg";
import TablePagination from "@mui/material/TablePagination";

const CategoryTable = ({ categoryData, countOccurrences, productData }) => {
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
  const paginatedData =
    categoryData && categoryData.slice(startIndex, endIndex);

  return (
    <>
      <section className="w-full bg-white rounded-xl  overflow-hidden px-[21px] py-[22px] mb-[20px]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-y-2 h-10">
                <th className="text-left flex gap-2">
                  <input className="scale-150 mx-4 mt-3" type="checkbox" />
                </th>
                <th className="text-left flex-grow-1 text-[16px]">
                  Name <Sort className="inline" />
                </th>
                <th className="text-left text-[16px]">
                  Description <Sort className="inline" />
                </th>
                <th className="text-left text-[16px]">
                  Slug <Sort className="inline" />
                </th>
                <th className="text-left text-[16px]">Count</th>
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
                  <td className="name-buttons text-[16px] capitalize">
                    {d.parentCategory && "--"}
                    {d.title}
                    <div className="flex text-xs gap-2 text-[#2f4ef7cc] -mr-16">
                      <button>Edit</button> |
                      <button className="text-red-500">Delete</button> |
                      <button>View</button> |<button>Make Default</button>
                    </div>
                  </td>
                  <td>
                    <p className=" -mr-4 text-[16px] first-letter:capitalize">
                      {d.description ? d.description : "-"}
                    </p>
                  </td>
                  <td className="text-sm text-[16px]">
                    {d.slug ? d.slug : "-"}
                  </td>
                  <td>
                    <p className="text-[16px]">
                      {countOccurrences(productData, d.title)}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <TablePagination
        component="div"
        count={categoryData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default CategoryTable;
