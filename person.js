class Person {
  constructor(name) {
    this.name = name;
  }

  sayMayName() {
    return `My name is ${this.name}!`;
  }
}

module.exports = {
  Person,
};
