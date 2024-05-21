const box = document.querySelector(".box");
const sizeBtn = document.querySelector(".sizeBtn");
const colorBtn = document.querySelector(".colorBtn");
const radiusBtn = document.querySelector(".radiusBtn");

sizeBtn.addEventListener("click", () => {
  sizeBtn.innerText = sizeBtn.innerText == "늘리기" ? "줄이기" : "늘리기";
  box.classList.toggle("medium");
  box.classList.toggle("large");
});

colorBtn.addEventListener("click", () => {
  colorBtn.innerText = colorBtn.innerText == "빨간색" ? "파란색" : "빨간색";
  box.classList.toggle("red");
  box.classList.toggle("blue");
});

radiusBtn.addEventListener("click", () => {
  radiusBtn.innerText =
    radiusBtn.innerText == "테두리 직각" ? "xpenfl endrmfrp" : "테두리 직각";
  box.classList.toggle("borderRadiusZero");
  box.classList.toggle("borderRadiusRound");
});
