//기본 타입: string, number, boolean, null. undefined
//참조 타입: array, element

// const divTag = document.createElement("div")
//divTag.appendChild() 자식 태그 추가하기
// divTag.removeChild() 자식에 해당 태그 지우기

// divTag.style 직접 css 관여
// divTag.classList 클래스 리스트 보기
// divTag.classList.add("red") 클래스 리스트에 red 추가
// divTag.classList.remove("red") 클래스 리스트에 red 삭제

// divTag.classList.toggle("red") 클래스 리스트에 red가 있으면 삭제, 없으면 추가
// const divTag1 = document.querySelector(".box")  //element 혹은 null

const box = document.querySelector(".box");
const long = document.querySelector(".long");
const short = document.querySelector(".short");
const redBtn = document.querySelector(".redBtn");
const blueBtn = document.querySelector(".blueBtn");
const borderR = document.querySelector(".borderR");

long.addEventListener("click", () => {
  box.style.width = "200px";
  box.style.height = "200px";
  long.style.display = "none";
  short.style.display = "block";
});

short.addEventListener("click", () => {
  box.style.width = "100px";
  box.style.height = "100px";
  short.style.display = "none";
  long.style.display = "block";
});

blueBtn.addEventListener("click", () => {
  box.classList.add("blue");
  box.classList.remove("red");
  blueBtn.style.display = "none";
  redBtn.style.display = "block";
});

redBtn.addEventListener("click", () => {
  box.classList.add("red");
  box.classList.remove("blue");
  blueBtn.style.display = "block";
  redBtn.style.display = "none";
});

borderR.addEventListener("click", () => {
  borderR.innerText =
    borderR.innerText == "테두리 직각" ? "테두리 둥글게" : "테두리 직각";
  box.classList.toggle("radiusRound");
  box.classList.toggle("radius90");
});
