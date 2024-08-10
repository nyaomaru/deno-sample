import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";
import manifest from "../src/fresh.gen.ts";
import config from "../src/fresh.config.ts";
import * as modAssertEqual from "https://deno.land/std@0.224.0/assert/assert_equals.ts";
import * as modAssert from "https://deno.land/std@0.224.0/assert/assert.ts";

const CONN_INFO: ServeHandlerInfo = {
  remoteAddr: { hostname: "127.0.0.1", port: 8000, transport: "tcp" },
};

Deno.test("HTTP assert test.", async (t) => {
  const handler = await createHandler(manifest, config);

  await t.step("#1 GET /", async () => {
    const resp = await handler(new Request("http://127.0.0.1/"), CONN_INFO);
    modAssertEqual.assertEquals(resp.status, 200);
  });

  await t.step("#2 GET /about", async () => {
    const resp = await handler(
      new Request("http://127.0.0.1/about"),
      CONN_INFO,
    );
    const text = await resp.text();
    modAssert.assert(text.includes("This is the about page."));
  });

  await t.step("#3 GET /404", async () => {
    const resp = await handler(
      new Request("http://127.0.0.1/404"),
      CONN_INFO,
    );
    const text = await resp.text();
    modAssert.assert(text.includes("404 - Page not found"));
  });
});
