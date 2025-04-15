import { createContext, useState, useEffect, useContext } from "react";
import getGeminiResponse from "../config/gemini";

const GeminiContext = createContext()

export const useGeminiContext = () => {
  return useContext(GeminiContext)
}

export const GeminiProvider = ({ children }) => {
  const [input, setInput] = useState('')
  const [recentPrompt, setRecentPrompt] = useState("What's the best food in town?")
  const [prevPrompts, setPrevPrompts] = useState(() => {
    return JSON.parse(localStorage.getItem('previous')) || [];
  })
  const [loading, setLoading] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [resultData, setResultData] = useState('')
  const [extended, setExtended] = useState(false);

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord)
    }, 200)
  }


  useEffect(() => {
    localStorage.setItem('previous', JSON.stringify(prevPrompts))
  }, [prevPrompts])


  const onSent = async (prompt) => {
    setLoading(true)
    setResultData("")
    setRecentPrompt(input)
    setShowResult(true)
    setPrevPrompts(prev => [...prev, input])
    try {
      const response = await getGeminiResponse(input)
      let responseArray = response.split("**");
      let newResponse;
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }
      let newResponse2 = newResponse.split("*").join("</br>");
      let newResponseArray = newResponse2.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord + " ")
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setResultData("Error generating response. Please try again.");
    } finally {
      setLoading(false);
      setInput("");
    }
  }


  const values = {
    input,
    setInput,
    extended,
    setExtended,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    loading,
    setLoading,
    onSent,
    showResult,
    setShowResult,
    resultData,
    setResultData
  }

  return (
    <GeminiContext.Provider value={values}>
      {children}
    </GeminiContext.Provider>
  )
}