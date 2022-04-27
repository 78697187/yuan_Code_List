// 基础版
const basicClone = (target) => {
  if(typeof target === "object") {
    let cloneTarget = {};
    for(const key in target) {
      cloneTarget[key] = basicClone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
//这个版本有缺陷， 比如： 没有考虑数组

// 兼容数组
const basicClonewithArray = (target) => {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? []:{};
    for (const key in target) {
      cloneTarget[key] = basicClonewithArray(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}


// 如果对象中存在循环引用，会照成上面的程序崩溃，  如： 对象中的属性引用自己，就会进入无限循环
const cloneUseMap = (target, map=new Map()) => {
  if(typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if(map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for(const key in target) {
      cloneTarget[key] = cloneUseMap(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

// let arr = [];
// console.log(typeof arr);  // object



const basicClone1 = (target) => {
  if(typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for(let key in target) {
      cloneTarget[key] = basicClone1(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}