import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Game from "./Game.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Leaderboard from "./Leaderboard.jsx";
import Map from "./Map.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/play/:name",
        element: <Map />,
      },
      {
        path: "play",
        element: <Game />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
    // errorElement: <Errorpage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
