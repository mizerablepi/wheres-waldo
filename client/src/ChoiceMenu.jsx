import { useEffect, useState } from "react";
import { checkCoords } from "./utility";

const ChoiceMenu = ({
  mouseposition,
  characterList,
  setParentClicked,
  setCharactersFound,
}) => {
  const tooRight = window.innerWidth - mouseposition.x < 120;
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      checkCoords(mouseposition, clicked).then((res) => {
        if (res == true) {
          console.log("CORRECT");
          setCharactersFound((count) => count + 1);
          setParentClicked(false);
        } else if (res == "fin") {
          console.log("THE END!");
          setCharactersFound((count) => count + 1);
          setParentClicked(false);
        } else {
          console.log("WRONG!!");
          setCharactersFound(2);
          setParentClicked(false);
        }
      });
    }
  });
  return (
    <div
      className="absolute h-20 w-20 rounded-full border-dashed border-white border-2 -translate-x-[50%] -translate-y-[50%] bg-black/50 z-10"
      style={{ top: mouseposition.y, left: mouseposition.x }}
    >
      <div className="bg-red-800 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1 h-1 rounded-full"></div>
      <div
        className={`bg-blue-800/80 relative ${
          tooRight ? "-translate-x-20" : "translate-x-20"
        } rounded-md`}
      >
        <ul>
          {characterList.map((character) => {
            return (
              <li key={character} className="flex my-1">
                <button
                  onClick={() => setClicked(character)}
                  className="text-white font-bold border flex-1 border-blue-800 rounded-md hover:bg-blue-800"
                >
                  {character}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChoiceMenu;
