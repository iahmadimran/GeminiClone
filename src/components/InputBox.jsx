import React, { useEffect, useState } from 'react'
import { useGeminiContext } from '../context/GeminiContext'

function InputBox() {
  const {input, setInput, onSent, addRecent, extended} = useGeminiContext()

  const handleSendBtn = () => {
    if (input.trim().length === 0) {
      alert('Input field cannot be empty...');
      return;
    }
    addRecent();
    onSent();
  };

  return (
    <div className='flex justify-start items-start flex-col border border-gray-400 rounded-3xl absolute bottom-12 z-100 gap-y-3.5 px-4 pt-4 pb-2.5 max-w-3/5 w-3/5'>
      <div className='w-full' role='textbox' aria-multiline='true' data-placeholder="Ask Gemini">
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Ask Gemini' className='outline-none w-full overflow-hidden text-wrap' />
        {console.log(input)}
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex justify-center items-center gap-0.5 -ml-2.5'>
          <button className='w-9 h-9 bg-transparent rounded-full flex justify-center items-center duration-150 hover:bg-[rgb(229,234,241)] cursor-pointer'>
            <i className='bx bx-plus text-2xl text-gray-500' ></i>
          </button>
          <button className=' bg-transparent rounded-3xl px-3.5 py-2 flex justify-center items-center duration-150 hover:bg-[rgb(229,234,241)] cursor-pointer'>
            <i className="ri-earth-fill text-gray-500 mr-1.5"></i>
            <p className='text-sm text-gray-500'>Deep Research</p>
          </button>
          <button className=' bg-transparent rounded-3xl px-3.5 py-2 flex justify-center items-center duration-150 hover:bg-[rgb(229,234,241)] cursor-pointer'>
            <i className="ri-edit-box-line text-gray-500 mr-1.5"></i>
            <p className='text-sm text-gray-500'>Canvas</p>
          </button>
        </div>
        <div className='flex justify-center items-center absolute right-4'>
          {input?.length === 0 ? <button className='px-3 py-3'>
            <i className='bx bxs-microphone text-xl text-gray-500 '></i>
          </button> : <button className='px-3 py-3 bg-[rgb(229,234,241)] rounded-full flex justify-center items-center duration-150 hover:bg-[rgb(209,209,209)] cursor-pointer transition-all' onClick={handleSendBtn}>
            <i className='bx bxs-send'></i>
          </button> }
          
        </div>
      </div>
    </div>
  )
}

export default InputBox
