import { defineRoute } from "$fresh/server.ts";
import { Link } from "#src/components/Link.tsx";
import { MapIsland } from "#src/islands/MapIsland.tsx";

export default defineRoute(async (_req, _ctx) => {
  return (
    <>
      <div>
        <MapIsland />
      </div>
      <div class="mt-4">
        <Link text="Back" href="/" color="secondary" />
      </div>
    </>
  );
});
