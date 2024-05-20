// const input = document.querySelector(".input");

// //input을 입력하고 확인 버튼을 눌렀을 때, 8글자 이하이면 글자수가 짧습니다.(빨간색)
// //아니면 글자수가 충분합니다(파랑색) 출력

// const box01 = document.createElement("div");
// const checkBtn = document.querySelector(".check");
// document.body.appendChild(box01);

// checkBtn.addEventListener("click", () => {
//   if (input.value.length <= 8) {
//     box01.innerText = "글자수가 짧습니다";
//     box01.style.color = "red";
//   } else {
//     box01.innerText = "글자수가 충분합니다";
//     box01.style.color = "blue";
//   }
// });

//================================================
// 8~20글자 사이이고, 반드시 !, #, $ 하나라도 포함해야함
// 글자 시작을 'IT'로 하면 올바르게 문자를 설정했습니다(파)
// 아니면 문자를 다시 설정하세요(빨)
//+ 조건을 어겼을 때 문구를 출력하라.
//1. 8~20 사이로 입력하세요
//2. !,#,$를 포함하세요
// 3. IT로 시작하세요

const input = document.querySelector(".input");
const checkBtn = document.querySelector(".check");
const msgBox = document.querySelector(".msg");

checkBtn.addEventListener("click", () => {
  const value = input.value; //눌렀을 때 인풋값을 가져오기
  const isValidLength = 8 <= value.length && value.length <= 20;
  const isValidSpecialChar =
    value.includes("!") || value.includes("$") || value.includes("#");
  const isValidStart = value.startsWith("IT");
  //   const isValid = isValidLength && isValidSpecialChar && isValidStart;

  if (isValidLength == false) {
    msgBox.innerText = "8~20 사이로 글자를 입력하세요";
    msgBox.style.color = "red";
  } else if (isValidSpecialChar == false) {
    msgBox.innerText = "!, #, $ 중 하나를 포함하여 입력하세요";
    msgBox.style.color = "red";
  } else if (isValidStart == false) {
    msgBox.innerText = "반드시 'IT'로 시작해야합니다";
    msgBox.style.color = "red";
  } else {
    msgBox.innerText = "올바르게 문자를 입력하였습니다";
    msgBox.style.color = "blue";
  }
});

// //=============solution
// checkBtn.addEventListener("click", () => {
//   const value = input.value; //눌렀을 때 인풋값을 가져오기
//   const isValidLength = 8 <= value.length && value.length <= 20;
//   const isValidSpecialChar =
//     value.includes("!") || value.includes("$") || value.includes("#");
//   const isValidStart = value.startsWith("IT");
//   const isValid = isValidLength && isValidSpecialChar && isValidStart;
//   msgBox.style.color = red;

//   if (!isValidLength) {
//     msgBox.innerText = "8~20 사이로 글자를 입력하세요";
//   } else if (!isValidSpecialChar) {
//     msgBox.innerText = "!, #, $ 중 하나를 포함하여 입력하세요";
//   } else if (!isValidStart) {
//     msgBox.innerText = "반드시 'IT'로 시작해야합니다";
//   } else {
//     msgBox.innerText = "올바르게 문자를 입력하였습니다";
//     msgBox.style.color = "blue";
//   }
// });
