import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import { Heading } from "#src/components/Heading.tsx";
import { PageLayout } from "#src/components/PageLayout.tsx";

const markdownText = `---
description: test
---

## big text

Look, it's working. _This is in italics._

      `;

interface Page {
  markdown: string;
  data: Record<string, unknown>;
}

export const handler: Handlers<Page> = {
  async GET(_req, ctx) {
    let rawMarkdown = "";

    switch (ctx.params.slug) {
      case "remote": {
        const resp = await fetch(
          `https://raw.githubusercontent.com/denoland/fresh/main/docs/latest/introduction/index.md`,
        );
        if (resp.status !== 200) {
          return ctx.render(undefined);
        }
        rawMarkdown = await resp.text();
        break;
      }
      case "string": {
        rawMarkdown = markdownText;
        break;
      }
      case "file": {
        rawMarkdown = await Deno.readTextFile("text.md");
        break;
      }
      default: {
        return ctx.render(undefined);
      }
    }

    const { attrs, body } = extract(rawMarkdown);
    return ctx.render({ markdown: body, data: attrs });
  },
};

export default function MarkdownPage({ data }: PageProps<Page | null>) {
  if (!data) {
    return <h1>File not found.</h1>;
  }

  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main>
        <PageLayout>
          <Heading variant="h1" text={"Markdown"}></Heading>
          <div class="mt-4">
            <div>{JSON.stringify(data.data)}</div>
            <div
              class="markdown-body"
              dangerouslySetInnerHTML={{ __html: render(data?.markdown) }}
            />
          </div>
        </PageLayout>
      </main>
    </>
  );
}
