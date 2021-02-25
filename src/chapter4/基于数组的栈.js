class Stack {
  constructor() {
    this.arr = []
    this.push = this.push.bind(this)
  }

  /**
   * 往栈顶添加元素
   * @param value
   */
  push(...value) {
    this.arr.push(...value)
    return this.arr.size()
  }

  /**
   * 删除栈顶的元素
   */
  pop() {
    return this.arr.pop()
  }

  /**
   * 返回栈顶的元素
   */
  peek() {
    return this.arr[this.arr.length - 1]
  }

  /**
   * 清空整个栈
   */
  clear() {
    this.arr = []
  }

  /**
   * 栈中元素个数
   * @returns {number}
   */
  size() {
    return this.arr.length
  }

  /**
   * 判断 栈 是否为空
   */
  isEmpty() {
    return !Boolean(this.arr.length)
  }
}


let testStack = new Stack()
console.log(testStack.constructor === Stack)
console.log(testStack.isEmpty())
testStack.push([12, 1, 2])
console.log(testStack)
console.log(testStack.arr)
console.log(testStack.isEmpty())
