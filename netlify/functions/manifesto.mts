import type { Context } from "@netlify/functions";
import OpenAI from "openai";
const client = new OpenAI();

export default async (req: Request, context: Context) => {
  const body = await req.json();

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Generate a dictatorial propaganda speech. It should be excessively (and hilariously) dramatic. Use capital words for emphasis."
      },
      {
        role: "user",
        content: body.cause,
      },
    ],
  });

  const response = completion.choices[0].message.content;
  console.log(response);
  return new Response(JSON.stringify({ manifesto: response }), {
    headers: { "Content-Type": "application/json" }
  });
}
