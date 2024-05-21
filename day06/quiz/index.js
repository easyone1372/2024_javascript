//색깔 다섯개
//사이즈 5개
//테두리 사이즈 3개

const box = document.querySelector(".box");
const colorBtnBox = document.querySelector(".colorBtn_box");
const sizeBtnBox = document.querySelector(".sizeBtn_box");
const radiusBtnBox = document.querySelector(".radiusBtn_box");

const colorArr = ["red", "yellow", "green", "blue", "purple"];
const sizeHng = ["xsmall", "small", "medium", "large", "xlarge"];
const radiusArr = ["radiusZero", "radiusSmooth", "radiusRound"];

// const colorHng = ["빨강색", "노랑색", "초록색", "파랑색", "보라색"];

colorArr.forEach((v) => {
  const colorBtn = document.createElement("button");
  colorBtn.innerText = v;
  colorBtn.addEventListener("click", () => {
    const colorText = colorBtn.innerText;
    box.classList.remove("red", "yellow", "green", "blue", "purple");
    box.classList.add(`${colorText}`);
  });
  colorBtnBox.appendChild(colorBtn);
});

sizeHng.forEach((v) => {
  const sizeBtn = document.createElement("button");
  sizeBtn.innerText = v;
  sizeBtn.addEventListener("click", () => {
    const sizeText = sizeBtn.innerText;
    box.classList.remove("xsmall", "small", "medium", "large", "xlarge");
    box.classList.add(`${sizeText}`);
  });
  sizeBtnBox.appendChild(sizeBtn);
});

radiusArr.forEach((v) => {
  const radiusBtn = document.createElement("button");
  radiusBtn.innerText = v;
  radiusBtn.addEventListener("click", (v) => {
    const radiusText = radiusBtn.innerText;
    box.classList.remove("radiusZero", "radiusSmooth", "radiusRound");
    box.classList.add(`${radiusText}`);
  });
  radiusBtnBox.appendChild(radiusBtn);
});
