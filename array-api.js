{
  // 1. join
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

{
  // 2. split
  const fruits = "사과, 키위, 바나나, 앵두";
  const result = fruits.split(", ", 2);
  console.log(result);
}

{
  // 3. reverse 배열을 변경
}

{
  // 4. splice 배열 자르기 기존 배열 수정
  console.log("**splice");
  const fruits = ["apple", "banana", "orange"];
  const cut = fruits.splice(0, 1);
  console.log(fruits);
  console.log(cut);
}

{
  // splice 배열 자르기 원하는부분만 리턴해서받아옴
  console.log("**slice");
  const fruits = ["apple", "banana", "orange"];
  const cut = fruits.slice(0, 1);
  console.log(cut);
  console.log(fruits);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 88),
  new Student("C", 30, true, 90),
  new Student("D", 40, true, 66),
  new Student("E", 10, true, 88),
];

{
  // 5. find
  const result = students.find((s) => s.score === 90);
  console.log(result);
}

{
  // 6. filter
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

{
  // 7. map
  const result = students.map((student) => student.age);
  console.log(result);
}

{
  // 8. some 하나라도 조건이 맞는지, every 모두가 맞는지
  const result = students.some((studyent) => studyent.score < 50);
  console.log(result);

  const result2 = students.every((students) => students.score < 50);
  console.log(result2);
}

{
  const result = students.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

{
  const result = students.map((student) => student.score).sort((a, b) => b - a);
  console.log(result);
}
