import { gymData } from "./data.js";

const adGymData = gymData[0].result.liteAdList.map(
  ({ gymName, gymPhotoBig, gymPhotoSmall, address, tags, program }) => ({
    gymName,
    gymPhotoBig,
    gymPhotoSmall,
    address,
    tags,
    program,
  })
);

const adListBox = document.querySelector(".adListBox");

const makeAdImageBox = (gymPhotoBig) => `<div class="adImageBox">
<img src="${gymPhotoBig}" alt="" />
</div>
`;

//어? 날아갔다ㅋㅋ

const makeAdList = (v) => {
  adListBox.insertAdjacentHTML(
    "beforeend",
    `
    <div class="adList">
    <div class="adInfoBox">
      ${makeAdImageBox(v.gymPhotoBig)}
      <div class="adInfoTextBox">
        <div class="posInfoBox">
          <div class="exType"></div>
          <div class="gymName"></div>
          <div class="extraInfo">
            <div class="star">
              <i class="fa-solid fa-star"></i>
              <span></span>
            </div>
            <span class="review"></span>
            <div class="posinfo">
              <span></span>
              <span>ㆍ</span>
              <span></span>
            </div>
          </div>
        </div>

        <div class="adPriceInfo">
          <div class="serviceInfo">
            <span class="dayInfo"></span>
            <span class="userPrice"></span>
          </div>
          <div class="priceBox">
            <div class="saleInfo">
              <span></span>
              <span class="oriPrice"></span>
            </div>

            <div class="priceInfo">
              <span class="sale"></span>
              <span class="discountPrice"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="adFreeBox">
      <div class="adFreeProgramBox">
        <span>무료 프로그램</span>
        <span></span>
      </div>
      <div class="adFreeServiceBox">
        <span>무료 서비스</span>
        <span></span>
      </div>
    </div>
  </div>
    `
  );
};
