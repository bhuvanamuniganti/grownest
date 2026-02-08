import 'dotenv/config';
import fetch from 'node-fetch';

async function test() {
  const res = await fetch(
    'https://generativelanguage.googleapis.com/v1/models/text-bison-001:generateText',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        prompt: {
          text: 'Say hello in one simple sentence',
        },
        temperature: 0.7,
        maxOutputTokens: 64,
      }),
    }
  );

  console.log('STATUS:', res.status);
  console.log('HEADERS:', Object.fromEntries(res.headers));

  const rawText = await res.text();
  console.log('\nRAW RESPONSE 👇');
  console.log(rawText);

  
  if (rawText.trim().startsWith('{')) {
    const data = JSON.parse(rawText);
    console.log('\nPARSED TEXT OUTPUT 👇');
    console.log(data.candidates?.[0]?.output);
  }
}

test();
