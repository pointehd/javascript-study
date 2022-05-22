function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "apple";
}

async function getBanana() {
  await delay(3000);
  return "banana";
}

// callback 지옥
function pickFruits1() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
// pickFruits1().then((str) => console.log(str));

// 단점 apple 과 banana가 관계가 없는데 연속 실행되지 않음.
async function pickFruits2() {
  // error handle => try ~ catch ~
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

// pickFruits2().then((str) => console.log(str));

async function pickFruits3() {
  // error handle => try ~ catch ~
  const applePromise = getApple(); // 프로미스를 생성하자마자 실행함
  const bananaPromis = getBanana();
  const apple = await applePromise; // 값 받아오면 실행
  const banana = await bananaPromis;
  return `${apple} + ${banana}`;
}
// pickFruits3().then((str) => console.log(str));

// 모든 promise 를 처리하는 Promise.all
async function pickAllFruits() {
  // error handle => try ~ catch ~
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join("+")
  );
}

pickAllFruits().then((str) => console.log(str));

// 가장 빠른 결과값을 반환하는 Promise.race
async function pickOnlyOneFruit() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOneFruit().then(console.log);

// await promise를 기다린다.
// async promise 를 리턴한다(?)
