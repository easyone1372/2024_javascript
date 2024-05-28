const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

// users.map((v) => ({name:v.name}))
//아래 두 개 다 동일한 결과값을 출력
users.map((v) => ({ name: v.name, age: v.age }));
users.map(({ name, age }) => ({ name, age }));
users.map(({ name, age }) => ({ nickName: name, KoranAge: age }));
users.map(({ name: nickName, age: koreanAge }) => ({ nickName, koreanAge }));
