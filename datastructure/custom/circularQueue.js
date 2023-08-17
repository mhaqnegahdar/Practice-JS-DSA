class CircularQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.maxSize === this.front;
  }

  enqueue(item) {
    if (this.isFull()) {
      console.log("Queue is full. Cannot enqueue.");
      return false;
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.maxSize;
    }

    this.queue[this.rear] = item;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Cannot dequeue.");
      return null;
    }

    const item = this.queue[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.maxSize;
    }

    return item;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return null;
    }

    return this.queue[this.front];
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return;
    }

    let current = this.front;
    while (current !== this.rear) {
      console.log(this.queue[current]);
      current = (current + 1) % this.maxSize;
    }
    console.log(this.queue[current]);
  }
}

// Example usage:
const circularQueue = new CircularQueue(5);

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
circularQueue.enqueue(60);

console.log("Queue after enqueues:");
circularQueue.display();

console.log("Dequeued item:", circularQueue.dequeue());

console.log("Queue after dequeue:");
circularQueue.display();

console.log("Peek:", circularQueue.peek());
