const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.queue = [];
  }

  getUnderlyingList() {
    return this.queue[0];
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    this.queue.push(newNode);

    if (this.queue.length !== 1) {
      this.queue[this.queue.length - 2].next = newNode;
    }
  }

  dequeue() {
    return this.queue.shift().value;
  }
}

module.exports = {
  Queue
};