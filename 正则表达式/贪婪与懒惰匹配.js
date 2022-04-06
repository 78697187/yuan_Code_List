let parseExp = /a.*?b/;  // 惰性匹配
let parseExp1 = /a.*b/;  // 贪婪匹配

console.log(parseExp);

let result = parseExp.exec("aabab");
let result1 = parseExp1.exec("aabab");
console.log(result);
console.log(result1);