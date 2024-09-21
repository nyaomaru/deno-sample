import { JSX } from "preact";
import { Link } from "#src/components/Link.tsx";

export function PageLayout(props: JSX.HTMLAttributes) {
  return (
    <div class="bg-gray-100 p-2">
      {props.children}
      <div class="mt-4 mb-4">
        <Link text="Back" href="/" color="secondary" />
      </div>
    </div>
  );
}
