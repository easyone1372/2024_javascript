//1. 색상 버튼 3개 임의로 만들기
//2. 파레트 상자 하나 만들기
//3. -, +버튼 만들기

const palette = document.createElement("div");
const color01 = document.createElement("button");
const color02 = document.createElement("button");
const color03 = document.createElement("button");
const plus_btn = document.createElement("button");
const minus_btn = document.createElement("button");

palette.style.width = "100px";
palette.style.height = "100px";
palette.style.marginBottom = "5px";
palette.style.border = "1px solid black";
palette.innerText = "색상: x";

color01.innerText = "하늘색";
color02.innerText = "파란색";
color02.style.color = "white";
color03.innerText = "짙은 남색";
color03.style.color = "white";

color01.style.backgroundColor = "#0ba2cc";
color02.style.backgroundColor = "#0a3677";
color03.style.backgroundColor = "#000a4d";

color01.style.marginBottom = "5px";
color02.style.marginBottom = "5px";
color03.style.marginBottom = "5px";

color01.addEventListener("click", () => {
  palette.style.backgroundColor = "#0ba2cc";
  palette.innerText = "색상: #0ba2cc";
  palette.style.color = "black";
});

color02.addEventListener("click", () => {
  palette.style.backgroundColor = "#0a3677";
  palette.innerText = "색상: #0a3677";
  palette.style.color = "white";
});

color03.addEventListener("click", () => {
  palette.style.backgroundColor = "#000a4d";
  palette.innerText = "색상: #000a4d";
  palette.style.color = "white";
});

minus_btn.innerText = "-";
plus_btn.innerText = "+";

minus_btn.addEventListener("click", () => {});

plus_btn.addEventListener("click", () => {
  const length = parseInt(palette.style.width) + 1;
  palette.style.width = `${length}px`;
  palette.style.height = `${length}px`;
});

minus_btn.addEventListener("click", () => {
  const length = parseInt(palette.style.width) - 1;
  const isLength99 = length === 99;
  palette.style.width = isLength99 ? "100px" : `${length}px`;
  palette.style.height = isLength99 ? "100px" : `${length}px`;
});

document.body.appendChild(palette);
document.body.appendChild(color01);
document.body.appendChild(color02);
document.body.appendChild(color03);
document.body.appendChild(minus_btn);
document.body.appendChild(plus_btn);
