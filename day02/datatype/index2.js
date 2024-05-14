// 데이터 타입: 기본 + 참조
// 기본: String 문자, Number 숫자

// const a = window.prompt("숫자 입력:");
// //문자 -> 숫자 타입 바꾸기
// //1. Number
// const b = Number(a);
// console.log(b + 10);

// //2.parseInt(), parseFloat() 문자타입만 넣었을 때 유효
// const c = parseInt(a);
// console.log(c + 20);

// + ,-, *

//Q1 -------------------------------------------
const question1 = document.createElement("div");
const question2 = document.createElement("div");
const question3 = document.createElement("div");

const q1 = window.prompt("계산할 첫번째 숫자를 입력하세요");
const q2 = window.prompt("계산할 두번째 숫자를 입력하세요");

const n1 = Number(q1);
const n2 = Number(q2);

const a1 = n1 + n2;
const a2 = n1 - n2;
const a3 = n1 * n2;

question1.style.border = "1px solid black";
question1.innerText = `첫 번째 숫자는 ${n1}, 두 번째 숫자는 ${n2}, 두 수의 연산은 각각 덧셈: ${a1} 뺄셈: ${a2} 곱셈: ${a3} 입니다`;

//Q2 -------------------------------------------------------
// const addUserAge = window.prompt("사용자의 나이를 입력하세요.");
// const userAge = Number(addUserAge);
//->하나로 합치기
const userAge = Number(window.prompt("사용자의 나이를 입력하세요."));

const birthYear = 2024 - userAge + 1;

question2.style.border = " 1px solid black";
question2.innerText = `나이가 ${userAge}라면, 출생년도는 ${birthYear}년 입니다.`;

//Q3----------------------------------------------------------
const addLength = window.prompt("정사각형 한 변의 길이를 입력하세요.");
const boxLength = Number(addLength);

const area = boxLength * boxLength;

question3.style.border = " 1px solid black";
question3.innerText = `한 변의 길이가 ${boxLength}라면 넓이는 ${area}입니다.`;

document.body.appendChild(question1);
document.body.appendChild(question2);
document.body.appendChild(question3);
