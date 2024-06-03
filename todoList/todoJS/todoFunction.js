const floatingBtn = document.querySelector(".floatingBtn");
const inputText = document.querySelector(".inputText");

export const clickFloat = floatingBtn.addEventListener("click", () => {
  inputText.classList.remove("none");
  inputText.classList.add("block");
});

export const addTodoList = inputText.addEventListener("input", (e) => {
  const text = e.target.value;
  const isTextNull = text == null;
  isTextNull ? undefined : enterEvent(); //제작한 함수 입력하기 = enter이벤트
});

//enter이벤트 => addList 실행
const enterEvent = () => {
  inputText.addEventListener("keyup", (event) => {
    const isEnterEvent = event.key == "Enter";
    isEnterEvent ? addList() : undefined;
  });
};

//아ㅏ....adjectHTML그거 사용해서 html 요소 추가하는 걸로 수정하기
const addList = () => {
  const text = inputText.value;
  const todoText = document.createElement("span");
  todoText.classList.add("todoText");
  todoText.innerText = text;

  const listTextBox = document.createElement("div");
  listTextBox.classList.remove("none");
  listTextBox.classList.add("listTextBox");
  listTextBox.classList.add("block");
  listTextBox.classList.add("unChecked");
  listTextBox.appendChild(todoText);

  const listViewBox = document.querySelector(".listViewBox");
  listViewBox.appendChild(listTextBox);

  inputText.value = "";
};
