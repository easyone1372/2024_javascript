// input; window.prompt
// output: html
// 1. 유저에게 밑변과 높이를 입력받고 정삼각형의 넓이 나타내기
// 2. 한국 돈 원을 입력하면 엔하로 바꿔주기

const length = Number(window.prompt("삼각형의 밑변을 입력하세요"));
const height = Number(window.prompt("삼각형의 높이를 입력하세요"));
// const triangle = length * height * 0.5;

const answer1 = document.createElement("div");
answer1.innerText = `정삼각형의 넓이는 ${length * height * 0.5}이다`;

//------------------
const won = Number(window.prompt("얼마인지 입력하세요"));
const yen_rate = won * 0.114;
const exchange = document.createElement("div");
exchange.innerText = `엔:${won * yen_rate}`;

document.body.appendChild(exchange);
document.body.appendChild(answer1);
