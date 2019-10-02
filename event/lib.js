// 极客时间有一个新课更新，就会通知到你，然后你就会去观看
const EventEmmiter = require('events').EventEmitter;

class GeekTime extends EventEmmiter {
  constructor() {
    super();

    // 没过3秒就有一个新课上线
    setInterval(() => {
      this.emit('newlesson', {
        price: Math.random() * 100
      })
    }, 3000);
  }
}

const geektime = new GeekTime();

module.exports = geektime;