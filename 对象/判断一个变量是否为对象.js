// 方法一：typeof
// 这个方法有缺陷  [] map set 也都是对象
const isObject = obj => obj !== null && (typeof obj) === 'object';
let obj = {};
let arr = [];
console.log(isObject(obj)); // true
console.log(isObject(arr)); // true

// 使用Object.prototype.toString
// 判断一个变量是否是纯对象
//之所以使用Object.prototype.toString，而不是obj.toString
//是因为有些对象的原型可能重写了toString方法，
//所以我们要显示的去调用Object.prototype.toString方法
const isPlainObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
console.log(isPlainObject(obj));  // true
console.log(isPlainObject(arr));  // false
let promise = Promise.resolve(0);
console.log(isObject(promise));  // true
console.log(isPlainObject(promise));  // false
console.log(Object.prototype.toString.call(promise)); // [object Promise]
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call(new Map())); // [object Map]
