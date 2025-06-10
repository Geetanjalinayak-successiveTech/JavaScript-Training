//Q2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  //methods

  getArea() {
    console.log("Area");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return this.width*this.height;
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (1 / 2) * this.width * this.height;
  }
}

let rec = new Rectangle(5, 10);
let tri = new Triangle(5, 10);

console.log(rec.getArea());
console.log(tri.getArea());
