//1. 커피메뉴 고르기
//아메리카노 3000원, 라떼 4000원, 레몬에이드 3500원, 솔의눈 2500원
//카스 4000원, 바나나우유 2000원, 사이다 1500원 
//제로콜라 2000원 데자와 3000원 비타오백 500원 요거트 스무디 6000원
//초코우유 3000원 돌체라떼 4000원 딸기라떼 3500원 민트라떼 5000원
//비타천 1000원 테라 2500원

//추가하기, 추가하기
//총액: 0원

// const addAmountBtn = document.querySelector(".addAmount");
const btn1 = document.querySelector(".addAmount1");
const btn2 = document.querySelector(".addAmount2");

const americano = document.querySelector(".americano");
const latte = document.querySelector(".latte");

let result = document.querySelector(".result");
result.innerText = "0";

// addAmountBtn.addEventListener("click", () => {
//   let rText = parseInt(result.innerText);
//   //   addAmountBtn.classList.contains("americano")
//   //     ? (result.innerText = `${rText + 3000}원`)
//   //     : (result.innerText = `${rText + 4000}원`);

//   console.log(addAmountBtn.classList.contains("latte"));
//   if (addAmountBtn.classList.contains("americano")) {
//     result.innerText = `${rText + 3000}원`;
//     console.log("아메리카노");
//   } else if (addAmountBtn.classList.contains("latte")) {
//     result.innerText = `${rText + 4000}원`;
//     console.log("라떼");
//   }
// });

btn1.addEventListener("click", () => {
  let rText = parseInt(result.innerText);
  result.innerText = `${rText + 3000}원`;
});
btn2.addEventListener("click", () => {
  let rText = parseInt(result.innerText);
  result.innerText = `${rText + 4000}원`;
});

coffeeList = [
  {
    coffee: "아메리카노",
    price: "3000",
  },
  {
    coffee: "라떼",
    price: "4000",
  },
];


