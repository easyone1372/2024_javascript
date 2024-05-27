//함수 만들기

//my_string n result
//"hello"  3 "hhheeellllllooo"

const solution1 = (my_string, n) => {
  const z = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(z);
};

solution1("iPhone", 3);

// 2.
// myString result
// "abstract algebra" "AbstrAct AlgebrA"
// "PrOgRaMmErs"  "progrAmmers"

const func2 = (myString) =>
  [...myString].map((v) => (v == "a" ? "A" : v.toLowerCase())).join("");

console.log(func2("abstract algebra"));
console.log(func2("PrOgRaMmErs"));
