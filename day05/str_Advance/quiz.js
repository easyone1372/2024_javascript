const fruits = ["strawberry", "orange", "apple", "banana", "melon", "durian"];

// console log로 결과 출력
// 1. a가 포함되어있으면 대문자화 시키고, 아니면 '😶' 출력하기

// 2. b가 포함되어있으면 b기준으로 단어를 쪼개서 배열화하고, 아니면 '😶' 출력하기

// 3. n이 포함되어있으면 기존에 있던 단어들을 결합해서 최종 단어 보여주기
// orangebananamelondurian

// 4. 문자의 길이가 6글자 이상이면 알파벳 a를 k로 바꿔서 출력하고, 아니면 대문자화해서 출력하기.

// 1 ----------
console.log("=========================문제 1=========================");

fruits.forEach((v) => {
  const isAtrue = v.includes("a") == true;
  if (isAtrue) {
    console.log(v.toUpperCase());
  } else {
    console.log("😶");
  }
});

//solution
fruits.forEach((v) => {
  console.log(v.includes("a") ? v.toUpperCase() : "😶");
});

// 2 ----------------------
console.log("=========================문제 2=========================");
fruits.forEach((v) => {
  const isBtrue = v.includes("b") == true;
  if (isBtrue) {
    console.log(v.split("b"));
  } else {
    console.log("😶");
  }
});

//solution
fruits.forEach((v) => {
  console.log(v.includes("b") ? v.split("b") : "😶");
});

//3------------------------
console.log("=========================문제 3=========================");
const arr2 = [];
fruits.forEach((v) => {
  const isNtrue = v.includes("n") == true;
  if (isNtrue) {
    arr2.push(v);
  }
});
console.log(arr2.concat());

//solution
let a = "";
fruits.forEach((v) => {
  if (v.includes("n")) {
    a += v;
  }
});
console.log(a);

//4------------------------------
console.log("=========================문제 4=========================");
fruits.forEach((v) => {
  const is6Length = v.length >= 6 == true;
  if (is6Length) {
    console.log(v.replace("a", "k"));
  } else {
    console.log(v.toUpperCase());
  }
});

//solution
fruits.forEach((v) => {
  console.log(v.length >= 6 ? v.replace("a", "k") : v.toUpperCase());
});
