import { Head } from "$fresh/runtime.ts";
import { PageProps, RouteConfig } from "$fresh/server.ts";
import { Link } from "../../components/Link.tsx";

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
        <h1 class="text-4xl font-bold">Greetings to you, {name}!</h1>
        <p>
          This page is <em>not</em>{" "}
          applied layout because I want to check ignore layout config.
        </p>
        <div class="mt-4">
          <Link text="Back" href="/" color="secondary" />
        </div>
      </main>
    </>
  );
}
