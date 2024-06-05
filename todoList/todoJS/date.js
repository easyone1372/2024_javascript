//달력 추가 및 스크롤 기능 추가하기

/*
  1. 일단 한달 날짜를 모두 받아와서 dateList에 집어넣기 - 완
  2. dateList를 forEach..?돌?려서? dateYoilList와 대입하여 한달 요일 모두 반환하도록 하기 - 완
  3. 요일 밑에 날짜도 반환하도록 하기 - 완
  4. 오늘 요일은 강조하기 - 완
  5. 다른 날짜 선택 - 위 작업 모두 성공하고 시도하기
*/

const dateYoilList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dateList = [];
const dayofWeekList = [];
const dateofWeekList = [];
//날짜 클릭을 위한 변수
let currentSelectedDateElement = null;

//한달 첫날과 막일 계산
const today = new Date();
const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

// console.log(typeof todayDate); //Number
// console.log(startDate, endDate);

//한달 날짜 모두 받아오기
const getDateAmount = (startDate, endDate) => {
  while (startDate <= endDate) {
    // dateList.push(startDate.toDateString());
    dateList.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }
  //   return console.log(dateList);
};

getDateAmount(startDate, endDate);

//한달 요일 받아와서 list에 집어넣기
dateList.forEach((date) => {
  const dayofWeek = date.getDay();
  const dayofWeekString = dateYoilList[dayofWeek];
  //   console.log(`${date.toDateString()},${dayofWeekString}`);
  dayofWeekList.push(dayofWeekString);
});

dateList.forEach((date) => {
  const dateofWeek = date.getDate();
  dateofWeekList.push(dateofWeek);
});

//요일 대입해서 출력하기
export const addDate = () => {
  const todayDate = today.getDate();

  dayofWeekList.forEach((date) => {
    const dateYoilbox = document.createElement("span");
    const dateBox = document.createElement("div");

    dateYoilbox.innerText = date;

    dateYoilbox.classList.add("dateYoilBox");
    dateBox.classList.add("dateBox");

    const dateScrollBox = document.querySelector(".dateScrollBox");
    dateBox.appendChild(dateYoilbox);
    dateScrollBox.appendChild(dateBox);
  });

  dateofWeekList.forEach((date) => {
    const dateNumBox = document.createElement("div");
    dateNumBox.innerText = date;
    dateNumBox.classList.add("dateNumBox");

    if (Number(date) === todayDate) {
      dateNumBox.classList.add("today");
    }
    const dateBox = document.querySelector(".dateBox");
    dateBox.appendChild(dateNumBox);
    const dateScrollBox = document.querySelector(".dateScrollBox");
    dateScrollBox.appendChild(dateBox);
  });
};

//날짜 클릭 이벤트
export const handelDateclick = () => {
  document.addEventListener("click", (event) => {
    //날짜를 클릭했을 때 가까운 dateNumBox추적
    if (event.target.classList.contains("dateNumBox")) {
      const dateBtn = event.target;

      //클릭한 날짜가 오늘이 아니고, 다른 날짜가 클릭되어있을 경우 다른 날짜의 clickDate 제거
      if (
        currentSelectedDateElement &&
        currentSelectedDateElement !== dateBtn
      ) {
        currentSelectedDateElement.classList.remove("clickDate");
      }

      dateBtn.classList.toggle("clickDate");
      currentSelectedDateElement = dateBtn;

      const todayDate = today.getDate();
      const clickedDate = parseInt(dateBtn.innerText);

      if (clickedDate === todayDate) {
        dateBtn.classList.remove("clickDate");
      }
    }
  });
};
