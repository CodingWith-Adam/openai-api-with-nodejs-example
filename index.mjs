import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

const chatCompletion = await openai.chat.completions.create({
  messages: [{ role: "user", content: "What is 5+2?" }],
  model: "gpt-4o",
});

console.log(chatCompletion.choices[0]);
