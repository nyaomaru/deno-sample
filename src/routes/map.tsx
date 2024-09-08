import { defineRoute } from "$fresh/server.ts";
import { PageLayout } from "#src/components/PageLayout.tsx";
import { MapIsland } from "#src/islands/MapIsland.tsx";

export default defineRoute((_req, _ctx) => {
  return (
    <PageLayout>
      <MapIsland />
    </PageLayout>
  );
});
