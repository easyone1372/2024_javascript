//참조: array, element, object

const coffee = {
  coffeeName: "아메리카노",
  coffeePrice: 2000,
  hasShot: true,
};

const coffee1 = {
  coffeeName: "라떼",
  coffeePrice: 2500,
  hasShot: true,
};

//book title, author, publishedYear, pages
const book = {
  title: "날개",
  author: "이상",
  publishedYear: 1936,
  pages: 300,
};

book["title"]; //날개
book.title; //날개

book.color = "green"; // color:"green"추가
delete book.pages; //pages 삭제

'author' in book // true or  false
