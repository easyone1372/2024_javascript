// - 0 +
//0이하로는 못 떨어짐

const minus_btn = document.createElement("button");
let num = document.createElement("span");
const plus_btn = document.createElement("button");

minus_btn.innerText = " - ";
num.innerText = "0";
plus_btn.innerText = " + ";

minus_btn.addEventListener("click", () => {
  const num1 = Number(num.innerText) - 1;
  const isMinus = num1 === -1;

  num.innerText = isMinus ? (num.innerText = 0) : Number(num.innerText) - 1;
});

// minus_btn.addEventListener("click", () => {
//   const isZero = Number(num.innerText) === 0;
//

//   num.innerText = isZero ? 0 : c(num.innerText) - 1;
// });

plus_btn.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
});

document.body.appendChild(minus_btn);
document.body.appendChild(num);
document.body.appendChild(plus_btn);
