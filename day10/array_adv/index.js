// //type casting: Number,String,Boolean

// //String -> Array

// const coffee = "americano";

// // split(""), Array.from(), ...[전개 구문]
// const a1 = coffee.split("");
// const a2 = Array.from(coffee);
// // 중요, 많이 사용
// const a3 = [...coffee];

// //[m,r,c,n]

// const a4 = [...coffee].filter((v) => ![..."aeiou"].some((v1) => v1 == v));
// // console.log(a4);

// const a5 = [...coffee].map((v) => (v == "e" ? v.toUpperCase() : v));
// // console.log(a5);

// //Array -> String
// const fruits = ["apple", "banana", "orange"];

// //join('')
// //applebananaorange
// const b1 = fruits.join(""); //applebananaorange
// const b2 = fruits.toString(); //안쓰는게 좋음. apple,banana,orange로 출력됨

// const b3 = fruits.map((v) => [...v].filter((v1) => v1 != "a").join(""));
// console.log(b3);

// // const vowels = [..."aeiouAEIOU"];
// // coffee.filter((v) => !vowels.some((v1) => v1 == v));

// //모든 철자 풀어주기
// //배열 상태
// // const b4 = fruits.map((v) => [...v]);
// // 배열 상태 풀기 flat(), 가끔 사용함
// const b4 = fruits.map((v) => [...v]).flat();
// const b5 = [...fruits.join("")]; //<이것도 됨 와 천재아냐?
// console.log(b4);

// //reduce()[누적시키다]: acc[누적된값],curr[현재]
// [1, 3, 5, 7, 9].reduce((a, c) => {
//   console.log(`a:${a} c:${c}`);
//   return a + c;
// });

// //array 10개 만들고 0으로 채운뒤 1~10까지 바꾸고 모두 합한 것
// const c1 = Array(10)
//   .fill(0)
//   .map((v, i) => i + 1)
//   .reduce((a, c) => a + c);

//[1~10] 홀수는 더하고 짝수는 빼기의 합
//1-2+3-4+5-6+7-8+9-10

const c2 = Array(10)
  .fill(0)
  .map((v, i) => (i % 2 ? -(i + 1) : i + 1))
  .reduce((a, c) => a + c);

console.log(c2);
