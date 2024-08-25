import { Handlers, PageProps, RouteContext } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import NextContentButton from "../islands/NextContentButton.tsx";
import { Link } from "../components/Link.tsx";

const loadFooValue = async () => {
  return "nyaomaru";
};

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default async function AboutPage(props: PageProps, ctx: RouteContext) {
  const value = await loadFooValue();

  if (value === null) {
    return ctx.renderNotFound();
  }

  if (value === "redirect") {
    const headers = new Headers();
    headers.set("location", "/search");
    return new Response(null, {
      status: 302,
      headers,
    });
  }

  return (
    <>
      <main f-client-nav>
        <h1 class="text-4xl font-bold">About</h1>
        <p>This is the about page.</p>
        <Partial name="about-content">
          <div>You are on the page '{props.url.href}'.</div>
          <p>foo is: {value}</p>
        </Partial>
        <div class="mt-8">
          <NextContentButton name="Next Content" />
        </div>
      </main>
      <div class="mt-8">
        <Link text="Back" href="/" color="secondary" />
      </div>
    </>
  );
}
