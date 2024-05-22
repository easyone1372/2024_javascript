const colorList = ["red", "orange", "yellow", "green", "blue"];
const sizeList = ["small", "medium", "large", "x-large", "xx-large"];
const radiusList = [
  "borderRadiusZero",
  "borderRadiusTen",
  "borderRadiusTwenty",
];

const makeButtons = (x, y) => {
  x.forEach((v) => {
    const btn = document.createElement("button");
    btn.innerText = v;
    btn.addEventListener("click", () => {
      const box = document.querySelector(".box");
      x.forEach((v) => box.classList.remove(v));
      box.classList.add(v);
    });
    const listTag = document.querySelector(y);
    listTag.appendChild(btn);
  });
};

makeButtons(colorList, ".colorBtnList");
makeButtons(sizeList, ".sizeBtnList");
makeButtons(radiusList, ".radiusBtnList");

//렉시컬 스코프[lexical(맥락적 구역)]
// colorList.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", () => {
//     const box = document.querySelector(".box");
//     colorList.forEach((v) => box.classList.remove(v));
//     box.classList.add(v);
//   });
//   const colorBtnList = document.querySelector(".colorBtnList");
//   colorBtnList.appendChild(btn);
// });

// sizeList.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", () => {
//     const box = document.querySelector(".box");
//     sizeList.forEach((v) => {
//       box.classList.remove(v);
//     });
//     box.classList.add(v);
//   });
//   const sizeBtnList = document.querySelector(".sizeBtnList");
//   sizeBtnList.appendChild(btn);
// });

// radiusList.forEach((v) => {
//   const btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", () => {
//     const box = document.querySelector(".box");
//     radiusList.forEach((v) => {
//       box.classList.remove(v);
//     });
//     box.classList.add(v);
//   });
//   const radiusBtnList = document.querySelector(".radiusBtnList");
//   radiusBtnList.appendChild(btn);
// });
