import { useParams } from "react-router-dom";
import space from "./assets/spaceMap.jpg";
import laundry from "./assets/laundryMap.jpg";
import { useEffect, useRef, useState } from "react";
import { redirect } from "react-router-dom";
import ChoiceMenu from "./ChoiceMenu";
import Stopwatch from "./Stopwatch";
import { getCharacterList } from "./utility";

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
        <div
          className={`fixed w-screen h-screen flex flex-col justify-center items-center z-20 top-0 bg-black/50 ${
            score > 0 ? "block" : "hidden"
          }`}
        >
          <div className="font-bold text-white">
            Your Score is{" "}
            {Math.floor((score / 60000) % 60)
              .toString()
              .padStart(2, "0")}
            :
            {Math.floor((score / 1000) % 60)
              .toString()
              .padStart(2, "0")}
            :
            {Math.round((score % 1000) / 10)
              .toString()
              .padStart(2, "0")}
          </div>
          <form
            action={"http://localhost:3000/submit/" + name}
            className="flex flex-col mt-4"
            method="post"
            onSubmit={() => {
              redirect("/");
            }}
          >
            <input
              type="text"
              required
              minLength={1}
              placeholder="TEST"
              name="username"
              className="p-2 border-red-600 border"
            />
            <button
              type="submit"
              className="text-white font-bold bg-blue-600 mt-2 self-center px-4 py-2 rounded"
            >
              SUBMIT
            </button>
          </form>
        </div>
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
