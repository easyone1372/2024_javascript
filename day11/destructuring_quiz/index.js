import { backendData } from "./data.js";

//모두 콘솔로 찍음
//1. id, currency, money, phone만 console로 가져오기
//2. animalName->{animal, car:{make,model,year}} 콘솔로
//3. ipaddress의 맨마지막 3자리가 합이 10이하이면, id, color만 콘솔로 찍기
//4. timezone이 알파벳 모음으로 시작하면, {timezone, carmake, phone앞 세자리만 가져오기}
//5. money가 50000엔 이하이면, phone[-하이픈제거] appName[대문자화하고] 가져오기

// console.log(
//   "====================================1번문제===================================="
// );

// const a = backendData.map(({ id, currency, money, phone }) => ({
//   id,
//   currency,
//   money,
//   phone,
// }));

// console.log(a);

// console.log(
//   "====================================2번문제===================================="
// );

// const b = backendData.map(
//   ({ animalCommonName: animal, carMake, carModel, carModelYear }) => ({
//     animal,
//     car: { carMake, carModel, carModelYear },
//   })
// );

// console.log(b);

// console.log(
//   "====================================3번문제===================================="
// );

// const c = backendData.map(({id,color})=>({id,color}))
// const ipAdd = backendData.ipaddress
// let sum = 0;
// const last3Num = [...(ipAdd.slice(ipAdd.length-3))].forEach((v)=>sum+=v)
// last3Num <=10 ? c :

const c = backendData.map(({ id, color, ipAddress }) => {
  const lastThreeSum = ipAddress
    .slice(-3)
    .split("")
    .reduce((a, c) => a + parseInt(c), 0);
  return lastThreeSum <= 10 ? { id, color } : 0;
});

console.log(c);
