import Topbar from "../../components/common/topbar";
import Button from "../../components/common/button";
import { ReactComponent as Bag } from "../../assets/images/sidebar/Bag.svg";
import User from "../../assets/images/dashboard/icon2.png";
import Eye from "../../assets/images/coupon/eye.png";
import EmptyPage from "../../components/common/emptyPage";
import TablePagination from "@mui/material/TablePagination";
import { ReactComponent as Ticket } from "../../assets/images/sidebar/Ticket.svg";
import { ReactComponent as Calendar } from "../../assets/images/inventory/Calendar.svg";
import { ReactComponent as Down } from "../../assets/images/inventory/Down.svg";
import { ReactComponent as Swap } from "../../assets/images/inventory/Swap.svg";
import { ReactComponent as Search } from "../../assets/images/inventory/Search.svg";
import { data } from "./dataTable";
import { useState } from "react";

const Coupon = () => {
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
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <>
      <section className="bg-gray-100 w-full overflow-hidden">
        <Topbar title="Coupon Code" path="/coupon" />

        <section className="mx-5">
          <Button
            title="Coupon Code Summary"
            text="Add a New Coupon"
            path="/coupon/create-coupon"
          />

          <section className="md:flex w-full gap-5 mt-5">
            <section className="md:w-[50%] h-[150px] bg-[#2F4EF7] border-2 rounded-2xl mb-3 px-[15px] py-[11px]">
              <div className="w-[36px] h-[36px]">
                {<Bag className="fill-white" />}
              </div>
              <div className="flex justify-between w-full mt-[32px]">
                <div className="w-[60%]">
                  <h4 className="text-white mb-[8px]">All Coupon Codes</h4>
                  <h1 className="font-semibold text-xl text-white">30</h1>
                </div>
                <div className="w-[40%]">
                  <h4 className="text-white  mb-[8px]">Top Coupon Codes</h4>
                  <h1 className="font-semibold text-xl flex items-center text-white">
                    20
                    <span className="text-gray-300 pl-[7px] pt-1 font-normal text-base">
                      86
                    </span>
                  </h1>
                </div>
                <div className="w-[40%]">
                  <h4 className="text-white  mb-[8px]">Used</h4>
                  <h1 className="font-semibold text-xl flex items-center text-white">
                    100
                    <span className="text-gray-300 pl-[7px] pt-1 font-normal text-base">
                      86
                    </span>
                  </h1>
                </div>
              </div>
            </section>
            <section className="md:w-[50%] h-[150px] bg-white border-2 rounded-2xl px-[15px] py-[11px] overflow-hidden">
              <div className="flex justify-between items-center">
                <img className="w-[36px] h-[36px]" src={User} alt="Icon 2" />
                <select className="text-gray-400" name="day">
                  <option value="This day">This Day</option>
                  <option value="This Week">This Week</option>
                  <option value="This Month">This Month</option>
                </select>
              </div>
              <div className="flex justify-between w-full mt-[32px]">
                <div className="w-[50%]">
                  <h4 className="text-green-500 mb-[8px]">Revenue Generated</h4>
                  <h1 className="font-semibold text-xl">
                    PKR <span>234,232</span>
                  </h1>
                </div>
                <div className="w-[50%]">
                  <h4 className="text-gray-400  mb-[8px]">
                    Usage Metric Graph
                  </h4>
                  <h1 className="font-semibold text-xl flex items-center">
                    <img className="mr-3" src={Eye} alt="View" /> View
                  </h1>
                </div>
              </div>
            </section>
          </section>

          {data && data.length === 0 ? (
            <EmptyPage
              icon={
                <Ticket className="fill-gray-400 absolute top-10 left-10 h-[60px] w-[60px]" />
              }
              title="No Coupon Yet?"
              desc="Add codes to your coupons"
              text="New Coupon"
              path="/coupon/create-coupon"
            />
          ) : (
            <section className="w-full bg-white rounded-xl  overflow-hidden px-[21px] py-[22px] mb-[20px]">
              <section className="mb-[27px]">
                <div className="flex justify-between">
                  <h1 className="text-[16px] pt-[20px] pl-[20px] font-medium text-[#45464E]">
                    Category Items
                  </h1>
                  <div className="flex">
                    <div className="border-2 border-[#ABAFB1] mr-3 rounded-[4px]">
                      <div className="inline pl-2">
                        {<Search className="inline mb-1 mr-2 w-5 h-5" />}
                      </div>
                      <input
                        className="p-[8px] outline-none"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                    <button className="border-2 border-[#53545C] rounded-[4px] p-2 mr-3">
                      {<Swap className="inline mb-1 mr-2 w-5 h-5" />}{" "}
                      Import/Export
                    </button>
                    <button className="border-2 border-[#53545C] rounded-[4px] p-2 mr-3">
                      {<Calendar className="inline mb-1 mr-2 w-5 h-5" />} Filter
                    </button>
                    <button className="border-2 border-[#53545C] rounded-[4px] p-2 mr-3">
                      Bulk Action{" "}
                      {<Down className="inline mb-1 ml-2 w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </section>
              <section className="w-full bg-white rounded-xl  overflow-hidden px-[21px] py-[22px] mb-[20px]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1200px]">
                    <thead>
                      <tr className="border-y-2 h-10">
                        <th className="text-left flex gap-2">
                          <input
                            className="scale-150 mx-4 mt-3"
                            type="checkbox"
                          />
                        </th>
                        <th className="text-left flex-grow-1 text-[16px]">
                          Coupon Code
                        </th>
                        <th className="text-left text-[16px]">Discount Type</th>
                        <th className="text-left text-[16px]">
                          Discount Value
                        </th>
                        <th className="text- text-[16px]">Description</th>
                        <th className="text-left text-[16px]">Product ID</th>
                        <th className="text-left text-[16px]">Usage Limit</th>
                        <th className="text-left text-[16px]">
                          Expiration Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      {paginatedData.map((d, index) => (
                        <tr
                          className={`${
                            index % 2 === 0 && "bg-[#f9f9f9]"
                          } h-20`}
                          key={index}
                        >
                          <td>
                            <input className="scale-150 mx-4" type="checkbox" />
                          </td>
                          <td className="name-buttons pt-4 text-[16px]">
                            {d.couponCode}
                            <div className="flex text-xs gap-2 text-[#2f4ef7cc] -mr-16">
                              <button>Edit</button> |
                              <button className="text-red-500">Delete</button>
                            </div>
                          </td>
                          <td>
                            <p className=" -mr-4 text-[16px]">{d.type}</p>
                          </td>
                          <td className="text-sm text-[16px]">{d.value}%</td>
                          <td>
                            <p className="text-[16px]">{d.description}</p>
                          </td>
                          <td>
                            <p className=" -mr-4 text-[16px]">{d.id}</p>
                          </td>
                          <td className="text-sm text-[16px]">{d.limit}</td>
                          <td>
                            <p className="text-[16px]">{d.expire}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <TablePagination
                  component="div"
                  count={data.length}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </section>
            </section>
          )}
        </section>
      </section>
    </>
  );
};

export default Coupon;
