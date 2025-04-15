import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDFF9ziF9rEVAAFOmJ_tjHTTFN7ff6yi-s" });

async function getGeminiResponse(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt.toString(),
    });
    console.log(response.text);
    return response.text;
  } catch (error) {
    console.log("Error generating content:", error);
  }

}

export default getGeminiResponse;
