import { useState } from 'react'
import Topbar from '../../components/common/topbar'
import Button from '../../components/common/button'
import { ReactComponent as Sort } from "../../assets/images/inventory/sort.svg";
import { data } from "./dataTable";
import TablePagination from "@mui/material/TablePagination";
import { ReactComponent as Calendar } from '../../assets/images/inventory/Calendar.svg'
import { ReactComponent as Down } from '../../assets/images/inventory/Down.svg'
import { ReactComponent as Swap } from '../../assets/images/inventory/Swap.svg'
import { ReactComponent as Search } from '../../assets/images/inventory/Search.svg'
import Eye from '../../assets/images/customOrder/Eye.png'
import Processing from '../../assets/images/customOrder/Processing.png'
import Completed from '../../assets/images/customOrder/Completed.png'
import EmptyPage from '../../../src/components/common/emptyPage'
import { ReactComponent as Ticket } from "../../assets/images/sidebar/Ticket.svg";

const CustomOrder = () => {

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
            <section className='bg-gray-100 w-full overflow-hidden'>
                <Topbar title='Custom Order Management' path='/customers' />

                <section className='mx-5'>
                    <Button title='Custom Order Summary' text='Add New Customer' path='/customers/create-customer' />

                    {data && data.length === 0 ? (
                        <EmptyPage
                            icon={
                                <Ticket className="fill-gray-400 absolute top-10 left-10 h-[60px] w-[60px]" />
                            }
                            title="No Customer Yet?"
                            desc="Add customer to your list"
                            text="New Customer"
                            path="/coupon/create-customer"
                        />
                    ) : (
                        <section className='w-full bg-white rounded-xl  overflow-hidden px-[21px] py-[22px] my-[20px]'>
                            <section className='mb-[27px]'>
                                <div className='flex justify-between'>
                                    <h1 className='text-[16px] pt-[20px] pl-[20px] font-medium text-[#45464E]'>Custom Orders</h1>
                                    <div className='flex'>
                                        <div className='border-2 border-[#ABAFB1] mr-3 rounded-[4px]' >
                                            <div className='inline pl-2'>{<Search className='inline mb-1 mr-2 w-5 h-5' />}</div>
                                            <input className='p-[8px] outline-none' type="text" placeholder='Search' />
                                        </div>
                                        <button className='border-2 border-[#53545C] rounded-[4px] p-2 mr-3' >{<Swap className='inline mb-1 mr-2 w-5 h-5' />} Import/Export</button>
                                        <button className='border-2 border-[#53545C] rounded-[4px] p-2 mr-3'>{<Calendar className='inline mb-1 mr-2 w-5 h-5' />} Filter</button>
                                        <button className='border-2 border-[#53545C] rounded-[4px] p-2 mr-3'>Bulk Action {<Down className='inline mb-1 ml-2 w-5 h-5' />}</button>
                                    </div>
                                </div>
                            </section>
                            <section className='w-full bg-white rounded-xl  overflow-hidden px-[21px] py-[22px] mb-[20px]'>
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[1200px]">
                                        <thead>
                                            <tr className="border-y-2 h-10">
                                                <th className="text-left flex gap-2">
                                                    <input className="scale-150 mx-4 mt-3" type="checkbox" />
                                                </th>
                                                <th className="text-left flex-grow-1 text-[16px]">
                                                    Order <Sort className="inline" />
                                                </th>
                                                <th className="text-left text-[16px]">
                                                    Date <Sort className="inline" />
                                                </th>
                                                <th className="text-left text-[16px]">
                                                    Status <Sort className="inline" />
                                                </th>
                                                <th className="text-left text-[16px]">
                                                    Shipping <Sort className="inline" />
                                                </th>
                                                <th className="text-left text-[16px]">
                                                    Billing <Sort className="inline" />
                                                </th>
                                                <th className="text-left text-[16px]">
                                                    Total <Sort className="inline" />
                                                </th>
                                                <th className="text-left text-[16px]">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="w-full">
                                            {paginatedData.map((d, index) => (
                                                <tr
                                                    className={`${index % 2 === 0 && "bg-[#f9f9f9]"} h-20`}
                                                    key={index}
                                                >
                                                    <td>
                                                        <input className="scale-150 mx-4" type="checkbox" />
                                                    </td>
                                                    <td className='text-[#2F4EF7] flex pt-6 text-[16px]'>
                                                        <div className='w-[200px]'>#{d.order}</div>
                                                        <img src={Eye} alt="Eye" />
                                                    </td>
                                                    <td>
                                                        <p className=" -mr-4  text-[16px]">{d.date}</p>
                                                    </td>
                                                    <td className={`text-[16px] font-semibold ${d.status === 'Completed' ? 'text-[#2F4EF7]' : d.status === 'Processing' ? 'text-[#38CA6D]' : 'text-[#7C7C7C]'}`}>
                                                        {d.status}
                                                    </td>
                                                    <td className='text-[16px] w-[250px] pr-5'>
                                                        <p>{d.shipping}</p>
                                                    </td>
                                                    <td className="text-[16px] w-[250px] pr-5">
                                                        <div>{d.billing}</div>
                                                        <div className='text-[#6E7079]'>{d.payment}</div>
                                                    </td>
                                                    <td>
                                                        <p className='text-[16px]'>Rs {d.total}</p>
                                                    </td>
                                                    <td className='flex gap-[5px] pt-6'>
                                                        <img
                                                            className={`cursor-pointer ${d.status !== 'Processing' && d.status === 'Completed'
                                                                ? 'invisible'
                                                                : d.status === 'Processing'
                                                                    ? 'invisible'
                                                                    : null
                                                                }`}
                                                            src={Processing}
                                                            alt="Processing"
                                                        />
                                                        <img
                                                            className={`cursor-pointer ${d.status === 'Completed' && d.status !== 'Processing'
                                                                ? 'invisible'
                                                                : null
                                                                }`}
                                                            src={Completed}
                                                            alt="Completed"
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <TablePagination
                                component="div"
                                count={data.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </section>
                    )}
                </section>
            </section>
        </>
    )
}

export default CustomOrder 