import { Handlers } from "$fresh/server.ts";
import { kv } from "#src/services/database.ts";
import type { User } from "#src/shared/api.ts";
import { getUserKey, statusCheck } from "#src/utils/api.ts";

export const handler: Handlers<User | null> = {
  async POST(req, _ctx) {
    const user = (await req.json()) as User;
    const userKey = getUserKey(user.id);

    const ok = await kv.atomic().set(userKey, user).commit();
    statusCheck(ok);

    return new Response(JSON.stringify(user));
  },
};
