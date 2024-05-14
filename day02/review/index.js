// const a = document.querySelector(".box");
// a.style.backgroundColor = "blue";
// a.addEventListener("click", () => {
//   window.alert("아메리카노 클릭함");
// });

const bar1 = document.querySelector(".bar");
const xIcon1 = document.querySelector(".xIcon");

xIcon1.style.display = "none";
xIcon1.style.transition = "all 0.5s";

bar1.addEventListener("click", () => {
  bar1.style.display = "none";
  xIcon1.style.display = "block";
});

xIcon1.addEventListener("click", () => {
  xIcon1.style.display = "none";
  bar1.style.display = "block";
});

document.body.appendChild(bar1);
document.body.appendChild(xIcon1);

