import { Handlers, PageProps, RouteConfig } from "$fresh/server.ts";
import { useCSP } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { Link } from "#src/components/Link.tsx";
import Counter from "#src/islands/Counter.tsx";

const nameList = ["Alice", "Bob", "Charlie", "David", "Eve"];

export const handler: Handlers<unknown, { data: string }> = {
  GET(_req, ctx) {
    return ctx.render(ctx.state.data);
  },
};

export default function Home({ data }: PageProps<string>) {
  const name = nameList[Math.floor(Math.random() * 5)];
  const count = useSignal(0);

  useCSP((csp) => {
    const baseUrl = Deno.env.get("DENO_ENV") === "development"
      ? "http://localhost:8000"
      : Deno.env.get("DENO_ENV") === "preview"
      ? "https://nyaomaru-deno-sample--*.deno.dev"
      : "https://nyaomaru-deno-sample*.deno.dev";

    if (!csp.directives.styleSrc) {
      csp.directives.styleSrc = [];
    }
    if (!csp.directives.imgSrc) {
      csp.directives.imgSrc = [];
    }
    if (!csp.directives.scriptSrc) {
      csp.directives.scriptSrc = [];
    }
    csp.directives.styleSrc.push(`${baseUrl}/styles.css`);
    csp.directives.imgSrc.push(`${baseUrl}/logo.svg`);
    csp.directives.scriptSrc.push(baseUrl);

    console.log("DENO_DEPLOY_ID", Deno.env.get("DENO_DEPLOYMENT_ID"));
  });

  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <img
        class="my-6"
        src="/logo.svg"
        width="128"
        height="128"
        alt="the Fresh logo: a sliced lemon dripping with juice"
      />
      <div class="my-4 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">Nyaomaru Deno Sample</h1>
        <p class="my-4">
          I am a cat being!!
        </p>
      </div>

      <div class="my-4 flex flex-col items-center justify-center">
        <h2 class="text-2xl font-bold">Counter</h2>
        <div class="my-4">
          <Counter count={count}>
            <p class="mt-4">This text is rendered on the server</p>
          </Counter>
        </div>
      </div>

      <div class="my-4 flex flex-col items-center justify-center">
        <h2 class="text-2xl font-bold">Page Buttons</h2>
        <div class="my-4 flex gap-4">
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
          <Link text="CSP" href="correctCSPwithReport" />
        </div>
        <div class="my-4 flex gap-4">
          <Link
            text="Map"
            href="map"
          />
        </div>
      </div>

      <p class="my-4">
        Server response data: <span id="data">{data}</span>
      </p>
    </div>
  );
}

export const config: RouteConfig = {
  csp: true,
};
