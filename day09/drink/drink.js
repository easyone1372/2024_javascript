drinkList = [
  {
    name: "아메리카노",
    price: "3000",
  },
  {
    name: "라떼",
    price: "4000",
  },
  {
    name: "레몬에이드",
    price: "3500",
  },
  {
    name: "솔의눈",
    price: "2500",
  },
  {
    name: "카스",
    price: "4000",
  },
  {
    name: "바나나 우유",
    price: "2000",
  },
  {
    name: "사이다",
    price: "1500",
  },
  {
    name: "제로콜라",
    price: "2000",
  },
  {
    name: "데자와",
    price: "3000",
  },
  {
    name: "비타오백",
    price: "500",
  },
  {
    name: "요거트스무디",
    price: "6000",
  },
  {
    name: "초코우유",
    price: "3000",
  },
  {
    name: "돌체라떼",
    price: "4000",
  },
  {
    name: "딸기라떼",
    price: "3500",
  },
  {
    name: "민트라떼",
    price: "3500",
  },
  {
    name: "비타천",
    price: "1000",
  },
  {
    name: "테라",
    price: "2500",
  },
];

const drinkBox = document.querySelector(".drinkbox");

drinkList.forEach((v, i) => {
  const drinkName = document.createElement("span");
  const drinkPrice = document.createElement("span");
  drinkName.innerText = v.name;
  drinkPrice.innerText = v.price;

  const priceBtn = document.createElement("button");
  priceBtn.innerText = "추가하기";

  priceBtn.addEventListener("click",()=>{
    const result = document.querySelector(".result")
    let totalPrice = Number
    result.innerText = `${result.innerText+}`
  })
});

