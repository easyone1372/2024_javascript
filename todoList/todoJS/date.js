const dateYoilList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let todoDate = new Date();
let todoDay = todoDate.getDay();
let todoNum = todoDate.getDate();

// const dateYoil = document.querySelector(".dateYoil");
const dateYoilBox = document.querySelector(".dateYoilBox");
dateYoilList.forEach((v) => {
  const dateYoil = document.createElement("span");
  dateYoil.innerText = v;
  dateYoilBox.appendChild(dateYoil);
});

