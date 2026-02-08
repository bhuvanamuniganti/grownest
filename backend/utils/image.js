const fetch = require("node-fetch");

async function generateImage(prompt) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/imagen-2:generateImages?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        numberOfImages: 1,
      }),
    }
  );

  const data = await res.json();
  return data.images[0].imageUri;
}

module.exports = { generateImage };
