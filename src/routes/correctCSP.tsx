import { RouteConfig, RouteContext } from "$fresh/server.ts";
import { useCSP } from "$fresh/runtime.ts";

export default function Home(req: Request, ctx: RouteContext) {
  useCSP((csp) => {
    if (!csp.directives.styleSrc) {
      csp.directives.styleSrc = [];
    }
    csp.directives.styleSrc.push("http://localhost:8000/example.css");
  });
  return (
    <>
      <h1>This page adheres to our configured CSP. Styles will be applied.</h1>
      <link rel="stylesheet" type="text/css" href="example.css" />
    </>
  );
}

export const config: RouteConfig = {
  csp: true,
};
