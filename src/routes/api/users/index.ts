import { Handlers } from "$fresh/server.ts";
import { kv } from "#src/services/database.ts";
import type { User } from "#src/shared/api.ts";

export const handler: Handlers<User | null> = {
  async POST(req, _ctx) {
    const user = (await req.json()) as User;
    const userKey = ["user", user.id];

    const ok = await kv.atomic().set(userKey, user).commit();
    if (!ok) throw new Error("Something went wrong.");

    return new Response(JSON.stringify(user));
  },
};
