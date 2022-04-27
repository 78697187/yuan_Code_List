// 不适用ES6提供的方法 ， 遍历
/* 参考JavaScript红宝书 p882 */
function flatten(sourceArray, flattenArray=[]) {
  for(let element of sourceArray) {
    if(Array.isArray(element)) {
      flatten(element, flattenArray);
    } else {
      flattenArray.push(element);
    }
  }
  return flattenArray;
}

// 上面的改进版， 指定打平到第几层
function flatten1(sourceArray, depth, flattenArray = []) {
  for(let element of sourceArray) {
    if(Array.isArray(element) && depth > 0) {
      flatten1(element, depth-1, flattenArray);
    } else {
      flattenArray.push(element);
    }
  }
  return flattenArray;
}

const arr = [[0], 1, 2, [3, [4, 5]], 6];
let result = flatten(arr);
// console.log(result);

let result1 = flatten1(arr, 1);
// console.log(result1);

// ES6提供的方法  Array.prototype.flat()
let array = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
let rs = array.flat(4);
let rs1 = flatten(array);
// console.log(array);
console.log(rs);
console.log(rs1);








// ES6新方法的使用案例
/*
let result2 = arr.flat();
console.log(result2);

arr.push(arr);
console.log(arr);
console.log(arr.flat());

let arr1 = [[1],[3],[5]];
console.log(arr1.map(([x]) => [x, x+1]));
console.log(arr1.map(([x]) => [x, x+1]).flat());
console.log(arr1.flatMap(([x]) => [x, x+1]));

const strs = ['Lorem ipsum dolor sit amet,', 'consectetur adipiscing elit.'];
console.log(strs.map(str => str.split(/[\W+]/)));
console.log(strs.map(str => str.split(/[\W+]/)).flat());
console.log(strs.flatMap(str => str.split(/[\W+]/)));
*/