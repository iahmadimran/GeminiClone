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
    <>
      <Sidebar />
      <Header />

      <div className={`flex main flex-col w-screen h-screen ${extended ? 'pl-20' : 'pl-10'}`}>

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
