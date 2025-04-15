import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import InputBox from './components/InputBox'
import { GeminiProvider, useGeminiContext } from './context/GeminiContext'
import geminiLogo from './assets/gemini-logo.png'

function App() {
  const { input, setInput, onSent, addRecent, extended, showResult, resultData, recentPrompt, loading } = useGeminiContext()

  const handleSendBtn = () => {
    if (input.trim().length === 0) {
      alert('Input field cannot be empty...');
      return;
    }
    // addRecent();
    onSent();
  };

  return (
    // <>
    //   <Sidebar />
    //   <Header />
    //   <div className={`flex flex-col w-screen h-screen justify-center items-center duration-150 transition-all top-10  ${extended ? 'pl-14' : 'pl-10'}`}>
    //     {!showResult ?
    //       <div className={`text-transparent bg-linear-to-r from-blue-500 to-red-600 bg-clip-text mb-20 -ml-28 text-4xl font-semibold text-center`}>
    //         Hello&#44; Developer <br /> How can I assist you today?
    //       </div>
    //     : <div className='result-div flex flex-1 w-full flex-col justify-center items-center gap-4.5 overflow-y-auto'>
    //         <div className='w-3/5 flex justify-start items-center gap-x-4'>
    //           <img src='https://img.freepik.com/premium-photo/very-cute-kid-caracter-animation-pixar-style_950002-73827.jpg?w=360' className='w-12 h-12 object-cover rounded-full' />
    //           <p className='text-sm'>{recentPrompt}</p>
    //         </div>
    //         <div className='w-3/5 flex justify-start items-start gap-4'>
    //           <img src={geminiLogo} className='w-10 h-10 object-cover' />
    //           {loading ? <div className='loader'>
    //             <hr />
    //             <hr />
    //             <hr />
    //           </div> : <p dangerouslySetInnerHTML={{__html:resultData}} className='result text-sm overflow-hidden max-h-[calc(100vh-200px)]'></p>}
    //         </div>
    //       </div>}
    //     <div className='flex justify-start items-start flex-col border border-gray-400 rounded-3xl z-2 bg-white gap-y-3.5 px-4 pt-4 pb-2.5 max-w-3/5 w-3/5'>
    //       <div className='w-full' role='textbox' aria-multiline='true' data-placeholder="Ask Gemini">
    //         <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Ask Gemini' className='outline-none w-full overflow-hidden text-wrap' />
    //         {console.log(input)}
    //       </div>
    //       <div className='flex justify-between items-center'>
    //         <div className='flex justify-center items-center gap-0.5 -ml-2.5'>
    //           <button className='w-9 h-9 bg-transparent rounded-full flex justify-center items-center duration-150 hover:bg-[rgb(229,234,241)] cursor-pointer'>
    //             <i className='bx bx-plus text-2xl text-gray-500' ></i>
    //           </button>
    //           <button className=' bg-transparent rounded-3xl px-3.5 py-2 flex justify-center items-center duration-150 hover:bg-[rgb(229,234,241)] cursor-pointer'>
    //             <i className="ri-earth-fill text-gray-500 mr-1.5"></i>
    //             <p className='text-sm text-gray-500'>Deep Research</p>
    //           </button>
    //           <button className=' bg-transparent rounded-3xl px-3.5 py-2 flex justify-center items-center duration-150 hover:bg-[rgb(229,234,241)] cursor-pointer'>
    //             <i className="ri-edit-box-line text-gray-500 mr-1.5"></i>
    //             <p className='text-sm text-gray-500'>Canvas</p>
    //           </button>
    //         </div>
    //         <div className='flex justify-center items-center absolute right-4'>
    //           {input?.length === 0 ? <button className='px-3 py-3'>
    //             <i className='bx bxs-microphone text-xl text-gray-500 '></i>
    //           </button> : <button className='px-3 py-3 bg-[rgb(229,234,241)] rounded-full flex justify-center items-center duration-150 hover:bg-[rgb(209,209,209)] cursor-pointer transition-all' onClick={handleSendBtn}>
    //             <i className='bx bxs-send'></i>
    //           </button>}

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <Sidebar />
      <Header />

      <div className={`flex flex-col w-screen h-screen ${extended ? 'pl-14' : 'pl-10'}`}>

        {/* Messages Area */}
        <div className="result-div flex-1 overflow-y-auto mt-20 px-6 py-8">
          {!showResult ? (
            <div className="text-transparent bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-4xl font-semibold text-center mt-20">
              Hello, Developer <br /> How can I assist you today?
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6">
              {/* User Prompt */}
              <div className="w-3/5 flex items-center gap-4">
                <img
                  src="https://img.freepik.com/premium-photo/very-cute-kid-caracter-animation-pixar-style_950002-73827.jpg?w=360"
                  className="w-12 h-12 object-cover rounded-full"
                  alt="user"
                />
                <p className="text-sm">{recentPrompt}</p>
              </div>

              {/* Gemini Response */}
              <div className="w-3/5 flex items-start gap-4">
                <img src={geminiLogo} className="w-10 h-10 object-cover" alt="gemini" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p
                    dangerouslySetInnerHTML={{ __html: resultData }}
                    className="text-sm leading-6.5"
                  ></p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Input Box */}
        <div className="w-full px-6 py-4 bg-white">
          <div className="w-3/5 mx-auto flex flex-col gap-3 rounded-3xl border border-gray-400 px-4 pt-4 pb-3">
            {/* Input */}
            <div className="w-full">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Gemini"
                className="outline-none w-full"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center flex-wrap">
              {/* Left Buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                <button className="w-9 h-9 bg-transparent rounded-full flex justify-center items-center hover:bg-gray-200 duration-150">
                  <i className="bx bx-plus text-2xl text-gray-500"></i>
                </button>
                <button className="bg-transparent rounded-3xl px-3.5 py-2 flex items-center hover:bg-gray-200 duration-150">
                  <i className="ri-earth-fill text-gray-500 mr-1.5"></i>
                  <p className="text-sm text-gray-500">Deep Research</p>
                </button>
                <button className="bg-transparent rounded-3xl px-3.5 py-2 flex items-center hover:bg-gray-200 duration-150">
                  <i className="ri-edit-box-line text-gray-500 mr-1.5"></i>
                  <p className="text-sm text-gray-500">Canvas</p>
                </button>
              </div>

              {/* Right Button */}
              <div>
                {input?.length === 0 ? (
                  <button className="px-3 py-3">
                    <i className="bx bxs-microphone text-xl text-gray-500"></i>
                  </button>
                ) : (
                  <button
                    className="px-3 py-3 bg-gray-200 rounded-full hover:bg-gray-300 duration-150"
                    onClick={handleSendBtn}
                  >
                    <i className="bx bxs-send"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
