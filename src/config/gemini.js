import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

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
