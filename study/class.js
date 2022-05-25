class Person {
  //   생성자는 하나
  //   constructor(){}
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // getter 와 setter 사용시 내부적으로 자동으로 사용함.
  // 필드명과 같게함.
  get age() {
    return this._age; //+ "살";
  }

  // 생성자 및 값 변경 할때 자동으로 사용
  set age(value) {
    console.log("신기");
    this._age = value < 0 ? 0 : value;
  }

  speak() {
    return `${this.name} + ${this.age}`;
  }
}

let donghyun = new Person("donghyun", -1);
let donghyun2 = new Person("donghyun2", 29);
console.log(donghyun.age);
donghyun.age = 10;

// console.log(donghyun.age()); // 별도로 사용할수는 없음.
console.log(donghyun.speak());
console.log(donghyun);
donghyun.age = -3;
console.log(donghyun.age);

console.clear();

class User {
  static count = 0;
  name = "donghyun";
  #age = 2; //private field
  constructor() {
    User.count++;
  }

  getAge() {
    return this.#age;
  }

  static getAcount() {
    return User.count;
  }
}

const user = new User();
console.log(user.name); // donghyun
console.log(user.age); // undefined
console.log(user.getAge()); //
console.log(User.getAcount()); // 1

const user2 = new User();
console.log(user2.count); // undefined
// console.log(user2.getAcount()); // 오류
console.log(User.count); // 2
console.log(User.getAcount()); // 2
console.log(user2.name); // user2 name

console.clear();

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height, color, angle) {
    super(width, height, color); // 생성자 재정의할경우 super 해야함.
    this.angle = angle;
  }
  // 오버라이딩 가능
  draw() {
    super.draw(); // 부모 키워드
    return "세모";
  }
}

const shape = new Shape(110, 10, "red");
shape.draw();
console.log(`shape : ${shape.getArea()}`);

const rectangle = new Rectangle(10, 5, "blue", 45);
rectangle.draw();
console.log(`rectangle : ${rectangle.getArea()}`);
console.log(rectangle.angle);
