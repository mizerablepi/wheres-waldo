import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div id="hero" className="h-[30rem]  bg-cover bg-bottom ">
        <div className="bg-[rgba(0,0,0,0.6)] h-full w-full flex flex-col justify-center items-center">
          <h2 className="font-bold text-white text-5xl w-[50%]">
            Unleash Your Inner Detective: <br /> Find Waldo{" "}
            <span className="text-blue-400 underline">Now!</span>
          </h2>
          <Link to={"play"}>
            <button className="font-bold text-white bg-red-600 mt-8 px-4 py-2 rounded-lg">
              Start Your Search
            </button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="p-2 mt-4">
        <h3 className="text-center text-2xl italic text-red-600 font-bold mb-2">
          A Classic Game
        </h3>
        <hr />
        <p className="p-4 w-[50rem] text-center m-auto">
          &quot;Where&apos;s Waldo&quot; is a popular interactive game that
          requires players to use their observational skills to locate a
          character named Waldo, who is hidden among a group of people or
          objects in various scenes. Players must carefully examine each scene,
          looking for subtle clues and details that will help them identify
          Waldo&apos;s location. The game typically features a variety of
          environments, such as crowded streets, beaches, and forests, each with
          its own unique challenges and obstacles. The goal is to find Waldo
          before time runs out, and players can earn points and rewards for
          successfully locating him. The game has become a beloved classic,
          entertaining generations of players with its cleverly designed puzzles
          and addictive gameplay.
        </p>
        <h3 className="text-center text-2xl italic text-red-600 font-bold mt-8 mb-2">
          How to Play
        </h3>
        <hr />
        <p className="p-4 w-[50rem] text-center m-auto">
          <ul className="text-start list-disc ml-10">
            <li>Search through the image to find waldo and friends</li>
            <li>Click on them when you find them </li>
            <li>Select the person you found</li>
            <li>find all the characters</li>
          </ul>
          <br />
          If you select the right person they will be marked, else you will be
          notified that your selection was wrong.
          <br />
          Try to find them all as fast as you can
        </p>
      </div>
    </>
  );
}
