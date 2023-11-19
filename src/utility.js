/* eslint-disable no-unused-vars */
export async function getLeaderboard() {
  const res = await fetch(`http://localhost:3000/leaderboard`);
  const scores = await res.json();
  return scores;
}

export async function getCharacterList(map) {
  const res = await fetch(`http://localhost:3000/play/${map}`, {
    credentials: "include",
    mode: "cors",
  });
  const list = await res.json();
  return list;
}

export function sendStartSignal() {
  const res = fetch(`http://localhost:3000/startTime`, {
    credentials: "include",
    mode: "cors",
  });
  return null;
}

export async function checkCoords(map, coords, choice) {
  const res = await fetch(`http://localhost:3000/play/${map}/check`, {
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
