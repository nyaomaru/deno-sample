import { FreshContext } from "$fresh/server.ts";

export const handler = {
  async POST(req: Request, _ctx: FreshContext) {
    const body = await req.json();
    const report = JSON.stringify(body, null, 2);

    await Deno.writeTextFile("./csp-reports.txt", report + "\n", {
      append: true,
    });
    return new Response(null, { status: 200 });
  },
};
