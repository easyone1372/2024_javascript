// 클라이언트[프론트엔드] <-> 서버[백엔드]
// http 방식으로 데이터를 주고 받음
// 1. stateLess[request//response] -서로 모르는게 대원칙
// 2. 쿠키, 세션, JWT
// -1. 무신사 들어옴
// -2. 로그인을 함[쿠키, 세션, JWT를 받음]
// 3. restful api
///webtoon/list/monday/id=1234
// ./netflix/best/id=23452

//fetch() // 요즘 사용함, 이해못함 근양 받아들이기
const data = fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
data.then((v) => v.json()).then((v) => console.log(v)); //데이터를 가져온 다음에

const data1 = fetch("https://fakerapi.it/api/v1/companies?_quantity=20");
data1.then((v) => v.json()).then((v) => console.log(v));

