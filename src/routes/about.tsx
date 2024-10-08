import { Handlers, PageProps, RouteContext } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import NextContentButton from "#src/islands/NextContentButton.tsx";
import { Heading } from "#src/components/Heading.tsx";
import { PageLayout } from "#src/components/PageLayout.tsx";

const loadFooValue = () => {
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
    <PageLayout>
      <main f-client-nav>
        <Heading variant="h1" text={"About"}></Heading>
        <div class="mt-4">
          <p>This is the about page.</p>
          <Partial name="about-content">
            <div>You are on the page '{props.url.href}'.</div>
            <p>foo is: {value}</p>
          </Partial>
          <div class="mt-4 mb-8">
            <NextContentButton name="Next Content" />
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
