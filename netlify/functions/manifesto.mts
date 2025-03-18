import type { Context } from "@netlify/functions";
import OpenAI from "openai";
const client = new OpenAI();

export default async (req: Request, context: Context) => {
  const body = await req.json();
  console.log(body);

  const openai_response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: [
      {
        role: "system",
        content: "Generate a dictatorial propaganda speech. It should be hilariously dramatic. Use capital words for emphasis. Do not use any markdown, only reply in plain text."
      },
      {
        role: "user",
        content: body.cause,
      },
    ],
  });

  return new Response(openai_response.toReadableStream(), {
    headers: {
      "Content-Type": "text/event-stream",
    },
  });
}
