//함수 호출
import { data } from "./data.js";
import { makeHosData } from "./hosData.js";

const container = document.querySelector(".container");
const catalogueUL = document.querySelector(".catalogueUL");

//함수 선언 파트=============================================================

//카탈로그 출력 함수

const makeCatalogueList = data.data.map(({ name, normalIconUrl }) => ({
  name,
  normalIconUrl,
}));

const makeIcon = (normalIconUrl) => `
<div class="catalogueIcon">
  <img src="${normalIconUrl.normalIconUrl}" alt="" />
</div>`;

const makeCText = (name) => `<span class="catalogueText">${name.name}</span>`;

const makeCatalogue = (v) =>
  catalogueUL.insertAdjacentHTML(
    "beforeend",
    `
    <li class="catalogueBox">
      ${makeIcon(v)}
      ${makeCText(v)}
    </li>
  `
  );

//리스트 출력 함수

const makeInfoImageBox = (titleImage) =>
  `<div class="infoImageBox">
    <img src="${titleImage.titleImage}"></div>`;

const makeDosiGungu = (hospitalSiGunGu) =>
  ` <span class="dosiGungu">${hospitalSiGunGu.hospitalSiGunGu}</span>`;
const makeHospitalName = (hospitalName) =>
  ` <span class="hosName">${hospitalName.hospitalName}</span>`;

const makeTitle = (title) => `<span class="title">${title.title}</span>`;

const makeStar = (rating) => `<span class="starRating">${rating.rating}</span>`;
const makeRatingcount = (ratingCount) =>
  `<span class="starRate">(${ratingCount.ratingCount})</span>`;
const makePrice = (discountedCost) => {
  const slicePrice = discountedCost.discountedCost / 10000;
  return `<span class="price">${slicePrice}만원</span>`;
};

const makeVAT = (showVatBadge) => {
  const isVatTrue = showVatBadge.showVatBadge === true;
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

//mainContainer hospitalList 출력 함수 생성
const makeContainer = (v) =>
  container.insertAdjacentHTML(
    "beforeend",
    ` <div class="infoBox">
      ${makeInfoImageBox(v)}
      <div class="infoText">
        <span class="userSelect"></span>
        <div class="hosInfo">
          ${makeDosiGungu(v)} ㆍ
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

//출력
makeCatalogueList.forEach((v) => makeCatalogue(v));
makeList.forEach((v) => makeContainer(v));
