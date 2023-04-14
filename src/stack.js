const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  constructor() {
    this.array = [];
  }

  push(element) {
    this.array.push(element);
  }

  isEmpty() {
    return this.array.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.array.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.array[this.array.length - 1];
}
}

module.exports = {
  Stack
};
