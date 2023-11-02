import logo from "./assets/waldo_face.jpg";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="flex items-center justify-between shadow-md p-2 ">
        <div className="flex items-center">
          <img src={logo} alt="logo image" className="h-16" />
          <h1 className="text-2xl mr-4 pr-4 border-r-2">
            <span className="text-blue-600 font-bold">Where&apos;s </span>
            <span className="text-red-600 font-bold"> Waldo?</span>
          </h1>
          <button className="p-2 m-1 text-red-600 font-bold self-stretch hover:bg-gray-200">
            Home
          </button>
          <button className="p-1 m-1 self-stretch hover:bg-gray-200">
            Play
          </button>
          <button className="p-1 m-1 self-stretch hover:bg-gray-200">
            Leaderboard
          </button>
        </div>
        <div className="">
          <button className="px-2 py-1 m-1 bg-red-600 text-white font-bold rounded-lg">
            Log In
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default App;
