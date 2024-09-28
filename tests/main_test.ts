import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";
import manifest from "../src/fresh.gen.ts";
import config from "../src/fresh.config.ts";
import * as modAssertEqual from "https://deno.land/std@0.224.0/assert/assert_equals.ts";
import * as modAssert from "https://deno.land/std@0.224.0/assert/assert.ts";

const CONN_INFO: ServeHandlerInfo = {
  remoteAddr: { hostname: "127.0.0.1", port: 8000, transport: "tcp" },
};

const verifyPageContainsText = async (
  handler: (req: Request, connInfo?: ServeHandlerInfo) => Promise<Response>,
  pageUrl: string,
  expectedText: string,
) => {
  const resp = await handler(
    new Request(`http://127.0.0.1/${pageUrl}`),
    CONN_INFO,
  );
  const text = await resp.text();
  modAssert.assert(text.includes(expectedText));
};

Deno.test("HTTP assert test.", async (t) => {
  const handler = await createHandler(manifest, config);

  await t.step("#1 GET /", async () => {
    const resp = await handler(new Request("http://127.0.0.1/"), CONN_INFO);
    modAssertEqual.assertEquals(resp.status, 200);
  });

  await t.step("#2 GET /about", async () => {
    await verifyPageContainsText(handler, "about", "This is the about page.");
  });

  await t.step("#3 GET /404", async () => {
    await verifyPageContainsText(handler, "404", "404 - Page not found");
  });

  await t.step("#4 GET /chart", async () => {
    await verifyPageContainsText(handler, "chart", "Chart");
  });

  await t.step("#5 GET /countdown", async () => {
    await verifyPageContainsText(
      handler,
      "countdown",
      "The big event is happening",
    );
  });

  await t.step("#6 GET /map", async () => {
    await verifyPageContainsText(handler, "map", "Map");
  });

  await t.step("#7 GET /search", async () => {
    await verifyPageContainsText(handler, "search", "Search");
  });

  await t.step("#8 GET /greet", async () => {
    await verifyPageContainsText(handler, "greet/test", "test");
  });

  await t.step("#9 GET /markdown", async () => {
    await verifyPageContainsText(handler, "markdowns/string", "Markdown");
  });

  await t.step("#10 GET /project", async () => {
    await verifyPageContainsText(handler, "projects/1", "Project 1");
  });
});
