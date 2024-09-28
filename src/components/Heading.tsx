import { JSX } from "preact";

type HeadingProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
} & JSX.HTMLAttributes<HTMLHeadingElement>;

export function Heading({ variant, text, ...props }: HeadingProps) {
  if (variant === "h1") {
    return (
      <h1 {...props} class="text-5xl font-bold text-gray-800">
        {text}
      </h1>
    );
  }

  if (variant === "h2") {
    return (
      <h2 {...props} class="text-3xl font-semibold text-gray-800">
        {text}
      </h2>
    );
  }

  if (variant === "h3") {
    return (
      <h3 {...props} class="text-2xl">
        {text}
      </h3>
    );
  }

  if (variant === "h4") {
    return (
      <h4 {...props} class="text-xl">
        {text}
      </h4>
    );
  }

  if (variant === "h5") {
    return (
      <h5 {...props}>
        {text}
      </h5>
    );
  }

  if (variant === "h6") {
    return (
      <h6 {...props}>
        {text}
      </h6>
    );
  }

  return <div></div>;
}
