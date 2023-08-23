import Topbar from '../../components/common/topbar'
import AddHeader from '../../components/common/addHeader'
import General from '../../components/layout/coupon/general'
import Restriction from '../../components/layout/coupon/restrictions'
import Limit from '../../components/layout/coupon/limits'
import { useState } from 'react'
import { useProductContext } from "../../context/ProductContext";
const CreateCode = () => {

    const { fields, setFields } = useProductContext();

    const [activeComponent, setActiveComponent] = useState(1);

    const handleButtonClick = (componentNumber) => {
        setActiveComponent(componentNumber);
    };

    return (
        <>
            <section className='bg-gray-100 w-full overflow-hidden'>
                <Topbar title='Coupon Code' path='/coupon' />

                <form className='mx-5'>
                    <AddHeader title='Coupon Form' />

                    <section className='bg-white rounded-lg pt-[20px] px-[30px] pb-[20px] my-[20px]'>
                        <div className='flex justify-between px-[16px] bg-[#F6F7FB] rounded-[8px]'>
                            <input type="text" className='my-[14px] w-full outline-none bg-[#F6F7FB]' placeholder='Coupon Code' />
                            <button className='text-[#F59968]'>Generate</button>
                        </div>
                        <div className='flex justify-between px-[16px] bg-[#F6F7FB] rounded-[8px] my-[20px]'>
                            <textarea name="desc" rows="6" placeholder='Description' className='w-full bg-[#F6F7FB] outline-none mt-[14px]'></textarea>
                        </div>
                        <section>
                            <div className='px-[16px] py-[8px] bg-[#F6F7FB] rounded-t-[8px]'>
                                <h1 className='font-medium text-[#1D2327]'>Coupon Data</h1>
                            </div>
                            <div className='flex'>
                                <ul className='w-[216px] bg-[#F6F7FB] min-h-[226px]'>
                                    <li className={`${activeComponent === 1 ? 'bg-[#EDEFF7] text-[#555555]' : 'text-[#2271B1]'} py-[10px] pl-[35px] w-full mb-2 cursor-pointer`} onClick={() => handleButtonClick(1)}>General</li>
                                    <li className={`${activeComponent === 2 ? 'bg-[#EDEFF7] text-[#555555]' : 'text-[#2271B1]'} py-[10px] pl-[35px] w-full mb-2 cursor-pointer`} onClick={() => handleButtonClick(2)}>Usage restriction</li>
                                    <li className={`${activeComponent === 3 ? 'bg-[#EDEFF7] text-[#555555]' : 'text-[#2271B1]'} py-[10px] pl-[35px] w-full mb-2 cursor-pointer`} onClick={() => handleButtonClick(3)}>Usage limits</li>
                                </ul>
                                <div>
                                    {activeComponent === 1 && <General />}
                                    {activeComponent === 2 && <Restriction />}
                                    {activeComponent === 3 && <Limit />}
                                </div>
                            </div>
                        </section>
                    </section>
                </form>
            </section>
        </>
    )
}

export default CreateCode 