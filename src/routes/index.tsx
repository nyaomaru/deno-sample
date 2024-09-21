import { Handlers, PageProps, RouteConfig } from "$fresh/server.ts";
import { type ContentSecurityPolicy, useCSP } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { Link } from "#src/components/Link.tsx";
import Counter from "#src/islands/Counter.tsx";

const nameList = ["Alice", "Bob", "Charlie", "David", "Eve"];

const DOMAIN = {
  DEVELOPMENT: "http://localhost:8000",
  PRODUCTION: "https://nyaomaru-deno-sample.deno.dev",
};

const addCSPUrls = (csp: ContentSecurityPolicy, url: string) => {
  csp.directives.styleSrc?.push(`${url}/styles.css`);
  csp.directives.imgSrc?.push(`${url}/logo.svg`);
  csp.directives.scriptSrc?.push(url);
};

export const handler: Handlers<unknown, { data: string }> = {
  GET(_req, ctx) {
    return ctx.render(ctx.state.data);
  },
};

export default function Home({ data }: PageProps<string>) {
  const name = nameList[Math.floor(Math.random() * nameList.length)];
  const count = useSignal(0);

  useCSP((csp) => {
    csp.reportOnly = true;
    if (!csp.directives.styleSrc) {
      csp.directives.styleSrc = [];
    }
    if (!csp.directives.imgSrc) {
      csp.directives.imgSrc = [];
    }
    if (!csp.directives.scriptSrc) {
      csp.directives.scriptSrc = [];
    }
    const baseUrl = Deno.env.get("DENO_ENV") === "development"
      ? DOMAIN.DEVELOPMENT
      : DOMAIN.PRODUCTION;

    addCSPUrls(csp, baseUrl);

    const previewUrl = `https://nyaomaru-deno-sample-${
      Deno.env.get("DENO_DEPLOYMENT_ID")
    }.deno.dev`;

    addCSPUrls(csp, previewUrl);
  });

  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header class="flex flex-col items-center mt-10">
        <img
          class="mb-6 w-32 h-32"
          src="/logo.svg"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-5xl font-bold text-gray-800">Nyaomaru Deno Sample</h1>
        <p class="mt-4 text-lg text-gray-600">I am a cat being!!</p>
      </header>

      <main class="my-10">
        <section class="mb-10">
          <h2 class="text-3xl font-semibold text-gray-800 text-center">
            Counter
          </h2>
          <div class="mt-6 flex flex-col items-center">
            <Counter count={count}>
              <p class="mt-4 text-gray-700">
                This text is rendered on the server
              </p>
            </Counter>
          </div>
        </section>

        <section class="mb-10">
          <h2 class="text-3xl font-semibold text-gray-800 text-center">
            Page Buttons
          </h2>
          <div class="mt-6 flex flex-wrap justify-center gap-4">
            <Link text="About" href="about" />
            <Link text="Greet" href={`greet/${name}`} />
            <Link text="Search" href="search" />
            <Link text="Countdown" href="countdown" />
          </div>
          <div class="my-4 flex gap-4">
            <Link
              text="Projects"
              href={`projects/${Math.round(Math.random()) + 1}`}
            />
            <Link text="Chart" href="chart" />
            <Link text="Markdown" href="markdowns/string" />
            <Link text="Map" href="map" />
          </div>
        </section>
      </main>

      <footer class="my-10 text-gray-600">
        Server response data: <span id="data">{data}</span>
      </footer>
    </div>
  );
}

export const config: RouteConfig = {
  csp: true,
};
