// 方法一：Array.isArray()   Es6专有的方法
const isArray1 = obj => Array.isArray(obj);

// 方法二：
const isArray2 = obj => Object.prototype.toString(obj) === '[object Array]';

// 封装
function isArray3(obj) {
  if(Array.isArray) {
    return Array.isArray(obj);
  } else {
    return Object.prototype.toString(obj) === '[object Array]';
  }
}