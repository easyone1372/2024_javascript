import { data } from "./data.js";
import { makeHosData } from "./hosData.js";

const container = document.querySelector(".container");

const makeInfoImageBox = (titleImage) =>
  `<div class="infoImageBox">
    <img src="${titleImage.titleImage}"></div>`;

const makeDosiGungu = (hospitalSiGunGu) =>
  ` <span class="dosiGungu">${hospitalSiGunGu.hospitalSiGunGu}</span>`;
const makeHospitalName = (hospitalName) =>
  ` <span class="hosName">${hospitalName.hospitalName}</span>`;

const makeTitle = (title) => `<span class="title">${title.title}</span>`;

const makeStar = (rating) => `<span class="star">${rating.rating}</span>`;
const makeRatingcount = (ratingCount) =>
  `<span class="starRate">${ratingCount.ratingCount}</span>`;
const makePrice = (discountedCost) =>
  `<span class="price">${discountedCost.discountedCost}</span>`;
const makeVAT = (showVatBadge) => {
  const isVatTrue = showVatBadge === true;
  return isVatTrue ? `<span class="includeVAT"> vat포함 </span>` : null;
};

//undefined 발생, 왜???
//=> 데이터를 타고타고 들어가서 찾아야함. 가장 상위에서 .map한다고 해결되지 않음.
const makeList = makeHosData[0].pageProps.data.events.data.map(
  ({
    titleImage,
    hospitalSiGunGu,
    hospitalName,
    title,
    rating,
    ratingCount,
    discountedCost,
    showVatBadge,
  }) => ({
    titleImage,
    hospitalSiGunGu,
    hospitalName,
    title,
    rating,
    ratingCount,
    discountedCost,
    showVatBadge,
  })
);

// hosData.forEach(
//   ({
//     titleImage,
//     hospitalsiGungu,
//     hospitalName,
//     title,
//     rating,
//     ratingCount,
//     discountedCost,
//     showVatBadge,
//   }) =>
//     container.insertAdjacentHTML(
//       "beforeend",
//       ` <div class="infoBox">
// ${makeInfoImageBox({ titleImage })}
// <div class="infoText">
//   <span class="userSelect"></span>
//   <div class="hosInfo">
//     ${makeDosiGungu({ hospitalsiGungu })}
//     ${makeHospitalName({ hospitalName })}
//   </div>
//  ${makeTitle({ title })}
//   <div class="grade">
//     <span class="star"><i class="fa-solid fa-star"></i></span>
//     ${makeStar({ rating })}
//     ${makeRatingcount({ ratingCount })}
//   </div>
//   <div class="priceBox">
//     ${makePrice({ discountedCost })}
//     ${makeVAT({ showVatBadge })}
//   </div>
// </div>
// </div>`
//     )
// );

// const makeContainer = (v) =>
//   container.insertAdjacentHTML(
//     "beforeend",
//     ` <div class="infoBox">
//     ${makeInfoImageBox(v.titleImage)}
//     <div class="infoText">
//       <span class="userSelect"></span>
//       <div class="hosInfo">
//         ${makeDosiGungu(v.hospitalSiGunGu)}
//         ${makeHospitalName(v.hospitalName)}
//       </div>
//      ${makeTitle(v.title)}
//       <div class="grade">
//         <span class="star"><i class="fa-solid fa-star"></i></span>
//         ${makeStar(v.rating)}
//         ${makeRatingcount(v.ratingCount)}
//       </div>
//       <div class="priceBox">
//         ${makePrice(v.discountedCost)}
//         ${makeVAT(v.showVatBadge)}
//       </div>
//     </div>
//     </div>`
//   );

const makeContainer = (v) =>
  container.insertAdjacentHTML(
    "beforeend",
    ` <div class="infoBox">
      ${makeInfoImageBox(v)}
      <div class="infoText">
        <span class="userSelect"></span>
        <div class="hosInfo">
          ${makeDosiGungu(v)}
          ${makeHospitalName(v)}
        </div>
       ${makeTitle(v)}
        <div class="grade">
          <span class="star"><i class="fa-solid fa-star"></i></span>
          ${makeStar(v)}
          ${makeRatingcount(v)}
        </div>
        <div class="priceBox">
          ${makePrice(v)}
          ${makeVAT(v)}
        </div>
      </div>
      </div>`
  );

makeList.forEach((v) => makeContainer(v));
