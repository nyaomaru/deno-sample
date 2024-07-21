import { PageProps, RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};

export default function GreetPage(props: PageProps) {
  const { name } = props.params;

  return (
    <main>
      <p>Greetings to you, {name}!</p>
      <p>
        This page is <em>not</em>{" "}
        applied layout because I want to check ignore layout config.
      </p>
    </main>
  );
}
