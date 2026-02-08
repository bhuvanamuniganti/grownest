import OpenAI from "openai";

const provider = process.env.AI_PROVIDER || "openai";

let openaiClient = null;

if (provider === "openai") {
  openaiClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

function gradeInstruction(grade) {
  if (grade <= 2) {
    return `
Use very simple words.
Explain using counting or real objects.
Maximum 3 short steps.
Do not use formulas.
`;
  }
  if (grade <= 4) {
    return `
Use simple steps.
Explain how the answer is found.
Maximum 4 steps.
Avoid complex terms.
`;
  }
  if (grade <= 6) {
    return `
Use proper school method.
Explain each step clearly.
You may use simple formulas.
`;
  }
  return `
Explain clearly using standard school method.
Keep language parent-friendly.
`;
}

export async function generateExplanation({ grade, subject, question }) {
  const gradeRule = gradeInstruction(Number(grade));

  const response = await openaiClient.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
You help parents explain school questions calmly.
No stories. No pressure. School-aligned answers only.

${gradeRule}
        `,
      },
      {
        role: "user",
        content: `
Subject: ${subject}
Question: ${question}
        `,
      },
    ],
  });

  return response.choices[0].message.content;
}
