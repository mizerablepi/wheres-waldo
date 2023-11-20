import { useParams } from "react-router-dom";
import space from "./assets/spaceMap.jpg";
import laundry from "./assets/laundryMap.jpg";
import { useEffect, useRef, useState } from "react";
import ChoiceMenu from "./ChoiceMenu";
import Stopwatch from "./Stopwatch";
import { getCharacterList } from "./utility";
import UserModal from "./UsernameModal";

const Map = () => {
  const [clicked, setClicked] = useState(false);
  const [clockStarted, setClockStarted] = useState(null);
  const [charactersFound, setCharactersFound] = useState(0);
  const [score, setScore] = useState(0);
  const [list, setList] = useState(["Loading data..."]);

  const position = useRef({ x: 0, y: 0 });

  const { name } = useParams();

  let mapSrc;
  useEffect(() => {
    getCharacterList(name).then((res) => setList(res));
    window.addEventListener("resize", () => {
      setClicked(false);
    });
  }, [name]);

  if (name == "Laundry") {
    mapSrc = laundry;
  } else {
    mapSrc = space;
  }

  return (
    list[0] != "Loading data..." && (
      <div>
        <UserModal score={score} />
        <Stopwatch
          clockStarted={clockStarted}
          charactersFound={charactersFound}
          numberOfCharacters={list.length}
        />
        <div className="relative overflow-hidden">
          <img
            onLoad={() => {
              setClockStarted(true);
            }}
            src={mapSrc}
            alt="Map image"
            className="w-screen"
            onClick={(e) => {
              position.current.xNormalised =
                e.pageX / e.currentTarget.getBoundingClientRect().width;
              position.current.yNormalised =
                (e.pageY - 120) /
                e.currentTarget.getBoundingClientRect().height;

              position.current.x = e.pageX;
              position.current.y = e.pageY - 120;

              clicked == false ? setClicked(true) : setClicked(false);
            }}
          />
          {clicked && (
            <ChoiceMenu
              mouseposition={position.current}
              characterList={list}
              setParentClicked={setClicked}
              name={name}
              setClockStarted={setClockStarted}
              setCharactersFound={setCharactersFound}
              map={name}
              setScore={setScore}
            />
          )}
        </div>
      </div>
    )
  );
};

export default Map;
