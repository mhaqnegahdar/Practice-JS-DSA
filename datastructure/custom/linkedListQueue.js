const LinkedList = require("./linkedListWithTail");

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(element) {
    this.list.append(element);
  }

  dequeue() {
    return this.list.pop();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

const queue = new Queue();

console.log("is Empty? ", queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();

console.log("Dequeue", queue.dequeue());

console.log("Peek", queue.peek());
console.log("Size:", queue.size());
