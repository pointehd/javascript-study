function sum(a, b) {
  return a + b;
}

function doSometing(some) {
  console.log(some);
  console.log(some(5, 6));
}

doSometing(sum);
console.log("=========");

doSometing(() => sum(1, 2));
console.log("=========");

doSometing(sum(1, 2));
