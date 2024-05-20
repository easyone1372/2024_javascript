//커피 input
//가격 input - 반드시 숫자여야만함 [1000이상만 가능]
//- 1000원 이상 입력해야합니다
//수량 input - 숫자여야만함 [ 1~10000만 가능]
// - 1~10000 사이여야합니다
//제출하기 button
//3개 글자가 0이 아닐 경우에만 제출이 가능

//커피 재고 리스트
// 아메리카노 3000원 10000개
// 라떼 3500원 3000개

//총 갯수: 13000개

const coffee = document.querySelector(".coffee");
const coffeeText = document.querySelector(".coffeeText");
const price = document.querySelector(".price");
const priceText = document.querySelector(".priceText");
const amount = document.querySelector(".amount");
const amountText = document.querySelector(".amountText");
const submitBtn = document.querySelector(".submit");
let total = document.querySelector(".totalAmount");
let totalAmount = 0;

submitBtn.addEventListener("click", () => {
  const isCoffee = coffee.value == "";
  const isPrice = 1000 <= Number(price.value);
  const isAmount = 1 <= Number(amount.value) && Number(amount.value) <= 10000;

  if (isCoffee) {
    coffeeText.innerText = "커피 종류를 입력하세요.";
    coffeeText.style.color = "red";
  } else if (!isPrice) {
    priceText.innerText = "숫자만 입력 가능합니다. 1000원이상 입력하세요.";
    priceText.style.color = "red";
  } else if (!isAmount) {
    amountText.innerText = "1~10000 사이 값만 입력할 수 있습니다.";
    amountText.style.color = "red";
  } else {
    const msgbox = document.createElement("div");
    msgbox.innerText = `${coffee.value} ${Number(price.value)}원 ${Number(
      amount.value
    )}개 `;
    document.body.appendChild(msgbox);

    let t = Number(amount.value);
    totalAmount += t;

    total.innerText = `${totalAmount}개`;
    coffeeText.style.display = "none";
    priceText.style.display = "none";
    amountText.style.display = "none";
  }
});
