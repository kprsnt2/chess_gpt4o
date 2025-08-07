// api/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Give a fun and educational chess tip for kids using vehicle metaphors (like scooters for pawns, train for king, helicopter for queen). Keep it short and exciting.`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    res.status(200).json({ tip: text });
  } catch (error) {
    res.status(500).json({ tip: "Oops! Gemini didn't respond." });
  }
}
