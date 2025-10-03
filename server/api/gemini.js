const{ GoogleGenAI } =  require("@google/genai");

const ai = new GoogleGenAI({ apiKey: "AIzaSyBXuI-G4QVwhLa-a6rkDRvraJTAl0cxz0s" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how ai works in one line",
  });
  console.log(response.text);
}

main();