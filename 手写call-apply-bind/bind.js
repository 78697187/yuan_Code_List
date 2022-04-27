// 简单实现  (不完善)
Function.prototype.myBind = function(context){
  if(typeof this !== "function"){
    throw new Error('Type error');
  }

  // this指向调用的函数
  let self = this;

  let args = arguments.slice(1);

  return function(){
    // 这里的 arguments是指调用bind返回的函数时传入的参数
    let bindArgs = [...arguments];
    return self.apply(context, args.concat(bindArgs));
  }
}

