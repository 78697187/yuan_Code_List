/*
  题目描述：
    不能在客户端做加法，只能调用服务器的异步加法器函数，怎么实现数组相加
*/
const addRemote = (a, b) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
function add(arr) {
  return arr.reduce((prev, curr) => {
    return prev.then((res) => {
      return addRemote(res, curr);
    });
  }, Promise.resolve(0));
}
debugger;
add([1, 2, 3, 4, 5]).then((res) => {
  console.log(res);
});