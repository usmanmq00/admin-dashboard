import React from 'react'
import { Link } from 'react-router-dom'

const EmptyPage = ({ icon, title, desc, text, path }) => {
  return (
    <>
        <section className='bg-white w-full md:h-[650px] h-[400px] border-b-2 rounded-2xl mt-2 mb-3 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className='bg-gray-200 w-[140px] h-[140px] border-2 rounded-full mb-10 relative'>
                { icon }
                </div>
                <h1 className='mb-5 text-2xl font-semibold text-gray-700'>{ title }</h1>
                <p className='mb-5 w-[282px] text-center text-gray-400'>{ desc }</p>
                <Link to={path}><button className=' bg-[#2F4EF7] text-white px-5 pb-3 border-2 rounded-2xl'><span className='text-3xl pr-5'>+</span>{ text }</button></Link>
            </div>     
        </section> 
    </>
  )
}

export default EmptyPage 