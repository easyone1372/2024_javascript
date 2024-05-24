// [동사, 액션, 행동]
// function make(x){
//     return x+10;
// }

// const div = document.createElement('div')
// div.appendChild('.box')
// div.innerText="내용"

// f(x)=x+100
// 1->101, 2->102, 3->103,

//f(g(x))[합성 함수]
//addEventListener("click",()=>{})
//map(()=>{})

function x100(x) {
  return x + 100;
}

x100(1); //Number type
x100("123"); //string type
x100(true); //boolean type
x100([1, 2, 3, 4, 5]);
x100(() => {});
