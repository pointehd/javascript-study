// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
// 정렬 K번째 수

function solution(array = [], commands = [[]]) {
  var answer = [];
  commands.forEach((command) => {
    let result = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    answer.push(result[command[2] - 1]);
  });
  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

const result = solution(array, commands);
console.log(result);
