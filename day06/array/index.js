// 데이터 타입: 기본 + 참조
// 기본: number, string, null.undefined, boolean
// 참조: array

//str = String() or "" or `` or +
//number = Number() or 123123 or +
//boolean = Boolean() or true or !
//Array = Array() or []

const fruits = ["apple", "banana", "orange", "kiwi"];
const coffees = Array();

//인덱스
fruits[0]; //apple
fruits[1]; //banana

//추가 및 갱신
fruits.push("grape");
fruits[0] = "mango";

//삭제
fruits.pop(); //맨뒤에 삭제
delete fruits[1]; //banana 삭제

// 가공하는 기능
// 1. 변형 - push,pop,reverse,shift[맨앞에 자르기], sort
// 2. 접근자 - indexof[몇번째?], slice[자르고 새로운 배열로 주기]
// 3. 반복 - forEach, map

const num = [3, 7, 2, 91, 309, 23, 124];

// 요소 바꾸기
const newArray = num.map((v) => {
  return v + 10;
});

//명령어가 한 줄일때 축약할 수 있음
// const newArray = num.map((v) => v + 10);

// const newArray01 = num.map((v) => {
//   return v + 100;
// });

const newArray01 = num.map((v) => v + 100);

console.log(newArray01);

// const newArray02 = num.map((v) => {
//   return v * v;
// });
const newArray02 = num.map((v) => v * v);
console.log(newArray02);

// const newArray03 = num.map((v) => {
//   //   if (v % 2 == 0) {
//   //     return v + 100;
//   //   } else {
//   //     return v ** 2;
//   //   }
//   return v % 2 == 1 ? v ** 2 : v + 100;
// });

const newArray03 = num.map((v) => (v % 2 == 1 ? v ** 2 : v + 100));
console.log(newArray03);

const fruits01 = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "mango",
  "durian",
  "strawberry",
  "melon",
  "watermelon",
];

// const newArray04 = fruits01.map((v) => {
//   return v.includes("a") ? v.toUpperCase() : "icecream";
// });
const newArray04 = fruits01.map((v) =>
  v.includes("a") ? v.toUpperCase() : "icecream"
);
console.log(newArray04);

//filter
const num1 = [3, 7, 2, 91, 309, 23, 124];
// const num1Arr = num1.filter((v) => {
//   return v > 10;
// });
const num1Arr = num1.filter((v) => v > 10);
console.log(num1Arr);

// const num2Arr = num1.filter((v) => {
//   return v % 2 == 0;
// });
const num2Arr = num1.filter((v) => v % 2 == 0);
console.log(num2Arr);

// const newArray05 = fruits01.filter((v) => {
//   return v.length == 6;
// });
const newArray05 = fruits01.filter((v) => v.length == 6);
console.log(newArray05);

//알파벳 i가 들어가있으면 제거하고, 제거 후 단어의 문자길이로 치환

// const newArray06 = fruits01.filter((v) => {
//   return !v.includes("i");
// });
const newArray06 = fruits01.filter((v) => !v.includes("i"));

// const newArray07 = newArray06.map((v) => {
//   return v.length;
// });
const newArray07 = newArray06.map((v) => v.length);
console.log(newArray07);

//아래처럼도 가능
//체이닝
//알고리즘 테스트
// const fruitsArr1 = fruits01
//   .filter((v) => {
//     return !v.includes("i");
//   })
//   .map((v) => {
//     return v.length;
//   });

const fruitsArr1 = fruits01
  .filter((v) => !v.includes("i"))
  .map((v) => v.length);

//every && some
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const every1 = arr3.every((v) => {
//   return v > 0;
// });
const every1 = arr3.every((v) => v > 0);
console.log(`every1:${every1}`);
//=> true 출력

// const some1 = arr3.some((v) => {
//   return v >= 10;
// });
const some1 = arr3.some((v) => v >= 10);
console.log(`some1:${some1}`);
