const input = document.querySelector(".input");
const openBtn = document.querySelector(".open");
const closedBtn = document.querySelector(".closed");

closedBtn.style.display = "none";

openBtn.addEventListener("click", () => {
  input.type = "text";
  closedBtn.style.display = "block";
  openBtn.style.display = "none";
});

closedBtn.addEventListener("click", () => {
  input.type = "password";
  closedBtn.style.display = "none";
  openBtn.style.display = "block";
});
