import fetch from "node-fetch";

export async function askGemini(prompt) {
  const r = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  const j = await r.json();
  return j.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
}
