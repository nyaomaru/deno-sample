import { Handlers } from "$fresh/server.ts";
import { kv } from "#src/services/database.ts";
import type { User } from "#src/shared/api.ts";
import { getUserKey, handleUserNotFound, statusCheck } from "#src/utils/api.ts";

export const handler: Handlers<User | null> = {
  async GET(_req, ctx) {
    const id = ctx.params.id;
    const user = (await kv.get<User>(getUserKey(id))).value;
    return user ? new Response(JSON.stringify(user)) : handleUserNotFound(id);
  },

  async PUT(req, ctx) {
    const id = ctx.params.id;
    const user = (await req.json()) as User;
    const userKey = getUserKey(id);

    const userRes = await kv.get(userKey);
    if (!userRes.value) return handleUserNotFound(id);

    const ok = await kv.atomic().check(userRes).set(userKey, user).commit();
    statusCheck(ok);

    return new Response(JSON.stringify(user));
  },

  async DELETE(_req, ctx) {
    const id = ctx.params.id;
    const userKey = getUserKey(id);

    const userRes = await kv.get(userKey);
    if (!userRes.value) return handleUserNotFound(id);

    const ok = await kv.atomic().check(userRes).delete(userKey).commit();
    statusCheck(ok);

    return new Response(`User ${id} deleted`);
  },
};
