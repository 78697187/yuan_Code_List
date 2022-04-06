class EventEmitter {
  constructor(){
    this._events = {};
  }

  on(eventName, callback) {
    // 如果绑定的不是newListener 就触发改回调
    if(this._events[eventName]){
      if(this._events !== "newListener"){
        this.emit("newListener", eventName);
      }
    }

    // 由于一个事件可能注册多个回调函数，所以使用数组来存储事件队列
    const callbacks = this._events[eventName] || [];
    callbacks.push(callback);
    this._events[eventName] = callbacks;
  }

  emit(eventName, ...args) {
    const callbacks = this._events[eventName] || [];
    callbacks.forEach(callback => callback(...args));
  }

  // 取消订阅
  off(eventName, callback) {
    const callbacks = this._events[eventName] || [];

    const newCallbacks = callbacks.filter(fn => fn!=callback && fn.initialCallback != callback);
    this._events[eventName] = newCallbacks;
  }

  // 单次订阅
  once(eventName, callback) {
    // 由于需要在回调函数执行后，取消订阅当前事件，所以需要对传入的回调函数做一层包装，然后绑定包装后的函数
    const one = (...args) => {
      // 执行回调函数
      callback(...args);
      // 取消订阅当前事件
      this.off(eventName, one);
    }

    // 由于：我们订阅事件的时候,修改了原回调函数的引用，所以，用户触发off的时候不能找到对应的回调函数
    // 所以，我们需要在当前函数与用户传入的回调函数做一个绑定，我们通过自定义属性来实现
    one.initialCallback = callback;
    this.on(eventName,one);
  }
}