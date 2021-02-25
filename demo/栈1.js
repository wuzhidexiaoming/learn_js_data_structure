/*
 * 用对象模拟栈结构
 * */

class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  pop() {
    delete this.items[this.count];
    this.count--;
  }
  size() {
    return this.count;
  }
  clear() {
    this.items = {};
  }
  peek() {
    if (this.isEmpty()) {
      return "";
    } else {
      return this[0];
    }
  }
  isEmpty() {
    return this.count <= 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    // 每一次循环都是上一层加一个逗号再加上当前层，直到最后一层 妙啊！
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
