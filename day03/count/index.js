const minus = document.createElement("button");
const result = document.createElement("span");
const plus = document.createElement("button");

result.innerText = 0;

minus.innerText = "-";
minus.addEventListener("click", () => {
  // result.innerText--;
  result.innerText = Number(result.innerText) - 1;
});

plus.innerText = "+";
plus.addEventListener("click", () => {
  // result.innerText++;
  result.innerText = Number(result.innerText) + 1;
});

document.body.appendChild(minus);
document.body.appendChild(result);
document.body.appendChild(plus);
