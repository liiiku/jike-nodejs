console.log('hello world');

// 浏览器和node都有的
console.log(Date);
console.log(Math);
console.log(setTimeout);
console.log(setInterval);

// 浏览器独有的
// console.log(requestAnimationFrame);
// node 为了弥补缺少上面这个函数独有的
console.log(setImmediate);

// /Users/liruinan/project/jike-node/jike-nodejs/index.js
console.log(__filename);
// /Users/liruinan/project/jike-node/jike-nodejs
console.log(__dirname);

// 进程对象 运行这一个nodejs程序，进程的一些信息
/**
 * hrtime 是用来统计时间的 时间精度可以到微秒级 做时间统计的时候可以用这个函数
 * cpuUsage cpu占用率
 * memoryUsage 内存占用率 这两个在性能分析的时候会经常用到
 * exit
 * kill 用来管理杀进程相关的操作
 * env node所运行环境的环境变量
 * argv 用户在启动这个node进程的时候敲击的命令是怎么样的 做命令行程序的时候会用到
 */
console.log(process);

