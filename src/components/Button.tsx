import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type ButtonProps = {
  color?: "primary" | "secondary";
} & JSX.HTMLAttributes<HTMLButtonElement>;

export function Button(
  { color = "primary", ...props }: ButtonProps,
) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`px-2 py-1 border-2 rounded ${
        color === "primary"
          ? "bg-black text-white hover:text-black"
          : "bg-white border-gray-500"
      } hover:bg-gray-200 transition-colors`}
    />
  );
}
