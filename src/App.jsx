import logo from "./assets/waldo_face.jpg";
import { Outlet, Link, useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;
  return (
    <>
      <header className="flex items-center justify-between shadow-md p-2 ">
        <div className="flex items-center">
          <img src={logo} alt="logo image" className="h-16" />
          <h1 className="text-2xl mr-4 pr-4 border-r-2">
            <span className="text-blue-600 font-bold">Where&apos;s </span>
            <span className="text-red-600 font-bold"> Waldo?</span>
          </h1>
          <Link to={""}>
            <button
              className={`p-2 m-1 ${
                currentPage == "/" ? "text-red-600 font-bold" : ""
              } self-stretch hover:bg-gray-200`}
            >
              Home
            </button>
          </Link>
          <Link to={"play"}>
            <button
              className={`p-1 m-1 ${
                currentPage == "/play" ? "text-red-600 font-bold" : ""
              } self-stretch hover:bg-gray-200`}
            >
              Play
            </button>
          </Link>
          <Link to={"leaderboard"}>
            <button
              className={`p-1 m-1 ${
                currentPage == "/leaderboard" ? "text-red-600 font-bold" : ""
              } self-stretch hover:bg-gray-200`}
            >
              Leaderboard
            </button>
          </Link>
        </div>
        <div className="">
          <button className="px-2 py-1 m-1 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700">
            Log In
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default App;
