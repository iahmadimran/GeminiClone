import React from 'react'
import geminiLogo from '../assets/gemini-logoo.svg'
import { useGeminiContext } from '../context/GeminiContext'

function Header() {
  const {extended, setExtended} = useGeminiContext()

  return (
    <div className={`px-5 py-4 justify-between absolute top-0 ${extended ? 'left-48' : 'left-19'} duration-150 right-0  items-center flex-row inline-flex z-6 flex-wrap`}>
      <div className='flex gap-2.5 w-max px-2 py-2 rounded-xl hover:bg-[rgb(229,234,241)] cursor-pointer duration-100 '>
        <div className='flex flex-col justify-start items-start'>
          <p className='text-xl'>Gemini</p>
          <p className='text-sm text-gray-600 font-semibold'>2.0 Flash</p>
        </div>
        <div className='ml-1 mt-0.5'>
          <i className='bx bxs-down-arrow text-gray-700 text-xs'></i>
        </div>
      </div>
      <div className='flex justify-center items-center gap-2.5 w-max'>
        <button className='px-6.5 py-2 bg-[rgb(229,234,241)] cursor-pointer hover:bg-[rgb(212,212,212)] duration-100 rounded-lg '>
          <img src={geminiLogo} className='mr-1.5 inline-block w-3 h-3' />
          <p className='inline-block text-black text-xs'>Try Gemini Advanced</p>
        </button>
        <button className='w-10 h-10 bg-transparent rounded-full flex justify-center items-center duration-150 hover:bg-[rgb(229,234,241)] cursor-pointer'>
          <i className='bx bxl-stack-overflow text-2xl'></i>
        </button>
        <button className='w-10 h-10 bg-transparent rounded-full flex justify-center items-center duration-150 hover:bg-[rgb(229,234,241)] cursor-pointer'>
          <i className='bx bxs-grid text-2xl'></i>
        </button>
        <button className=' bg-transparent rounded-full flex justify-center items-center cursor-pointer'>
          <img src='https://img.freepik.com/premium-photo/very-cute-kid-caracter-animation-pixar-style_950002-73827.jpg?w=360' className='w-10 h-10 object-cover rounded-full' />
        </button>
      </div>
    </div>
  )
}

export default Header
