const todoListData = {};

//모든 리스트를 만들어두기
const start = new Date(2024, 0, 2);

Array(365)
  .fill(0)
  .forEach((v, i) => {
    const date = start.toISOString().split("T")[0];
    const pureDate = date.replaceAll("-", "");
    todoListData[pureDate] = [];
    start.setDate(start.getDate() + 1);
  });

console.log(todoListData);

//실행할때마다 매번 발생하는데 local storage에 집어넣어 방지함.
