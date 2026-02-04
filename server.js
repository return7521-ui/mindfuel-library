import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { askOpenAI } from "./adapters/openai.js";
import { askGemini } from "./adapters/gemini.js";
import { askClaude } from "./adapters/claude.js";
import { askFallback } from "./adapters/fallback.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/ask", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "No prompt" });

  const results = {};

  await Promise.allSettled([
    askOpenAI(prompt).then(r => results.ChatGPT = r),
    askGemini(prompt).then(r => results.Gemini = r),
    askClaude(prompt).then(r => results.Claude = r),
    askFallback(prompt).then(r => results.Fallback = r),
  ]);

  res.json(results);
});

app.listen(3000, () =>
  console.log("AI Arena backend running on port 3000")
);
