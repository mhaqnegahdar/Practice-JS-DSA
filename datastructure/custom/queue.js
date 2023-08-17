class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
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

// Optimized Queue - using object

class OptQueue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const optQueue = new OptQueue();

console.log("is Empty? ", optQueue.isEmpty());
optQueue.enqueue(10);
optQueue.enqueue(20);
optQueue.enqueue(30);

optQueue.print();

console.log("Dequeue", optQueue.dequeue());

console.log("Peek", optQueue.peek());
console.log("Size:", optQueue.size());

optQueue.print();
