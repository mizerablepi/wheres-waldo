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
