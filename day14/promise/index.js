// Data, Array, Boolean...
// --Promise--
// 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타내는 객체
// ing, 성공, 실패
// pending, fullfilled, rejected

const a = new Promise((succeed, failed) => {
  setTimeout(() => {
    succeed({ name: "happy" });
  }, 1000);
});
console.log(a);

const b = new Promise((succeed, failed) => {
  succeed("happy js 2");
});

//a가 성공했다면 console log로 찍어줘
a.then((x) => {
  console.log(x);
});

const c = fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=1");
c.then((x) => x.json()).then((x) => console.log(x)); //then은 성공했을때만 들어옴
c.catch((x)=>console.log(x)) // 실패했을 때

const d = new Promise((s, f) => {
  setTimeout(() => {
    s(() => {
      alert("아졸려");
    });
  }, 1000);
});

d.then((x) => x());

