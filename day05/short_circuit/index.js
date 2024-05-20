//단축평가[short_circuit]

// true || "Dog";  // true
// false || "Dog"; // "Dog"
// true && "Dog";  // "Dog"
// false && "Dog"; // false

const userName = prompt("유저 입력 ")
const name = userName || "guest"
console.log(`${name} 환영합니다!`)

const isLoggedIn = true//로그인 로직 아직 안배음
isLoggedIn && console.log("로그인 성공")
