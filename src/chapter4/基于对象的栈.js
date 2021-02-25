/*
* push
* pop
* peek
* size
* clear
* toString
* isEmpty
* */
class Stack {
  constructor() {
    this.count = 0
    this.arr = {}
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.count
  }

  push(value) {
    this.arr[this.count] = value
    this.count++
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    let res = this[this.count]
    delete this[this.count]
    return res
  }

  peek() {
    return this[this.count--]
  }

  clear() {
    this.count = 0
    this.arr = {}
  }

  // 方法1 妙的很
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let res = this.arr[0]
    for (let i = 1; i < this.count; i++) {
      res = `${res},${this.arr[i]}`
    }
    return res
  }

}

let arr = new Stack()
arr.push(1)
arr.push(5)
console.log(arr.isEmpty())
console.log(arr.toString())
