// //기본 타입
// //1.문자
// const favorite1 = window.prompt("당신이 좋아하는 커피는");
// const favorite2 = window.prompt("당신이 좋아하는 빵은");

// console.log("당신이 좋아하는 커피는 " + favorite1 + "이고 당신이 좋아하는 빵은 "  + favorite2 + "이군요");
// console.log(`당신이 좋아하는 커피는  ${favorite1}  이고 당신이 좋아하는 빵은  ${favorite2} 이군요`);

// const a = "coffee";
// const b = "bread";
// const c = `latte`;  //backtick

// //----------------------------
// //Q1
// const name1 = window.prompt("이름을 입력하세요");
// const age = window.prompt("나이를 입력하세요");
// const fav_color = window.prompt("좋아하는 색을 입력하세요");

// console.log(
//   `제 이름은 ${name1}이고 제 나이는 ${age}이며 좋아하는 색은 ${fav_color}입니다.`
// );

// //Q2
// const todayDate = window.prompt("오늘의 날짜를 입력하세요");
// const plan = window.prompt("계획하고 있는 일정을 입력하세요");

// console.log(`오늘은 ${todayDate}, 계획하신 일정은 ${plan}입니다`);

// //Q3
// const button_01 = document.createElement("button");
// button_name = window.prompt("버튼 이름을 입력하세요");
// button_01.innerText = `입력한 내용:${button_name}`;

// document.body.appendChild(button_01);

//유저에게 세번의 prompt로 헥사코드 색깔을 입력을 받고
//버튼 3개를 만들고(text: 헥사코드, bg: 헥사코드)
//박스 하나 만들고 (w:100 h:100, bg:선택된 버튼의 헥사코드, text: 입력된 헥사코드: [])

const colorbox = document.createElement("div");
colorbox.style.width = "100px";
colorbox.style.height = "100px";
colorbox.style.border = "1px solid black";
colorbox.style.transition = "all 0.5s";

const hex_color01 = window.prompt("첫번째 색상의 헥사코드를 입력하세요.");
const hex_color02 = window.prompt("두번째 색상의 헥사코드를 입력하세요.");
const hex_color03 = window.prompt("세번째 색상의 헥사코드를 입력하세요.");

const hex_colorbtn01 = document.createElement("button");
const hex_colorbtn02 = document.createElement("button");
const hex_colorbtn03 = document.createElement("button");

hex_colorbtn01.style.backgroundColor = hex_color01;
hex_colorbtn02.style.backgroundColor = hex_color02;
hex_colorbtn03.style.backgroundColor = hex_color03;

hex_colorbtn01.innerText = hex_color01;
hex_colorbtn02.innerText = hex_color02;
hex_colorbtn03.innerText = hex_color03;

hex_colorbtn01.addEventListener("click", () => {
  colorbox.style.backgroundColor = hex_color01;
  colorbox.innerText = `입력된 헥사코드: ${hex_color01}`;
});

hex_colorbtn02.addEventListener("click", () => {
  colorbox.style.backgroundColor = hex_color02;
  colorbox.innerText = `입력된 헥사코드: ${hex_color02}`;
});

hex_colorbtn03.addEventListener("click", () => {
  colorbox.style.backgroundColor = hex_color03;
  colorbox.innerText = `입력된 헥사코드: ${hex_color03}`;
});

document.body.appendChild(hex_colorbtn01);
document.body.appendChild(hex_colorbtn02);
document.body.appendChild(hex_colorbtn03);
document.body.appendChild(colorbox);
