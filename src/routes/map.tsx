import { defineRoute } from "$fresh/server.ts";
import { Heading } from "#src/components/Heading.tsx";
import { PageLayout } from "#src/components/PageLayout.tsx";
import { MapIsland } from "#src/islands/MapIsland.tsx";

export default defineRoute((_req, _ctx) => {
  return (
    <PageLayout>
      <Heading variant="h1" text={"Map"}></Heading>
      <div class="mt-4">
        <MapIsland />
      </div>
    </PageLayout>
  );
});
