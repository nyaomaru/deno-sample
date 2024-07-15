import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <div class="px-4 py-8 mx-auto bg-cyan-300 h-screen">
        <p>Greetings to you, {name}!</p>
      </div>
    </main>
  );
}
