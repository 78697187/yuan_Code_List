Function.prototype.myApply = function(context) {
  if(typeof this !== "function") {
    throw new Error("Type error");
  }
  let result = null;
  context = context || window;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  if(arguments[1]) {
    result = context[fnSymbol](...arguments[1]);
  }else{
    result = context[fnSymbol]();
  }
  delete context[fnSymbol];
  return result;
}