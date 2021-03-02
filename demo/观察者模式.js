/**
 * 实现一个简单的 EventEmitter
 */

class EventEmitter {
  constructor() {
    // handlers是一个map，用于存储事件与回调之间的对应关系
    this.handlers = {}
  }
  // on方法用于安装事件监听器，它接受目标事件名和回调函数作为参数
  on(eventName, callback) {
    if (!this.handlers[eventName]) {
      this.handlers = []
    }
    this.handlers.push(callback)
  }
  // emit方法用于触发目标事件，它接受事件名和监听函数入参作为参数
  emit(eventName, ...args) {
    if (this.handlers[eventName]) {
      this.handlers.forEech(callback => {
        callback(...args)
      })
    }
  }
  // 为事件注册单次监听器
  once() {

  }

  // 移除某个事件回调队列里的指定回调函数
  off() { }
}