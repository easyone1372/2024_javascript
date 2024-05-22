const optionsClassList = [
  {
    className: ".option1",
    isChecked: false,
    msg: "[필수] 서비스 이용약관 동의",
  },
  {
    className: ".option1",
    isChecked: false,
    msg: "[필수] 개인정보 수집 이용 동의서",
  },
  {
    className: ".option1",
    isChecked: false,
    msg: "[선택] 마케팅 활용 동의",
  },
  {
    className: ".option1",
    isChecked: false,
    msg: "[선택] 광고성 정보 수신 동의",
  },
];

optionsClassList.forEach((v, i) => {
  const newDiv = document.createElement("div");
  newDiv.innerText = v.msg;
  newDiv.classList.add(v.className);
  newDiv.classList.add(v.isChecked ? "checked" : "notChecked");

  newDiv.addEventListener("click", () => {
    newDiv.classList.toggle("checked");
    newDiv.classList.toggle("notChecked");

    optionsClassList[i].isChecked = newDiv.classList.contains("checked");
    const btn = document.querySelector(".button");
    optionsClassList.every((v) => v.isChecked)
      ? btn.classList.add("passed")
      : btn.classList.remove("passed");
  });

  const optionList = document.querySelector(".optionList");
  optionList.appendChild(newDiv);
});
