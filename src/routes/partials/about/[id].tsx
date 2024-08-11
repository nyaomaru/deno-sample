import { defineRoute, RouteConfig } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";

const contents = [
  "This is the documentation page. It should contain all the \n information you need to get started with the project.",
  "bla bla bla",
];

const loadContent = async (id: string) => {
  const currentContent = contents[Number(id) % 2];

  return (
    <article class="prose lg:prose-xl">
      <h1>Documentation: {id}</h1>
      <p>
        {currentContent}
      </p>
    </article>
  );
};

export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default defineRoute(async (req, ctx) => {
  const content = await loadContent(ctx.params.id);

  return (
    <Partial name="about-content">
      {content}
    </Partial>
  );
});
