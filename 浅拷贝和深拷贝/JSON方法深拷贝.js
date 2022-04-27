/*
  优点：对象和数组都可以拷贝
  缺点：方法不能拷贝
*/

let arr = {
  a: 'one',
  b: 'two',
  c: {
    name: 'Demo'
  }
}

let newArr = JSON.parse(JSON.stringify(arr));
newArr.c.name = 'dingFY';
console.log(arr);
console.log(newArr);

let arr1 = {
  a: 'one',
  b: () => {
    console.log('test')
  }
};

let newArr1 = JSON.parse(JSON.stringify(arr1));
console.log(arr1);    // {a: "one", b: ()=>{console.log('test')}}
console.log(newArr1); // {a: "one"} // 函数没有复制成功
