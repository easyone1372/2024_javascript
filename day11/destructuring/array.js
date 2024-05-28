//desctucturing: 분해

const days = ["월", "화", "수", "목", "금", "토", "일"];

// const [monday, ...rest] = days;
const [a, b, c, ...rest] = days;
//a - 월
//b - 화
//c - 수
//rest - 목금토일

const [a1, b1, c1, ...rest1] = days;
