import { Head } from "$fresh/runtime.ts";
import { PageProps, RouteConfig } from "$fresh/server.ts";
import { Heading } from "#src/components/Heading.tsx";
import { PageLayout } from "#src/components/PageLayout.tsx";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};

export default function GreetPage(props: PageProps) {
  const { name } = props.params;

  return (
    <>
      <Head>
        <title>Meow</title>
      </Head>
      <main>
        <PageLayout>
          <Heading variant="h1" text={`Greetings to you, ${name}!`}></Heading>
          <p>
            This page is <em>not</em>{" "}
            applied layout because I want to check ignore layout config.
          </p>
        </PageLayout>
      </main>
    </>
  );
}
