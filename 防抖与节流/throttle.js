let count = 1;
let container = document.getElementById('container');

function getUserAction(e) {
  console.log("this:", this);
  console.log("event:", e);

  container.innerHTML = count++;
}

container.onmousemove = throttle(getUserAction, 1000);

// 事件戳
function throttle1(fn, wait = 1000) {
  let previous = 0;

  return function() {
    let now = +new Date();
    const context = this;
    const args = arguments;

    if(now - previous > wait) {
      fn.apply(context, args);
      previous = now;
    }
  }
}

// 使用定时器
function throttle(fn, wait = 1000) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    if(!timeout) {
      timeout = setTimeout(function() {
        timeout = null;
        fn.apply(context, args);
      }, wait);
    }
  }
}


/*
所以比较两个方法：
  第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行
  第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件
*/

// 我想要一个有头有尾的！就是鼠标移入能立刻执行，停止触发的时候还能再执行一次！
function throttle2(fn, wait=1000) {
  let timeout, context, args, result;
  let previous = 0;

  const later = function() {
    previous = +new Date();
    timeout = null;
    fn.apply(context, args);
  }

  const throttled = function() {
    let now = +new Date();
    // 下次触发fn的剩余事件
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 如果没有剩余的时间了或者你改了系统时间
    if(remaining <= 0 || remaining > wait) {
      if(timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      fn.apply(context, args);
    } else if(!timeout) {
      timeout = setTimeout(later, remaining);
    }
  }
  return throttled;
}



// let arr;
// console.log(arr);  // undefined