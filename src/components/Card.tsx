import { JSX } from "preact";

export function Card(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white border-gray-400 ">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.title}</div>
        <div class="mt-4">{props.children}</div>
      </div>
    </div>
  );
}
