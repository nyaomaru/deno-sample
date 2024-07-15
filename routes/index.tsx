import { useSignal } from "@preact/signals";
import { Link } from "../components/Link.tsx";
import Counter from "../islands/Counter.tsx";

const nameList = ["Alice", "Bob", "Charlie", "David", "Eve"];

export default function Home() {
  const count = useSignal(3);
  const name = nameList[Math.floor(Math.random() * 5)];

  return (
    <div class="px-4 py-8 mx-auto bg-cyan-300 h-screen">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Nyaomaru Deno Sample</h1>
        <p class="my-4">
          I am a cat being!!
        </p>
        <Counter count={count} />
        <div class="my-4">
          <Link text="Go About Page" href="about" />
          <Link text="Go Greet Page" href={`greet/${name}`} />
          <Link text="Go Search Page" href="search" />
          <Link text="Go Countdown Page" href="countdown" />
        </div>
      </div>
    </div>
  );
}
