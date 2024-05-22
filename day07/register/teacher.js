const optionsClassList = [".option1", ".option2", ".option3", ".options4"];

optionsClassList.forEach((v) => {
  const option = document.querySelector(v);
  option.addEventListener("click", () => {
    option.classList.toggle("checked");
    option.classList.toggle("notChecked");

    let buttonPass = true;
    optionsClassList.forEach((v) => {
      const option = document.querySelector(v);
      if (option.classList.contains("notChecked")) {
        buttonPass = false;
      }
    });

    const button = document.querySelector(".button");
    if ((buttonPass = true)) button.classList.add("passed");
    else button.classList.remove("passed");
    
  });
});
