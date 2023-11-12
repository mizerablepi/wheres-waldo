import { useEffect, useRef, useState } from "react";
import { sendStartSignal } from "./utility";

const Stopwatch = ({ clockStarted, charactersFound }) => {
  const [time, setTime] = useState(0);
  let timer = useRef();
  useEffect(() => {
    if (clockStarted) {
      sendStartSignal();
      timer.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 10);
    }
    return () => {
      clearInterval(timer.current);
    };
  }, [clockStarted]);

  if (charactersFound == 3) {
    clearInterval(timer.current);
  }

  return (
    <div className="bg-black/80 text-white font-bold px-4 py-2 sticky top-0 flex justify-between">
      <div>
        Time Elapsed:{" "}
        <span className="ml-2">
          {Math.floor((time / 6000) % 60)
            .toString()
            .padStart(2, "0")}
          :
          {Math.floor((time / 100) % 60)
            .toString()
            .padStart(2, "0")}
          :{(time % 100).toString().padStart(2, "0")}
        </span>
      </div>
      <div>Characters Found: {charactersFound}/3</div>
    </div>
  );
};

export default Stopwatch;
