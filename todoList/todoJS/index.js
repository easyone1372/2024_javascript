import { enterEvent } from "./todoFunction.js";
// import { checkEvent } from "./todoFunction.js";
import { clickAddEvent } from "./todoFunction.js";

const dateYoilList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let todoDate = new Date();
let todoDay = dateYoilList[todoDate.getDay()];
let todoNum = todoDate.getDate();

// // const dateYoil = document.querySelector(".dateYoil");
// const dateYoilBox = document.querySelector(".dateYoilBox");
// dateYoilList.forEach((v) => {
//   const dateYoil = document.createElement("span");
//   dateYoil.innerText = v;
//   dateYoilBox.appendChild(dateYoil);
// });
