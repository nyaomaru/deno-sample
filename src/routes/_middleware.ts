import { FreshContext } from "$fresh/server.ts";

const HTTP_HEADER = {
  ACCESS_CONTROL_ALLOW_ORIGIN: "Access-Control-Allow-Origin",
  ACCESS_CONTROL_ALLOW_METHODS: "Access-Control-Allow-Methods",
  ACCESS_CONTROL_ALLOW_CREDENTIALS: "Access-Control-Allow-Credentials",
  ACCESS_CONTROL_ALLOW_HEADERS: "Access-Control-Allow-Headers",
};

const HTTP_METHOD = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
  OPTIONS: "OPTIONS",
};

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: FreshContext<State>,
) {
  if (req.method == HTTP_METHOD.OPTIONS) {
    const resp = new Response(null, {
      status: 204,
    });
    const origin = req.headers.get("Origin") || "*";
    const headers = resp.headers;
    headers.set(HTTP_HEADER.ACCESS_CONTROL_ALLOW_ORIGIN, origin);
    headers.set(HTTP_HEADER.ACCESS_CONTROL_ALLOW_METHODS, HTTP_METHOD.DELETE);
    return resp;
  }

  const origin = req.headers.get("Origin") || "*";
  ctx.state.data = "myData";
  const resp = await ctx.next();
  const headers = resp.headers;

  headers.set(HTTP_HEADER.ACCESS_CONTROL_ALLOW_ORIGIN, origin);
  headers.set(HTTP_HEADER.ACCESS_CONTROL_ALLOW_CREDENTIALS, "true");
  headers.set(
    HTTP_HEADER.ACCESS_CONTROL_ALLOW_HEADERS,
    "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
  );
  headers.set(
    HTTP_HEADER.ACCESS_CONTROL_ALLOW_METHODS,
    `${HTTP_METHOD.POST}, ${HTTP_METHOD.OPTIONS}, ${HTTP_METHOD.GET}, ${HTTP_METHOD.DELETE}, ${HTTP_METHOD.PUT}`,
  );

  resp.headers.set("server", "fresh server");
  return resp;
}
