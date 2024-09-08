import { JSX } from "preact";
import { Link } from "#src/components/Link.tsx";

export function PageLayout(props: JSX.HTMLAttributes) {
  return (
    <div>
      {props.children}
      <div class="mt-4">
        <Link text="Back" href="/" color="secondary" />
      </div>
    </div>
  );
}
