class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  enqueue(item) {
    const newValue = new Node(item);

    if (!this.head) {
      this.head = newValue;
      this.tail = newValue;
      return;
    }
    this.length++;

    this.tail.next = newValue;
    this.tail = newValue;
  }
  dequeue() {
    if (!this.tail) {
      return undefined;
    }

    const removedNode = this.head;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = undefined;
    }

    removedNode.next = undefined;
  }
  peek() {
    if (!this.head) {
      return undefined;
    }
    return this.head;
  }

  log() {
    return this.head;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(6);

console.log(queue.log());
queue.dequeue();

console.log(queue.log());
