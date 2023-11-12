import { useParams } from "react-router-dom";
import space from "./assets/spaceMap.jpg";
import laundry from "./assets/laundryMap.jpg";
import { useEffect, useRef, useState } from "react";
import ChoiceMenu from "./ChoiceMenu";
import Stopwatch from "./Stopwatch";
import { getCharacterList } from "./utility";

const Map = () => {
  const [clicked, setClicked] = useState(false);
  const [clockStarted, setClockStarted] = useState(null);
  const [charactersFound, setCharactersFound] = useState(0);

  const position = useRef({ x: 0, y: 0 });
  let list = useRef();

  const { name } = useParams();

  let mapSrc;
  useEffect(() => {
    getCharacterList().then((res) => (list.current = res));
    window.addEventListener("resize", () => {
      setClicked(false);
    });
  }, []);

  if (name == "Laundry") {
    mapSrc = laundry;
  } else {
    mapSrc = space;
  }

  return (
    <div>
      <Stopwatch
        clockStarted={clockStarted}
        charactersFound={charactersFound}
      />
      <div className="relative overflow-x-hidden">
        <img
          onLoad={() => {
            setClockStarted(true);
          }}
          src={mapSrc}
          alt="Map image"
          className="w-screen"
          onClick={(e) => {
            position.current.x = e.pageX;
            position.current.y = e.pageY - 120;
            clicked == false ? setClicked(true) : setClicked(false);
          }}
        />
        {clicked && (
          <ChoiceMenu
            mouseposition={position.current}
            characterList={list.current}
            setParentClicked={setClicked}
            name={name}
            setClockStarted={setClockStarted}
            setCharactersFound={setCharactersFound}
          />
        )}
      </div>
    </div>
  );
};

export default Map;
