const person = {
  name: "john",
  age: 21,
  major: "computer",
};

// const { name, major } = person; //빼기
// const { name: realName, major: superMajor } = person; //빼면서 별명 붙이기

// realName // john

const person1 = {
  name: "Jenny",
  address: {
    city: "bupyeong",
    zipCode: 1004,
  },
};

const { address } = person1;
//꼭대기에서 가져오는 것
const {
  address: { zipCode: zip },
} = person1;
//내려와서 가져오는 것
const { zipCode: zip1 } = person1.address;

const user = {
  username: "alice",
  email: "alice@example.com",
  details: {
    firstName: "Alice",
    lastName: "Doe",
  },
};
const { lastName: familyName } = user.details;
console.log(familyName); //'Doe'
