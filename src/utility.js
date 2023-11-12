export async function getLeaderboard() {
  const users = [
    {
      id: 1,
      username: "miz",
      time: "3.02s",
      map: "space",
      date: "12/1/22",
    },
    {
      id: 2,
      username: "zed",
      time: "2.02s",
      map: "laundry",
      date: "12/4/22",
    },
    {
      id: 3,
      username: "sammmy",
      time: "1.32s",
      map: "space",
      date: "24/12/22",
    },
    {
      id: 4,
      username: "miz",
      time: "19.41s",
      map: "laundry",
      date: "1/5/23",
    },
  ];
  return new Promise((res) => {
    return setTimeout(() => {
      res(users);
    }, 1000);
  });
}

const chLst = ["me", "me", "me"];

export async function checkCoords(coords, choice) {
  const ans = { xmin: 70, xmax: 100, ymin: 20, ymax: 90 };
  let result;

  if (
    choice == "me" &&
    coords.x + 28 > ans.xmin &&
    coords.x - 28 < ans.xmax &&
    coords.y + 28 > ans.ymin &&
    coords.y - 28 < ans.ymax
  ) {
    result = true;
    chLst.splice(chLst.indexOf("me"), 1);
    console.log(chLst);
    if (chLst.length === 0) {
      return "fin";
    }
  } else {
    result = false;
  }

  return Promise.resolve(result);

  // return new Promise((res) => {
  //   return setTimeout(() => {
  //     res(result);
  //   }, 10);
  // });
}

export async function getCharacterList() {
  const list = ["me", "myself", "I"];
  return Promise.resolve(list);
}

export function sendStartSignal() {
  console.log("SIGNAL SENT");
  return null;
}
