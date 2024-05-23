const email = document.querySelector(".email");
const passWord = document.querySelector(".passWord");
const passwordCheck = document.querySelector(".passWordCheck");
const pwBox = document.querySelector("passWordbox");
const pwchBox = document.querySelector("passWordCheckbox");
const showText = document.querySelector(".showText");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

const checkList = [email, passWord, passwordCheck];
pwBox.close.style.display = "none";
pwchBox.close.style.display = "none";

email.addEventListener(
  ("input",
  (e) => {
    let a = e.target.value;
    a.includes("naver") ||
    a.includes("daum") ||
    a.includes("gmail") ||
    a.includes("kakao")
      ? email.classList.add("checked")
      : email.classList.remove("checked");
  })
);

passWord.addEventListener("input", (e) => {
  let a = e.target.value;
  a.length >= 8
    ? passWord.classList.add("checked")
    : passWord.classList.remove("checked");
});

passwordCheck.addEventListener("input", (e) => {
  let a = e.target.value;
  a == passWord.target.value
    ? passwordCheck.classList.add("checked")
    : passwordCheck.classList.remove("checked");
});

open.addEventListener("click", () => {
  showText.type = "text";
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  showText.type = "password";
  open.style.display = "block";
  close.style.display = "none";
});
