/* eslint-disable no-console */

const person = {
  name: "Maria",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const greetFunction = person.greet.bind(person);

greetFunction();
person.greet();
