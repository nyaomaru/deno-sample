import { defineRoute } from "$fresh/server.ts";
import Countdown from "#src/islands/Countdown.tsx";
import { Link } from "#src/components/Link.tsx";

export default defineRoute((_req, _ctx) => {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <>
      <article class="prose lg:prose-xl">
        <p>
          The big event is happening <Countdown target={date.toISOString()} />.
        </p>
      </article>
      <div class="mt-4">
        <Link text="Back" href="/" color="secondary" />
      </div>
    </>
  );
});
