// 如果是数组，我们可以利用数组的一些方法比如：slice、concat 返回一个新数组的特性来实现拷贝


// concat()
let arr = ['one', 'two', 'three'];
let newArr = arr.concat();
newArr.push('four');

console.log(arr);
console.log(newArr);

// slice()
let arr1 = ['one', 'two', 'three'];
let newArr1 = arr.slice();
newArr1.push('four');

console.log(arr1);
console.log(newArr1);