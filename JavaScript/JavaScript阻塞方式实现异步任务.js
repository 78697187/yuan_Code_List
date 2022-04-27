/* https://juejin.cn/post/6989887897012797454 */

// 方案二：
/*
主要思路：
  1.将异步请求加入队列中，当队列中任务数大于0时，开始处理队列中的任务
  2.待一个任务执行完后再执行下一个任务
  3.队列中任务全部处理完后标志running状态为false

  利用好Promise没有resolve会一直阻塞的特性，
  可以实现类似Java的BlockingQueue的功能，
  异步任务依次执行，且队列空闲也不消耗资源。
*/
const queue = [];
let index = 0;
let running = false;

function request(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(index);
    }, 1000);
  })
}

// 连续点击，触发异步请求，加入任务队列
function clickMe() {
  addQueue(() => request(index++));
}

// 当队列中任务数大于0时， 开始处理队列中的任务
function addQueue(item) {
  queue.push(item);
  if(queue.length > 0 && !running) {
    running = true;
    process();
  }
}

function process() {
  const item = queue.shift();
  if(item) {
    item().then(res => {
      console.log('已处理事件' + res);
      process();
    })
  } else {
    running = false;
  }
}

// 方案一：
/* let queue = [];
let index = 0;
function clickMe(){
  queue.push({name:'click', index: index++});
}

run();
async function run() {
  while(true) {
    if(queue.length > 0) {
      let obj = queue.shift();
      let res = await request(obj.index);
      console.log('已处理事件' + res);
    } else {
      await wait(1000);
      console.log('----队列空闲中----');
    }
  }
}

function request(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(index);
    }, 1000);
  })
}

function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
} */
/*
问题：
  1.队列空闲仍在循环处理，消耗资源
  2.检测间隔时间难把握，若间隔时间过大导致队列任务处理不完，检测间隔时间过小消耗资源
*/
