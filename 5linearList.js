class Node {
  constructor(value) {
    this.value = value;
    this.pointer = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  size() {
    return this.length;
  }
  start() {
    if (this.head === null) {
      return null;
    } else {
      return this.head;
    }
  }
  isEmpty() {
    return this.length === 0;
  }
  addLast(val) {
    if (this.head === null) {
      this.head = new Node(val);
      this.length++;
      return;
    }
    let currentNode = this.head;
    while(currentNode.pointer){
        currentNode=currentNode.pointer
    }
    const node = new Node(val);
    currentNode.pointer = node;
    this.length++;
  }
  print() {
    let values=0;
    let currentNode=this.head;
    for (let i = 0; i < this.length; i++) {
      currentNode=currentNode.pointer;
      values++;
    }
    return values
  }
}
newList = new linkedList();
newList.addLast(1);
newList.addLast(2);
newList.addLast(4);
console.log(newList.print());

