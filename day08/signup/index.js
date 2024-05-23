const email = document.querySelector(".email");
const passWord = document.querySelector(".passwordInputBox");
const passwordCheck = document.querySelector(".passwordInputCheckBox");
const showText = document.querySelector(".showText");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

const checkList = [email, passWord, passwordCheck];

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
