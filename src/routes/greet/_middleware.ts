import { FreshContext } from "$fresh/server.ts";

export async function handler(_req: Request, ctx: FreshContext) {
  const currentName = ctx.params.name;
  if (currentName === "Bob") {
    ctx.params.name = "super-bob";
  }
  const resp = await ctx.next();
  return resp;
}
