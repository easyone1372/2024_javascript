// console.log("자바스크립트! 시작!");
// 미니퀴즈
// 자바스크립트 공부 다짐
// 오늘 점심메뉴:

// console.log("공부 다짐: 완전 흡수해서 내걸로 만들기");
// console.log("개인 프로젝트 하나 만들어보기 근데 뭐로하지 일단 목표만 세워두기");
// console.log("오늘 점심 메뉴: 뭐먹지");

// //팝업창 - 확인만 출력
// window.alert("아무거나 써볼게요.");

// //팝업창 - 확인 취소 출력
// window.confirm("테스트");

// //팝업창 - 사용자가 텍스트를 입력할 수 있음
// window.prompt("테스트01");

//()안의 개체 열기
// window.open("https://www.naver.com");

//----------------------

// const a = document.createElement("div");
// a.innerText = "아메리카노";
// a.addEventListener("mouseover", () => {
//   window.alert("엥 반대합니다.");
// });
// document.body.appendChild(a);

//-----------------------------------
// 화면에 버튼 태그를 만들고
// 안의 내용은 석가탄신일
// 클릭'click'을 하면 alert으로 부처님 오심

// const button1 = document.createElement("button");
// button1.innerText = "석가탄신일";
// button1.addEventListener("click", () => {
//   window.alert("부처님 곧 한국오심");
// });
// document.body.appendChild(button1);

//----------------------
//  버튼 태그 만들고 안에 아메리카노
// 클릭을 하면, 라떼

// const americano = document.createElement("button");
// americano.innerText = "아메리카노";
// americano.addEventListener("click", () => {
//   americano.innerText = "라떼";
// });
// document.body.appendChild(americano);

// const b = window.prompt("무엇이든 물어보세요");
// console.log(b);

//------------------------
//첫 번째 prompt 버튼 클릭 전의 이름
//두 번째 prompt 버튼 클릭 후 이름
//클릭전 이름 버튼 만들고, 클릭하면 두번째 클릭 이름으로 바뀜

// const btn_name01 = window.prompt("버튼의 이름을 입력하세요.");
// btn_01 = document.createElement("button");
// btn_01.innerText = btn_name01;
// btn_01.addEventListener("click", () => {
//   const btn_name02 = window.prompt("변경할 이름을 입력하세요");
//   btn_01.innerText = btn_name02;
// });
// document.body.appendChild(btn_01);

// const btn_name01 = window.prompt("버튼의 이름을 입력하세요.");
// const btn_name02 = window.prompt("변경할 이름을 입력하세요");
// btn_01 = document.createElement("button");
// btn_01.innerText = btn_name01;
// btn_01.addEventListener("click", () => {
//   btn_01.innerText = btn_name02;
// });
// document.body.appendChild(btn_01);

//-----------------------------

// const a = document.createElement("button");
// a.innerText = "<button>코리아아이티</button>";
// a.innerHTML = "<button>코리아아이티</button>"
// a.style.backgroundColor = "red";

// document.body.appendChild(a);

//------------------------------------
//button 태그 만들고, 배경색 하늘색, 폰트사이즈 20px
//클릭을 하면, 빨간색으로 바뀌는 퀴즈

// const a = document.createElement("button");
// a.innerText = "버튼";
// a.style.backgroundColor = "skyblue";
// a.style.fontSize = "20px";
// a.style.borderRadius = "10px";
// a.addEventListener("click", () => {
//   a.style.backgroundColor = "red";
//   a.style.color = "white";
// });

// document.body.appendChild(a);

// //----------------------------------

// 버튼이 5개 있음. 빨 주 노 초 파
// 모두 css를 배경색은 각각 해당 색으로 바꿈
// text는 저 이름으로 설정
// div 태그가 w: 100, h: 100 border: 1px solid black 있는데
// 여기서 위의 5개의 버튼 중 하나를 누르면 div의 backgroundcolor가
// 해당 색으로 변하는 프로그램

const red_btn = document.createElement("button");
red_btn.innerText = "빨강";
red_btn.style.backgroundColor = "red";
red_btn.style.marginBottom = "5px";

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.border = "1px solid black";

red_btn.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});

const orange_btn = document.createElement("button");
orange_btn.innerText = "주황";
orange_btn.style.backgroundColor = "orange";
orange_btn.style.marginBottom = "5px";

orange_btn.addEventListener("click", () => {
  box.style.backgroundColor = "orange";
});

const yellow_btn = document.createElement("button");
yellow_btn.innerText = "노랑";
yellow_btn.style.backgroundColor = "yellow";
yellow_btn.style.marginBottom = "5px";

yellow_btn.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
});

const green_btn = document.createElement("button");
green_btn.innerText = "초록";
green_btn.style.backgroundColor = "green";
green_btn.style.marginBottom = "5px";

green_btn.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});

const blue_btn = document.createElement("button");
blue_btn.innerText = "파랑";
blue_btn.style.backgroundColor = "blue";
blue_btn.style.marginBottom = "5px";

blue_btn.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});

document.body.appendChild(red_btn);
document.body.appendChild(orange_btn);
document.body.appendChild(yellow_btn);
document.body.appendChild(green_btn);
document.body.appendChild(blue_btn);
document.body.appendChild(box);

//-------------
