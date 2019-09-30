var lib = require('./lib.js');
console.log(lib);
// 这里的lib 和 lib.js中的exports是同一个引用
lib.name = 'nodejs';