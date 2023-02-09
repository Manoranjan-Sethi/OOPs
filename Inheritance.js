class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

class Programmer extends Person {
  constructor(name, age, companyName, salary, favLanguage) {
    super(name, age);
    this.companyName = companyName;
    this.salary = salary;
    this.favLanguage = favLanguage;
  }

  sayHi() {
    return `Hii! my name is ${this.name}, I work in ${this.companyName}`;
  }
}

const Programmer1 = new Programmer("mano", 24, "N/A", 00, "javascript");

console.log(Programmer1.sayHi());
console.log(Programmer1.getName());
