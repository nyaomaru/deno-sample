import { MapComponent } from "#src/components/MapComponent.tsx";
import { LeafletProvider } from "#src/providers/LeafletProvider.tsx";

export function MapIsland() {
  return (
    <LeafletProvider>
      <MapComponent />
    </LeafletProvider>
  );
}
