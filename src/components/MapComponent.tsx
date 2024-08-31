import { useContext, useEffect } from "preact/hooks";
import { LeafletContext } from "#src/providers/LeafletProvider.tsx";

export function MapComponent() {
  const leaf = useContext(LeafletContext);
  if (!leaf) return <div>Component placeholder</div>;
  useEffect(() => {
    const map = leaf.map("map").setView(leaf.latLng(0, 0), 2);
    leaf.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  });
  return <div id="map" class="relative w-[80vw] h-[50vh]" />;
}
