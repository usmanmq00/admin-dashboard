import Topbar from '../../components/common/topbar'
import Icon1 from '../../assets/images/dashboard/icon1.png'
import Icon2 from '../../assets/images/dashboard/icon2.png'
import Icon3 from '../../assets/images/dashboard/icon3.png'
import Dots from '../../assets/images/dashboard/dots-vertical.png'
import Circle1 from '../../assets/images/dashboard/Ellipse 3.png'
import Circle2 from '../../assets/images/dashboard/Ellipse 4.png'
import Circle3 from '../../assets/images/dashboard/Ellipse 5.png'
import Graph from '../../components/common/graph'

const Dashboard = () => {
  return (
    <>
    <section className='bg-gray-100 w-full overflow-hidden'>
      <Topbar title='Dashboard' path='/dashboard' />

      <section className='w-95%'>

        <section className='md:flex mx-[16px] gap-5 mt-5 overflow-hidden'>
          <section className='h-[145px] md:w-[30%] bg-white mb-5 rounded-xl px-[15px] py-[11px]'>
            <div className='flex justify-between items-center'>
              <img className='w-[36px] h-[36px]' src={Icon1} alt="Icon 1" />
              <select className='text-gray-400' name="day">
                <option value="This day">This Day</option>
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
              </select>
            </div>
            <div className='flex justify-between w-full mt-[32px]'>
              <div className='w-[60%]'>
                <h4 className='text-gray-400 mb-[8px]'>Sales</h4>
                <h1 className='font-semibold text-xl'>PKR <span>40,000.00</span></h1>
              </div>
              <div className='w-[40%]'>
                <h4 className='text-gray-400  mb-[8px]'>Volume</h4>
                <h1 className='font-semibold text-xl flex items-center'>450<span className='text-[#38CA6D] pl-[7px] font-normal text-base'>+20.00%</span></h1>
              </div>
            </div>
          </section>
          <section className='h-[145px] md:w-[30%] bg-white mb-5 rounded-xl px-[15px] py-[11px]'>
            <div className='flex justify-between items-center'>
              <img className='w-[36px] h-[36px]' src={Icon2} alt="Icon 1" />
              <select className='text-gray-400' name="day">
                <option value="This day">This Day</option>
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
              </select>
            </div>
            <div className='flex justify-between w-full mt-[32px]'>
              <div className='w-[60%]'>
                <h4 className='text-gray-400 mb-[8px]'>Customers</h4>
                <h1 className='font-semibold text-xl'>1,250 <span className='text-[#38CA6D] pl-[7px] font-normal text-base'>+15.80%</span></h1>
              </div>
              <div className='w-[40%]'>
                <h4 className='text-gray-400  mb-[8px]'>Active</h4>
                <h1 className='font-semibold text-xl flex items-center'>1,180<span className='text-[#38CA6D] pl-[7px] font-normal text-base'>85%</span></h1>
              </div>
            </div>
          </section>
          <section className='h-[145px] md:w-[40%] bg-white mb-5 rounded-xl  px-[15px] py-[11px]'>
          <div className='flex justify-between items-center'>
              <img className='w-[36px] h-[36px]' src={Icon3} alt="Icon 1" />
              <select className='text-gray-400' name="day">
                <option value="This day">This Day</option>
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
              </select>
            </div>
            <div className='flex justify-between w-full mt-[32px]'>
              <div className='w-[33.33%]'>
                <h4 className='text-gray-400 mb-[8px]'>All Orders</h4>
                <h1 className='font-semibold text-xl'>450</h1>
              </div>
              <div className='w-[33.33%]'>
                <h4 className='text-gray-400  mb-[8px]'>Pending</h4>
                <h1 className='font-semibold text-xl flex items-center'>5</h1>
              </div>
              <div className='w-[33.33%]'>
                <h4 className='text-gray-400  mb-[8px]'>Completed</h4>
                <h1 className='font-semibold text-xl flex items-center'>445</h1>
              </div>
            </div>
          </section>
        </section>

        <section className='md:flex mx-[16px] gap-5 overflow-hidden'>
          <section className='h-[476px] md:w-[29%] bg-white mb-5 rounded-xl'>
            <div className='flex justify-between pt-[24px] pl-[24px]'>
              <div>
                <h1 className='font-semibold text-xl'>Top Selling Category</h1>
                <p className='text-gray-400 text-sm'>Total 10.4k Visitors</p>
              </div>
              <img className='w-[22px] h-[22px] mr-[24px] mt-px cursor-pointer' src={Dots} alt="Dots" />
            </div> 
            <div className=' relative left-[20px]'>
              <div className='relative'>
                <img className='absolute z-10 top-[63px] left-[29px]' src={Circle1} alt="Circle 1" />
                <div className=' text-white absolute z-40 top-[120px] left-[95px]'>
                  <h3 className='font-normal text-sm opacity-60'>Formal</h3>
                  <h1 className='font-bold'>4.567</h1>
                  <h3 className='font-normal text-sm opacity-60'>Per Day</h3>
                </div>
              </div>
              <div className='relative'>
                <img  className='absolute z-20 top-[145px] left-[153px]' src={Circle2} alt="Circle 1" />
                <div className=' text-white absolute z-50 top-[185px] left-[205px]'>
                  <h3 className='font-normal text-sm opacity-60'>Casuals</h3>
                  <h1 className='font-bold'>3.167</h1>
                  <h3 className='font-normal text-sm opacity-60'>Per Day</h3>
                </div>
              </div>
              <div className='relative'>
                <img className='absolute z-30 top-[210px] left-[72px]' src={Circle3} alt="Circle 1" />
                <div className=' text-white absolute z-50 top-[235px] left-[105px]'>
                  <h3 className='font-normal text-sm opacity-60'>Sandals</h3>
                  <h1 className='font-bold'>1.845</h1>
                  <h3 className='font-normal text-sm opacity-60'>Per Day</h3>
                </div>
              </div>
            </div>
          </section>
          <section className='h-[476px] md:w-[70%] bg-white mb-5 rounded-xl'>
            <div className='flex justify-between pt-[24px] pl-[24px]'>
              <div>
                <h1 className='font-semibold text-xl'>Reports</h1>
                <p className='text-gray-400 text-sm'>Last 7 Days</p>
              </div>
              <img className='w-[22px] h-[22px] mr-[24px] mt-px cursor-pointer' src={Dots} alt="Dots" />
            </div>
            <div className='md:overflow-x-hidden overflow-x-scroll'>
              <div className='mt-[40px] mx-[24px] flex w-[95%] md:gap-5 gap-28'>
                <div className='w-[20%] border-b-2 border-blue-100 cursor-pointer'>
                  <div className='pl-2'>
                    <h1 className='font-semibold text-xl pb-[8px]'><span>24</span>k</h1>
                    <p className='text-gray-400 text-sm pb-[15px]'>Customers</p>
                  </div>
                </div>
                <div className='w-[20%] border-b-2 border-blue-100 cursor-pointer'>
                  <div className='pl-2'>
                    <h1 className='font-semibold text-xl pb-[8px]'><span>3.5</span>k</h1>
                    <p className='text-gray-400 text-sm pb-[15px]'>Total Products</p>
                  </div>
                </div>
                <div className='w-[20%] border-b-2 border-blue-100 cursor-pointer'>
                  <div className='pl-2'>
                    <h1 className='font-semibold text-xl pb-[8px]'><span>2.5</span>k</h1>
                    <p className='text-gray-400 text-sm pb-[15px]'>Stock Products</p>
                  </div>
                </div>
                <div className='w-[20%] border-b-2 border-blue-100 cursor-pointer'>
                  <div className='pl-2'>
                    <h1 className='font-semibold text-xl pb-[8px]'><span>0.5</span>k</h1>
                    <p className='text-gray-400 text-sm pb-[15px]'>Out of Stock</p>
                  </div>
                </div>
                <div className='w-[20%] border-b-2 border-blue-100 cursor-pointer'>
                  <div className='pl-2'>
                    <h1 className='font-semibold text-xl pb-[8px]'><span>250</span>k</h1>
                    <p className='text-gray-400 text-sm pb-[15px]'>Revenue</p>
                  </div>
                </div>
              </div>
              <div className='mx-[34px] mt-[41px]'>
                <Graph />
              </div>
            </div>
          </section>
        </section>

      </section>

    </section>
    </>
  )
}

export default Dashboard  