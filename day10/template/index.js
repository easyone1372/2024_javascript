const box = document.querySelector(".box");
const container = document.querySelector(".container");
// const names = ["kim", "lee", "park"];
// const kim = "kim";
// const lee = "lee";
// const park = "park";

// box.innerHTML = `<h1>My Friend</h1>
// <ul>
// ${names.map((v) => `<li>${v}</li>`).join("")}
// </ul>`;

const books = [
  {
    title: "자바스크립트",
    author: "손흥민",
    price: 30000,
    isSale: true,
  },
  {
    title: "타입스크립트 안쓰는 법",
    author: "황희찬",
    price: 24000,
    isSale: false,
  },
  {
    title: "구글링하다가 막혔을 때 코딩하는 법",
    author: "김민재",
    price: 14000,
    isSale: true,
  },
];

// isSale: true=>가격이 10%할인된 가격으로 나타내기
const isBookSale = (book) =>
  book.isSale == true ? book.price * 0.9 : book.price;

// box.innerHTML = `
// <h1>${books.title}</h1>
// <h4>${books.author}</h4>
// <span>${isBookSale(books)}</span>
// `;

// box.innerHTML = `
// ${books
//   .map(
//     (v) => `
//     <h1>${v.title}</h1>
//     <h4>${v.author}</h4>
//     <span>${isBookSale(v)}</span>
//     `
//   )
//   .join("")}
// `;
//=> 구분을 주고 싶었는데 걍 총 9개 생성됨...음...

// box.insertAdjacentHTML('어디에','무엇을') : innerHTML와 같지만 위치도 조정할 수 있다.

//afterbegin: 맨 처음 자식으로
//beforeend: 맨 뒤 자식으로 - 보통 이거 사용함
// box.insertAdjacentHTML(
//   "beforeend",
//   `
// <h1>${books[0].title}</h1>
//  <h4>${books[0].author}</h4>
// <span>${isBookSale(books[0])}</span>
// `
// );

//내가 한거
// box.insertAdjacentHTML(
//   "beforeend",
//   `
//  ${books
//    .map(
//      (v) =>
//        `
// <h1>${v.title}</h1>
// <h4>${v.author}</h4>
// <span>${isBookSale(v)}</span>
// `
//    )
//    .join("")}
//   `
// );

//방법 1
// books.forEach((v) => {
//   box.insertAdjacentHTML(
//     "beforeend",
//     `
//     <h1>${v.title}</h1>
//     <h4>${v.author}</h4>
//     <span>${isBookSale(v)}</span>
//     `
//   );
// });

//좀더 좋은 방법..왜 안되지
const makeBook = (book) => `
<h1>${book.title}</h1>
<h4>${book.author}</h4>
<span>${isBookSale(book)}</span>
`;

books.forEach((v) => box.insertAdjacentHTML("beforeend", makeBook(v)));
