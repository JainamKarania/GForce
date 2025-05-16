const GEMINI_API_KEY = "AIzaSyAkU-SIgmlnTeMETv_gxajd9LKTS3YxsD8";

// To run this code you need to install the following dependencies:
// npm install @google/genai mime dotenv

import { 
    GoogleGenAI 
 } from '@google/genai'; // Optional: if using .env file

async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY, // Make sure GEMINI_API_KEY is set in your environment
  });

  const config = {
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-1.5-flash';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt, // Replace this with your actual prompt
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

// main().catch(console.error);

export default main;