const menus = [
  {
    coffeeName: "아메리카노",
    coffeePrice: 3000,
  },
  {
    coffeeName: "라떼",
    coffeePrice: 4000,
  },
  {
    coffeeName: "레몬에이드",
    coffeePrice: 3500,
  },
];

//메뉴 이름 생성 함수 선언
const makeName = (name) => {
  const h3 = document.createElement("h3");
  h3.innerText = name;
  return h3;
};

//메뉴 가격 생성 함수 선언
const makePrice = (price) => {
  const h5 = document.createElement("h5");
  h5.innerText = price + "원";
  return h5;
};

//버튼 생성 함수 선언
const makeButton = (price) => {
  const btn = document.createElement("button");
  btn.innerText = "추가하기";

  //버튼 클릭시 해당 가격을 총 금액에 추가
  btn.addEventListener("click", () => {
    const total = document.querySelector(".total");
    total.innerText = parseInt(total.innerText) + price + "원";
  });
  return btn;
};

//각 이름, 가격, 버튼 생성 함수 할당 후 배치하는 함수
const makeCoffee = (coffeeObj) => {
  const coffeeBox = document.createElement("div");
  coffeeBox.appendChild(makeName(coffeeObj.coffeeName));
  coffeeBox.appendChild(makePrice(coffeeObj.coffeePrice));
  coffeeBox.appendChild(makeButton(coffeeObj.coffeePrice));
  document.querySelector(".menu").appendChild(coffeeBox);
};

//menus 배열 반복하여 makeCoffee 함수 실행
menus.forEach((v) => makeCoffee(v));
