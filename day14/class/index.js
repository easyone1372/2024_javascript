//String, Boolean, Date, Promise, Object, ...

class Student {
  // 변수 - 속성/명사/상태: 대학교, 전공, 학년, 학점, 과제들, 학번, 입학년도, 수강과목

  constructor(a, b) {
    this.name = a;
    this.university = "연세대학교";
    this.major = b;
  }
  intro() {
    console.log(
      `저는 ${this.name}이고, ${this.university}이고, ${this.major}입니다.`
    );
  }
  // 함수 - 동작/동사/   : 술마시기, 졸작하기, 피곤하기, 과제하기, 교수 저주하기, 논문쓰기, 야작하기

  drinking(x) {
    console.log(`${x} 마시고싶다.`);
  }
  makeMasterPiece() {
    console.log("졸작합니다");
  }
}

// const kim = new Student("김민재", "컴퓨터공학과");
// const lee = new Student("이지민", "정치외교학과");

// kim.intro();
// kim.drinking("테라");
// lee.intro();
// lee.drinking("카스");

//==============실전=================
class HardButton {
  constructor(a, b) {
    this.backgroundColor = a;
    this.content = b;
  }

  render() {
    const newDiv = document.createElement("div");
    newDiv.style.height = "60px";
    newDiv.style.width = "190px";
    newDiv.style.padding = "10px 16px";
    newDiv.style.backgroundColor = this.backgroundColor;
    newDiv.innerText = this.content;

    const test = document.querySelector(".test");
    test.appendChild(newDiv);
  }
}

const a = new HardButton("#3498db", "레스토랑");
const b = new HardButton("#e67e22", "메가커피");
const c = new HardButton("#1abc9c", "배고프다");
a.render();
b.render();
c.render();
