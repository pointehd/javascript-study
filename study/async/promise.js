class CallUser {
  getUser(id, pwd, resolve, reject) {
    setTimeout(() => {
      if (id === "dong" && pwd === "1234") {
        resolve(1);
      } else {
        reject(new Error("not foundUser"));
      }
    }, 1000);
  }
  getList(seq, resolve, reject) {
    console.log(seq);
    if (seq === 1) {
      setTimeout(() => resolve(["ok", "no"]), 2000);
    } else {
      reject(new Error("not found list"));
    }
  }
}

// callback 지옥 체험하기
const callUser = new CallUser();
const id = prompt("what is your id?");
const pwd = prompt("what is your pwd?");
callUser.getUser(
  id,
  pwd,
  (user) => {
    callUser.getList(
      user,
      (list) => alert(list),
      (error) => console.error(error)
    );
  },
  (error) => console.error(error)
);
