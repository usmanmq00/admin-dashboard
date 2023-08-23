import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ title, text, path }) => {
  return (
    <>
       <header className='flex items-center justify-between mt-5'>
          <h1 className='font-semibold md:text-xl'>{ title }</h1>
          <Link to={path}><button className='text-white font-normal border-2 rounded-xl bg-[#2F4EF7] pt-2 pb-3 px-5'><span className='text-2xl'>+</span> { text }</button></Link>
        </header>
    </>
  )
}

export default Button  