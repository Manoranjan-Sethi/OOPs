function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

Book.prototype.getName = function () {
  return `${this.author} is the author of ${this.name} book`;
};

Book.prototype.setYear = function (changeYear) {
  this.year = changeYear;
  this.modified = true;
};

const book1 = new Book("adsfsf", "John Smith", "2011");
// console.log(book1.getName());
console.log(book1);
book1.setYear("2022");
console.log(book1);
