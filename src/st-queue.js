const {NotImplementedError} = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  list = null;
  lastNode = null;
  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    if (this.list === null) {
      this.lastNode = new ListNode(value);
      this.list = this.lastNode;
    } else {
      this.lastNode.next = new ListNode(value);
      this.lastNode = this.lastNode.next;
    }
  }

  dequeue() {
    const value = this.list.value;
    this.list = this.list.next;
    return value
  }

}
