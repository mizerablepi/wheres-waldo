/* eslint-disable no-unused-vars */
const serverUrl = "https://wheres-waldo-backend-kemp.onrender.com/api"; // "http://localhost:3000/api"; //

export async function getLeaderboard() {
  const res = await fetch(serverUrl + "/leaderboard", {
    credentials: "include",
    mode: "cors",
  });
  const scores = await res.json();
  return scores;
}

export async function getCharacterList(map) {
  const res = await fetch(serverUrl + `/play/${map}`, {
    credentials: "include",
    mode: "cors",
  });
  const list = await res.json();
  return list;
}

export function sendStartSignal() {
  const res = fetch(serverUrl + `/startTime`, {
    credentials: "include",
    mode: "cors",
  });
  return null;
}

export async function checkCoords(map, coords, choice) {
  const res = await fetch(serverUrl + `/play/${map}/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ characterName: choice, coords }),
    credentials: "include",
    mode: "cors",
  });
  const result = await res.json();
  return result;
}
