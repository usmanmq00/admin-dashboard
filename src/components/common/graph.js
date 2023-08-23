import React from 'react'

const Graph = () => {
  return (
    <>
      <section className='flex'>
        <div>
            <div className='mb-4 text-sm text-gray-400'><span>50</span>k</div>
            <div className='mb-4 text-sm text-gray-400'><span>40</span>k</div>
            <div className='mb-4 text-sm text-gray-400'><span>30</span>k</div>
            <div className='mb-4 text-sm text-gray-400'><span>20</span>k</div>
            <div className='mb-4 text-sm text-gray-400'><span>10</span>k</div>
            <div className='mb-4 text-sm text-gray-400'><span>ok</span></div>
        </div>
        <div className='flex justify-center ml-[44px]'>
            <div className='mr-[80px]'>
                <div className='w-[13px] h-[200px] bg-gray-200 rounded-full mb-[10px] ml-[7px] relative'>
                    <div className='w-full h-[170px] bg-blue-700 rounded-full absolute bottom-0'></div>
                </div>
                <div className='text-gray-400'>Mon</div>
            </div>
            <div className='mr-[80px]'>
                <div className='w-[13px] h-[200px] bg-gray-200 rounded-full mb-[10px] ml-[7px] relative'>
                    <div className='w-full h-[80px] bg-blue-700 rounded-full absolute bottom-0'></div>
                </div>
                <div className='text-gray-400'>Tue</div>
            </div>
            <div className='mr-[90px]'>
                <div className='w-[13px] h-[200px] bg-gray-200 rounded-full mb-[10px] ml-[7px] relative'>
                    <div className='w-full h-[120px] bg-blue-700 rounded-full absolute bottom-0'></div>
                </div>
                <div className='text-gray-400'>Wed</div>
            </div>
            <div className='mr-[90px]'>
                <div className='w-[13px] h-[200px] bg-gray-200 rounded-full mb-[10px] ml-[7px] relative'> 
                    <div className='w-full h-[50px] bg-blue-700 rounded-full absolute bottom-0'></div>
                </div>
                <div className='text-gray-400'>Thu</div>
            </div>
            <div className='mr-[90px]'>
                <div className='w-[13px] h-[200px] bg-gray-200 rounded-full mb-[10px] ml-[7px] relative '>
                    <div className='w-full h-[170px] bg-blue-700 rounded-full absolute bottom-0'></div>
                </div>
                <div className='text-gray-400'>Fri</div>
            </div>
            <div className='mr-[90px]'>
                <div className='w-[13px] h-[200px] bg-gray-200 rounded-full mb-[10px] ml-[7px] relative'>
                    <div className='w-full h-[70px] bg-blue-700 rounded-full absolute bottom-0'></div>
                </div>
                <div className='text-gray-400'>Sat</div>
            </div>
            <div className='mr-[90px]'>
                <div className='w-[13px] h-[200px] bg-gray-200 rounded-full mb-[10px] ml-[7px] relative'>
                    <div className='w-full h-[170px] bg-blue-700 rounded-full absolute bottom-0'></div>
                </div>
                <div className='text-gray-400'>Sun</div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Graph 