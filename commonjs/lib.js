console.log('hello commonjs');

// 定义一个模块输出的方式
exports.hello = 'world';

exports.add = function(a, b) {
  return a + b;
}
exports.obj = {
  a: 1,
  b: 2
}

setTimeout(function() {
  console.log(exports);
}, 2000)

// 这样就把exports对象给覆盖掉了，也就是说前面挂载在exports上的内容就全没有了
module.exports = function minus (a, b) {
  return a - b;
}