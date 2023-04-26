const person = {
  name: "sanal",
  age: 12,
};
const person1 = {
  name: "sana2l",
  age: 12,
};

const newPerson = [
  person,
  person1
  
];

console.log(newPerson);

const filter = (...args) => {
  return args.filter((e) => e === 1);
};
console.log(filter(1, 2, 3));


function print({name, age }){
    console.log(name);
    console.log(age);
}

print(...newPerson);