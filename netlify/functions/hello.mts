import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const body = await req.json();
  const response = {
    message: body.cause
  };
  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" }
  });
}
