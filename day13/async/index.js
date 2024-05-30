//동기 프로그래밍
console.log(1);
console.log(3);
console.log(4);
//비동기[데이터가져오기. 지도위치가져오기. 시간초재기]
//1초 뒤에 함수 실행
setTimeout(() => {
  console.log(2);
}, 1000);

//1초 간격으로 함수를 실행해달라
// setInterval(() => {
//   console.log("오늘은 목요일");
// }, 1000);

//0 1 2 3 4.. 만들기

//초만 증가하는 함수 만들기
// const timeCount = document.querySelector(".timeCount");
// let seconds = 0;
// setInterval(() => {
//     timeCount.innerText = `${seconds++}초`;
//   }, 1000);

//=======================강사님 코드==============================

setInterval(() => {
  const timeCount = document.querySelector(".timeCount");
  timeCount.innerText = Number(timeCount.innerText) + 1;
}, 1000);

//분으로 넘어가고 싶었는데 실패함
// const timeCount = document.querySelector(".timeCount");
// let time = 0;
// let seconds = time % 60;
// let minutes = 에...;

// setInterval(() => {
//   const isSecondMin = seconds > 60;
//   timeCount.innerText = `${minutes}분 ${seconds++}초`;
//   isSecondMin ? (seconds=0;minutes +1) : seconds;
// }, 1000);

// String, Number, Boolean, Array, Element, Object
// 1. 지금 몇년 몇 월 몇일 무슨 요일인지 html에 나타내기

// const todayDate = document.querySelector(".todayDate");
// let nowDate = new Date();

// let todayYear = nowDate.getFullYear();
// let todayMonth = nowDate.getMonth() + 1;
// let today = nowDate.getDate();
// let days = ["일", "월", "화", "수", "목", "금", "토"];
// let todayDay = days[nowDate.getDay()];

// todayDate.innerText = `${todayYear}년 ${todayMonth}월 ${today}일 ${todayDay}요일`;

//======================강사님코드
//nowDate.toLocaleString() // 이거로도 가능함

// const dateEl = document.querySelector(".todayDate");
// const date = new Date();
// const koreaDay = {
//   1: "월요일",
//   2: "화요일",
//   3: "수요일",
//   4: "목요일",
//   5: "금요일",
//   6: "토요일",
//   7: "일요일",
// };

// //뭐야 왜 기능이 아니래 장난?
// dateEl.innerText = `${date.toLocalString()} ${koreaDay[date.getDay()]}`;

setInterval(() => {
  const dateEl = document.querySelector(".todayDate");
  const date = new Date();
  const koreaDay = {
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일",
    7: "일요일",
  };

  //뭐야 왜 기능이 아니래 장난?
  dateEl.innerText = `${date.toLocaleString()} ${koreaDay[date.getDay()]}`;
}, 1000);
