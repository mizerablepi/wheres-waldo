import { Link } from "react-router-dom";

const MapCard = ({ imageSrc, mapName }) => {
  return (
    <div
      className="border-4 border-black rounded-lg bg-blue-600 p-1 border-double flex flex-col items-center
    "
    >
      <img
        src={imageSrc}
        alt={mapName}
        className="h-[15rem] w-[15rem] object-cover"
      />
      <hr />
      <h3 className="font-bold text-xl text-gray-200 mb-4">{mapName}</h3>
      <Link to={`${mapName}`}>
        <button className="text-white bg-red-600 font-bold px-4 py-2 rounded-md mb-2">
          Play
        </button>
      </Link>
    </div>
  );
};

export default MapCard;
