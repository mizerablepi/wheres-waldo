import { useEffect, useState } from "react";
import { getLeaderboard } from "./utility";
import waldo from "./assets/wheres-wally-1.jpg";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    getLeaderboard().then((res) => {
      setLeaderboard(res);
    });
  }, []);
  if (leaderboard.length > 0) {
    return (
      <div className="flex flex-col justify-center items-center m-4">
        <h2 className="font-bold text-3xl">Fastest Finders:</h2>
        <div className="flex items-center">
          <img src={waldo} alt="" className="h-[25rem]" />
          <table className="border-2  mt-14 [&>tbody>*:nth-child(odd)]:bg-red-600 [&>tbody>*:nth-child(odd)]:text-white ">
            <thead>
              <tr className="border-2">
                <th className="border-r-2 px-2 text-center">Position</th>
                <th className="border-r-2 px-2 text-center">Username</th>
                <th className="border-r-2 px-2 text-center">Time</th>
                <th className="border-r-2 px-2 text-center">Map</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <td className="border-r-2 px-2 text-center">{index + 1}</td>
                    <td className="border-r-2 px-2 py-1 text-center">
                      {user.username}
                    </td>
                    <td className="border-r-2 px-2 text-center">
                      {Math.floor((user.time / 6000) % 60)
                        .toString()
                        .padStart(2, "0")}
                      :
                      {Math.floor((user.time / 100) % 60)
                        .toString()
                        .padStart(2, "0")}
                      :{(user.time % 100).toString().padStart(2, "0")}
                    </td>
                    <td className="border-r-2 px-2 text-center">{user.map}</td>
                    <td className="px-2 text-center">
                      {new Date(user.date).toDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <h2 className="text-center mt-10 font-bold text-xl ">Loading...</h2>;
  }
};

export default Leaderboard;
