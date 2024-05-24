//if 문 사용시: 숫자 비교, 조건을 달 때
const a = 100;
if (a > 10) {
  console.log("a는 10보다 크다");
} else {
  console.log("a는 10보다 작다");
}

// foreach: 뭔가 반복이 되었을때 사용

//e.target.value vs input.value
//상황따라 다름.input.value 매번 모든걸 가져와서 넣어야함. e.target.value: 한 줄로 끝낼 수 있음

// 배열에는 foreach가 있고 {}에는 없다
// [
//   { name: "kim", age: 21 },
//   { name: "lee", age: 22 },
//   { name: "park", age: 21 },
// ].map((v, i) => (v.age = v.age + 10));

//번째를 물어보고 싶을때 i를 집어넣음

//로직 활용
