const youtubers = [
  {
    name: "슈카월드",
    subscribers: 3000000,
    genre: ["economics", "entertainment"],
  },
  {
    name: "침투부",
    subscribers: 1200000,
    genre: ["game", "life", "entertainment"],
  },
  {
    name: "곽튜브",
    subscribers: 1500000,
    genre: ["journey", "entertainment"],
  },
];

youtubers.forEach((v, i) => {
  console.log(`${i}.유튜버: ${v.name}`);
});

const a = youtubers
  .filter((v) => v.subscribers > 1000000)
  .forEach((v) => console.log(`유튜버: ${v.name}, 장르:${v.genre}`));

const b = youtubers
  .map((v) => {
    v.subscribers = v.subscribers / 10000 + "만";
    v.genre = v.genre.map((v) => v.toUpperCase());
    return v;
  })
  .forEach((v) => console.log(v));
