// if 조건문
// if (조건식)
//else

// const age = Number(window.prompt("나이?"));
// if (age > 19) {
//   console.log("성인입니다");
// } else {
//   console.log("미성년자입니다");
// }

// console.log("프로그램 끝");

//prompt로 두 개의 숫자를 입력 받고
//큰 수를 콘솔로 출력하기

// const num1 = Number(window.prompt("첫번째 숫자를 입력하세요."));
// const num2 = Number(window.prompt("두번째 숫자를 입력하세요."));

// if (num1 > num2) {
//   console.log(`${num1}이 ${num2}보다 큽니다.`);
// } else {
//   console.log(`${num2}이 ${num1}보다 큽니다.`);
// }

// const age = 15;

// if (age > 19) {
//   console.log("성인");
// } else if (19 >= age && age > 16) {
//   console.log("고딩");
// } else if (age >= 16 && age > 13) {
//   console.log("중딩");
// } else {
//   console.log("어린이");
// }

//하나의 정수를 입력받고, 양수, 음수, 0 인지 확인하기
// const num1 = Number(window.prompt("숫자를 입력하세요"));
// if (num1 > 0) {
//   console.log("양수");
// } else if (num1 < 0) {
//   console.log("음수");
// } else {
//   console.log("0");
// }

// //2. 수학 점수를 입력받고 90점 이상 a 80 b 70 c else d

// const score = Number(window.prompt("점수를 입력하세요"));
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// const num = Number(window.prompt("숫자 입력"));
// num % 2 ===0 짝수
// num % 2 ===1 홀수

//숫자 입력, 양의 홀수, 양의 짝수, 음의 홀수, 음의 짝수 , 0

// if (num > 0 && num % 2 === 0) {
//   console.log("양의 짝수");
// } else if (num > 0 && num % 2 === 1) {
//   console.log("양의 홀수");
// } else if (num === 0) {
//   console.log("0");
// } else if (num < 0 && num % 2 === 0) {
//   console.log("음의 짝수");
// } else {
//   console.log("음의 홀수");
// }

//solution
// const isPositive = num > 0;
// const isNegative = num < 0;
// const isOdd = num % 2 === 1;
// const isEven = num % 2 === 0;

// if (isPositive & isOdd) {
//   console.log("양의 홀수");
// } else if (isPositive & isEven) {
//   console.log("양의 짝수");
// } else if (isNegative & isOdd) {
//   console.log("음의 홀수");
// } else if (isNegative & isEven) {
//   console.log("음의 짝수");
// } else {
//   console.log("zero");
// }

//지양할 것
// const age = 10;
// if(age>7){
//     if(age>13){
//         console.log("청소년")
//     }else{
//         console.log("유소년")
//     }

// }

//switch문
const season = "봄";
switch (season) {
  case "봄": {
    console.log("날이 좋다");
    break;
  }
  case "여름": {
    console.log("날이 덥다");
    break;
  }
  case "가을": {
    console.log("날이 선선하다");
    break;
  }
  case "겨울": {
    console.log("날이 춥다");
    break;
  }
}
