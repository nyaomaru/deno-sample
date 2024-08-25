import { RouteConfig, RouteContext } from "$fresh/server.ts";
import { useCSP } from "$fresh/runtime.ts";

export default function Home(req: Request, ctx: RouteContext) {
  useCSP((csp) => {
    csp.reportOnly = true;
    if (!csp.directives.styleSrc) {
      csp.directives.styleSrc = [];
    }
    csp.directives.reportUri = "http://localhost:8000/reportHandler";
    csp.directives.styleSrc.push("http://www.example.com");
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
