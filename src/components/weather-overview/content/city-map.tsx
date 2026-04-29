import { Map, MapControls } from "@/components/ui/map";
import { Card } from "@/components/ui/card";

type Props = {
  coords: [number, number];
};

export default function CityMap({ coords }: Props) {
  return (
    <Card className="w-[400px] h-[520px] p-0 overflow-hidden">
      <Map key={coords.join(",")} center={coords} zoom={10}>
        <MapControls
          position="top-right"
          showLocate
          className="text-gray-300 bg-black"
        />
      </Map>
    </Card>
  );
}
