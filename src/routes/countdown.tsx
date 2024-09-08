import { defineRoute } from "$fresh/server.ts";
import Countdown from "#src/islands/Countdown.tsx";
import { PageLayout } from "#src/components/PageLayout.tsx";

export default defineRoute((_req, _ctx) => {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <PageLayout>
      <article class="prose lg:prose-xl">
        <p>
          The big event is happening <Countdown target={date.toISOString()} />.
        </p>
      </article>
    </PageLayout>
  );
});
