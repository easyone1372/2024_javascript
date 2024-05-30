//card - image, title, author, description 2열로 나타내기
//이미지는 https://picsum.photos/200 사용

//함수 선언

const makeTitle = (title) => `<span class="title">${title}</span>`;
const makeAuthor = (author) => `<span class="author">${author}</span>`;
const makeDescription = (description) =>
  `<span class="description">${description}</span>`;

const bookData = fetch("https://fakerapi.it/api/v1/books?_quantity=20");
//하나 나오는 거 성공함 ==========================================

// bookData
//   .then((v) => v.json())
//   .then((v) => {
//     // v.data
//     const container = document.querySelector(".container");
//     container.insertAdjacentHTML(
//       "beforeend",
//       `
//     <div class="cardBox">
//     <div class="imageBox">
//     <img src="https://picsum.photos/300" alt="" />
//     </div>
//         <div class="infoBox">
//         <span class="title">${v.data[0].title}</span>
//         <span class="author">${v.data[0].author}</span>
//         <span class="description">${v.data[0].description}</span>
//         </div>
//       </div>
//     `
//     );
//   });

//데이터 파싱 문제 진짜 미치겠네 아오

bookData
  .then((v) => v.json())
  .then((data) => {
    // v.data
    const container = document.querySelector(".container");
    data.data.forEach((book) =>
      container.insertAdjacentHTML(
        "beforeend",
        `
    <div class="cardBox">
    <div class="imageBox">
    <img src="https://picsum.photos/300" alt="" />
    </div>
        <div class="infoBox">
          ${makeTitle(book.title)}
          ${makeAuthor(book.author)}
          ${makeDescription(book.description)}

        </div>
      </div>
    `
      )
    );
  });
