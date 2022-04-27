// 参考：https://github.com/mqyqingfeng/Blog/issues/22
let count = 1;
let container = document.getElementById('container');

function getUserAction(e) {
  console.log("this:", this);
  console.log("event:", e);

  container.innerHTML = count++;
}

container.onmousemove = debounce(getUserAction, 1000);


function debounce(fn, delay = 1000) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      clearTimeout(timer)
    }, delay);
  }
}



// 不立即执行
function debounce1(func, wait) {
  let timeout;
  return function() {
    const context = this;   // 保存事件调用对象
    const args = arguments;  // 保存event事件对象

    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  }
}

// 立即执行的版本
// 希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
function debounce2(func, wait, immediate=true) {
  let timeout;
  return function () {
    const context = this;   // 保存事件调用对象
    const args = arguments;  // 保存event事件对象

    timeout && clearTimeout(timeout);
    if(immediate) {
      // 如果已经执行过，不再执行
      let callNow = !timeout;
      timeout = setTimeout(function(){
        timeout = null;
      }, wait);
      if(callNow) func.apply(context, args);
    }
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  }
}






/*
没加防抖版本
let count = 1;
let container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
}

container.onmousemove = getUserAction;
*/
