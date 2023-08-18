const LinkedList = require("./linkedListWithTail");

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(element) {
    this.list.prepend(element);
  }

  pop() {
    return this.list.shift();
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

const stack = new Stack();

console.log("Stack is empty?", stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);

stack.print();

console.log("Pop", stack.pop());

console.log("Peek", stack.peek());
console.log("Size:", stack.size());
