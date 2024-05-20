// input에 메뉴를 넣고 제출 버튼 누르면
// menu에 글이 누적되면서 추가된다.

const addmenu = document.querySelector(".addMenu");
const submit = document.querySelector(".submit");
const menuList = document.querySelector(".menu");
const menu = [];

submit.addEventListener("click", () => {
  menu.push(addmenu.value);
  menuList.innerText = `${menu}`;
});
