let obj1 = {
  [Symbol('1')]: 2,
  name: 'yuan',
  age: 26,
  [Symbol('fn')]: function(){
    console.log('fn');
  }
}

let obj2 = {};

// 方法一  stringify
console.log(JSON.stringify(obj1) === "{}"); // false
console.log(JSON.stringify(obj2) === "{}"); // true

// 方法二： for in 循环遍历
function isEmpty1(obj) {
  for(let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty1(obj1)); // false
console.log(isEmpty1(obj2)); // true

// 方法三：jQuery的isEmptyObject()
// 此方法是jquery将2方法(for in) 进行封装，使用时需要依赖jquery
/*
var data = {};
var b = $.isEmptyObject(data);
alert(b);//true
*/

// 方法三：Object.getOwnPropertyNames()和 Object.getOwnProperty-Symbols()
function isEmpty2(obj) {
  let arr1 = Object.getOwnPropertyNames(obj);
  let arr2 = Object.getOwnPropertySymbols(obj);
  return arr2.length ===0 && arr1.length ===0 ? true : false;
}
function isEmpty3(obj) {
  return Reflect.ownKeys(obj).length;
}
console.log(isEmpty2(obj1)); // false
console.log(isEmpty2(obj2)); // true
console.dir(Reflect.ownKeys(obj1));

console.log(Object.keys(obj1));


