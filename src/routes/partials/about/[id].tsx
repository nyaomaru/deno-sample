import { defineRoute, RouteConfig } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
import { Heading } from "#src/components/Heading.tsx";

const contents = [
  "This is the documentation page. It should contain all the \n information you need to get started with the project.",
  "bla bla bla",
];

const loadContent = (id: string) => {
  const currentContent = contents[Number(id) % 2];

  return (
    <article class="prose lg:prose-xl">
      <Heading variant="h2" text={`Documentation: ${id}`}></Heading>
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

export default defineRoute((_req, ctx) => {
  const content = loadContent(ctx.params.id);

  return (
    <Partial name="about-content">
      {content}
    </Partial>
  );
});
