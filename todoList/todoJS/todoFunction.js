const inputText = document.querySelector(".inputText");
const floatingBtn = document.querySelector(".floatingBtn");

//todo list 추가 함수
export const enterEvent = (event) => {
  const isEnterEvent = event.key === "Enter";
  if (isEnterEvent) addList();
};

export const clickAddEvent = () => {
  floatingBtn.addEventListener("click", addList);
};

inputText.addEventListener("keyup", enterEvent);

const addList = () => {
  const text = inputText.value.trim();
  if (text === "") return;

  const todoText = document.createElement("span");
  todoText.classList.add("todoText");
  todoText.innerText = text;

  const listTextBox = document.createElement("li");
  listTextBox.classList.remove("none");
  listTextBox.classList.add("listTextBox", "block", "unChecked");
  listTextBox.appendChild(todoText);
  listTextBox.insertAdjacentHTML(
    "beforeend",
    `<span class="listCheck">
  <i class="fa-regular fa-circle-check"></i>
</span>`
  );

  const listViewBox = document.querySelector(".listViewBox");
  listViewBox.appendChild(listTextBox);

  inputText.value = "";
};
clickAddEvent();

//해야하는거
/*
  할일리스트 개수 표시되게하기
  달력 스크롤
  체크 uncheck check 되게 하기 

*/
