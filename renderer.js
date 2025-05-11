

window.onload = () => {
  document.getElementById('query').focus();
};

import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai";

const ai = new GoogleGenerativeAI(window.env.API_KEY);
async function main(promptText) {
  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(promptText);
  const response = await result.response;
  const text = await response.text();
  return text;
}

document.getElementById("input").addEventListener('click', async () => {
  const userQuery = document.getElementById("query").value;
  document.getElementById("output").innerHTML = "Thinking...";

  try {
    const geminiReply = await main(userQuery);
    document.getElementById("output").innerHTML = geminiReply;
  } catch (error) {
    document.getElementById("output").innerHTML = "Error: " + error.message;
    console.error(error);
  }
});

