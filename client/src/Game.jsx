import MapCard from "./MapCard";
import laundryMap from "./assets/laundryMap.jpg";
import spaceMap from "./assets/spaceMap.jpg";

export default function Game() {
  return (
    <div id="play" className="flex min-h-[calc(100vh-80px)]">
      <div className="bg-[rgba(0,0,0,0.7)] w-full flex justify-center items-start gap-8 p-10 ">
        <MapCard imageSrc={laundryMap} mapName={"Laundry"} />
        <MapCard imageSrc={spaceMap} mapName={"Space"} />
      </div>
    </div>
  );
}
