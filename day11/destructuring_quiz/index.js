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

//----힌트 받기 전: 뒤 세자리를 잘라 더했을 때 10이하일 경우 id, color 반환하는 함수를 작성함
// const c = backendData.map(({ id, color, ipAddress }) => {
//   const lastThreeSum = ipAddress
//     .slice(-3)
//     .split("")
//     .reduce((a, c) => a + parseInt(c), 0);
//   return lastThreeSum <= 10 ? { id, color } : None;
// });

// console.log(c);

//뒤 세자리 중 점이 포함, 혹은 1자리가 있을 수 있다는 문제를 발견,
//마지막 점 기준으로 잘라 합을 더해 10이하일 경우 i,color를 반환하는 함수를 작성하고자함
//아래는 강사님 코드 ====================================================

// const c = backendData
//   .filter(({ ipAddress }) => {
//     const ipArr = [...ipAddress];
//     const sliceDot = ipArr.findLastIndex((v) => v === ".");
//     const sliceArr = ipArr
//       .splice(sliceDot + 1, ipArr.length)
//       .map((v) => parseInt(v));
//     const sum = sliceArr.reduce((a, c) => a + c);
//     return sum <= 10;
//   })
//   .map(({ ipAddress, id, color }) => ({ ipAddress, id, color }));

// console.log(c);

//나중에 내가 짜보기 ===============================================================

// console.log(
//   "====================================4번문제===================================="
// );

const vowels = ["a", "e", "i", "o", "u"];

// const d = backendData
//   .filter(({ timeZone }) => vowels.includes(timeZone[0]))
//   .map(({ timeZone, carMake, phone }) => ({
//     timeZone: timeZone.slice(0, 3),
//     carMake: carMake.slice(0, 3),
//     phone: phone.slice(0, 3),
//   }));

// console.log(d);

//이 경우 데이터가 모두 A와 E로 시작하여 아무것도 출력되지 않는 것을 확인함.
// const d = backendData
//   .filter(({ timeZone }) => vowels.some((v) => v === timeZone[0]))
//   .map(({ timeZone, carMake, phone }) => ({
//     timeZone: timeZone.slice(0, 3),
//     carMake: carMake.slice(0, 3),
//     phone: phone.slice(0, 3),
//   }));

// console.log(d);

//아이시-팔 왜 안돼
// const d = backendData.filter(({ timeZone }) => {
//   const sliceSlash = timeZone.split("/")[0];
//   const slashArr = [...sliceSlash];
//   const check = slashArr.some((v) => vowels.includes(v[0])); //tlqkf안되잖아
//   return check;
//   // return sliceSlash.split("").some((v) => vowels.includes(v));
// });
// // .map(({ timeZone, carMake, phone }) => {
// //   const sliceSlash = timeZone.split("/")[1];
// //   return {
// //     timeZone: sliceSlash.slice(0, 3),
// //     carMake: carMake.slice(0, 3),
// //     phone: phone.slice(0, 3),
// //   };
// // });

// console.log(d);

// console.log(
//   "====================================5번문제===================================="
// );

const e = backendData
  .filter(({ money }) => ({
    money: parseFloat(money.replace("¥", "")) <= 50000,
  }))
  .map(({ phone, appName }) => ({
    phone: phone.replaceAll("-", ""),
    appName: appName.toUpperCase(),
  }));

console.log(e);
