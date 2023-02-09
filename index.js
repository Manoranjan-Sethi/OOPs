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
// console.log(person1.getName());
// console.log(person1.getAge());

class House {
  constructor(address, price, people) {
    this.address = address;
    this.price = price;
    this.people = people;
  }
  getAddress() {
    return this.address;
  }
  getPrice() {
    return this.price;
  }
  getPeople() {
    return this.people;
  }
  addPeople(addMember) {
    return this.people.push(addMember);
  }
}

const person1 = new Person("mano", 24);
const person2 = new Person("hima", 21);
const person3 = new Person("swara", 25);

const myHouse = new House("myHouseAddress", 2332412, [person1, person2]);

// console.log(myHouse);
console.log(myHouse.getPeople());
myHouse.addPeople(person3);
console.log(myHouse.getPeople());

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
