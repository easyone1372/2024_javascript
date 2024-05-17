//조건문 잘 안씀 스위치문 거의 안씀 반복문 한 번도 안씀
//배열 많이 씀

//데이터 타입: 기본[string, number, boolean,null,undefined] & 참조[Array]
//Array
// const colors = ["#f6e58d", "#f9ca24", "#ffbe76", "#f0932b"];
// colors.push("#ff7979"); //push: 배열에 추가하세요
// colors.sort(); //sort: 배열을 정렬하세요

// console.log(colors);

// colors.forEach((x) => {
//   //divbox h:100 w 100 bg:x 화면에 나타내기 코드
//   const box = document.createElement("div");
//   box.style.width = "100px";
//   box.style.height = "100px";
//   box.style.backgroundColor = x;
//   document.body.appendChild(box);
// }); //하나씩 호출

// const menu = ["americano", "latte", "mint", "vanlila", "milktea"];
// //touppercase()

// menu.forEach((x) => {
//   console.log(x.toUpperCase());
// });

// const prices = [2000, 3000, 6000, 3000, 5000, 4000];
// prices.forEach((x) => {
//   if (x > 3000) {
//     console.log("비싸네요");
//   } else {
//     console.log("저렴하네요");
//   }
// });

//replace(a,b) : a를 b로 바꿔라
//replaceAll(a,b): 모든 a를 b로 바꿔라
// const a = "hello".replace("l", "z");
// console.log(a);

// //slice(a,b): a부터 b-1까지 문자를 자른다.
// "americano".slice(0, 3);

const option = ["100 blue", "200 green", "500 black", "400 red"];
//wh: 100 bg: blue wh:200 bh:green 화면구현

option.forEach((x) => {
  const box = document.createElement("div");
  const a = x.split(" ");
  box.style.width = a[0] + "px";
  box.style.height = a[0] + "px";
  box.style.backgroundColor = a[1];
  document.body.appendChild(box);
});

//teacher solution
option.forEach((x) => {
  const a = x.split(" ");
  const length = a[0];
  const color = a[1];

  const box = document.createElement("div");
  box.style.height = `${length[0]}px`;
  box.style.width = `${length[0]}px`;
  box.style.backgroundColor = color;
  document.body.append(box);
});

//or 아래처럼도 할 수 있다
// option.forEach((x)=>{
//     x.split(" ").forEach((y)=>{
//         ~~~
//     })
// })

//버튼을 누르면 프롬프트 뜨고 숫자와 헥사코드 입력시 해당 숫자 크기 박스와 배경색 헥사코드 출력

const start_btn = document.createElement("button");
start_btn.innerText = "입력";

start_btn.addEventListener("click", () => {
  const scale = Number(window.prompt("크기 입력"));
  const bgColor = window.prompt("색상코드 입력");
  const box = document.createElement("div");
  box.style.width = scale + "px";
  box.style.height = scale + "px";
  box.style.backgroundColor = bgColor;
  document.body.appendChild(box);
});

document.body.appendChild(start_btn);
