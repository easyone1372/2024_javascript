// if /switch

//1. if
const isOverWeight = true;
if (isOverWeight) {
  console.log("과체중입니다.");
} else {
  console.log("정상입니다.");
}

//2. switch
const user = "관리자";

switch (user) {
  case "관리자":
    console.log("관리자 로그인");
    break;
  case "편집자":
    console.log("편집자 로그인");
    break;
  case "일반유저":
    console.log("일반유저 로그인");
    break;
}

const arr = ["아메리카노", "라떼", "민트", "바닐라"];

arr.forEach((v, i) => {
//   console.log(`${i},${v}`);
    
  if (i % 2 == 0) console.log(`${i},${v}`);
});
// v: value의 약자. 보통 x대신 v를 사용
// i: index 몇 번째인지 알려줌

