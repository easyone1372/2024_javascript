//참조 타입:
//프로그래밍 타입: Array, Object, Function
//HTML에서 가져온 타입: Element, Event

const input = document.querySelector(".input");
// input.addEventListener("input", (e) => {
//   e.target.value.length >= 10
//     ? (input.style.color = "red")
//     : (input.style.color = "black");
// });

input.addEventListener("input", (e) => {
  e.target.value =
    e.target.value.length > 10 ? e.target.value.slice(0, 10) : e.target.value;
});
