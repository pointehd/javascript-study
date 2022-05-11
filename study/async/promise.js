const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    // reject(new Error("error"));
  }, 1000);
});

prom.then((count) => console.log(count)).catch(console.error); // equals (error) => console.error(error);

// callback 지옥 코드 리펙토링
class CallUser {
  getUser(id, pwd) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === "dong" && pwd === "1234") {
          resolve(1);
        } else {
          reject(new Error("not foundUser"));
        }
      }, 1000);
    });
  }
  getList(seq) {
    return new Promise((resolve, reject) => {
      if (seq === 1) {
        setTimeout(() => resolve(["ok", "no"]), 2000);
      } else {
        reject(new Error("not found list"));
      }
    });
  }
}

const promiseUser = new CallUser();
const id = prompt("id 입력");
const pwd = prompt("pwd 입력");
promiseUser
  .getUser(id, pwd)
  //   .then((seq) => seq * 2) // 메서드 체인처럼 사용가능
  .then((seq) => promiseUser.getList(seq))
  .then((list) => alert(list))
  .catch((error) => console.error(error));
