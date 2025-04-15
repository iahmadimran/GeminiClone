import React, { useState } from 'react';
import { useGeminiContext } from '../context/GeminiContext';

function Sidebar() {
  const { extended, setExtended, input, setInput, prevPrompts } = useGeminiContext()
  

  return (
    <div
      className={`sidebar-div gap-10 py-6 px-4 absolute top-0 left-0 bottom-0 flex flex-col justify-start items-start bg-[rgb(240,243,248)] z-100 transition-all duration-150 ${extended ? 'w-58' : 'w-19'}`}
    >
      <div className='menu-section relative flex flex-col items-center justify-center'>
        <button
          className={`w-10 h-10 bg-transparent rounded-full flex justify-center items-center duration-150 hover:bg-[rgb(229,234,241)] cursor-pointer`}
          onClick={() => setExtended((prev) => !prev)}
          title={extended ? "Collapse Menu" : 'Expand Menu'}
        >
          <i className='bx bx-menu text-xl'></i>
        </button>
        
      </div>

      <div className='flex flex-row items-center justify-center gap-1.5 duration-150'>
        <button className={`${extended ? 'w-max h-10 px-3 py-1.5' : 'w-10 h-10'} bg-[rgb(229,234,241)] rounded-full flex justify-center items-center duration-150 cursor-pointer`} title='New Chat'>
          <i className='bx bx-plus text-2xl text-gray-500'></i>
          {extended ? <p className='text-sm whitespace-nowrap text-gray-500 '>New Chat</p> : null}
        </button>
      </div>

      {extended ?
        <div className='flex flex-col justfiy-start items-start w-full duration-150 transition-all h-full'>
          <p className='font-semibold text-md'>Recent</p>
          {prevPrompts.map((item, index) => (
            <div className='flex justify-center items-center w-full px-3 py-2 transition-all duration-150 rounded-full hover:bg-[rgb(229,234,241)]' key={index}>
              <i className='bx bx-menu-alt-left text-gray-600'></i>
              <p className='text-sm ml-2 text-gray-600 truncate overflow-hidden text-ellipsis whitespace-nowrap'>{item}</p>
            </div>
          ))}
        </div>
        : null}

      <div className={`flex flex-col absolute bottom-12 text-xl text-gray-500 justify-start items-start duration-150 transition-all`}>
        <div className='flex justify-start items-start gap-x-1.5 w-full'>
          <button className={`${extended ? 'w-max h-10 px-3 py-1.5' : 'w-10 h-10'} hover:bg-[rgb(229,234,241)] rounded-full flex justify-center items-center duration-150 cursor-pointer`} title='Gem Manager'>
            <i className='bx bxs-diamond'></i>
            {extended ? <p className='text-sm ml-1.5 whitespace-nowrap text-gray-500'>Gem Manager</p> : null}
          </button>
        </div>
        <div className='flex justify-start items-start gap-x-1.5 w-full'>
          <button className={`${extended ? 'w-max h-10 px-3 py-1.5' : 'w-10 h-10'} hover:bg-[rgb(229,234,241)] rounded-full flex justify-center items-center duration-150 cursor-pointer`} title='Help'>
            <i className='bx bx-question-mark'></i>
            {extended ? <p className='text-sm ml-1.5 whitespace-nowrap text-gray-500'>Help</p> : null}
          </button>
        </div>
        <div className='flex justify-start items-start gap-x-1.5 w-full'>
          <button className={`${extended ? 'w-max h-10 px-3 py-1.5' : 'w-10 h-10'} hover:bg-[rgb(229,234,241)] rounded-full flex justify-center items-center duration-150 cursor-pointer`} title='Activity'>
            <i className='bx bx-history'></i>
            {extended ? <p className='text-sm ml-1.5 whitespace-nowrap text-gray-500'>Activity</p> : null}
          </button>
        </div>
        <div className='flex justify-start items-start gap-x-1.5 w-full'>
          <button className={`${extended ? 'w-max h-10 px-3 py-1.5' : 'w-10 h-10'} hover:bg-[rgb(229,234,241)] rounded-full flex justify-center items-center duration-150 cursor-pointer`} title='Settings'>
            <i className='bx bx-cog'></i>
            {extended ? <p className='text-sm ml-1.5 whitespace-nowrap text-gray-500'>Settings</p> : null}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;