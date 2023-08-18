class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  shift() {
    if (this.isEmpty()) return null;

    const value = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return value;
  }

  pop() {
    if (this.isEmpty()) return null;

    const value = this.tail.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }

  removeIndex(index) {
    if (index < 0 || index >= this.size) return false;

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.size - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      const prevNode = currentNode.prev;
      const nextNode = currentNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    this.size--;
    return true;
  }

  removeValue(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        this.removeIndex(index);
        return true;
      }
      currentNode = currentNode.next;
      index++;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) return false;

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      const newNode = new Node(value);
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      const prevNode = currentNode.prev;
      newNode.prev = prevNode;
      newNode.next = currentNode;
      prevNode.next = newNode;
      currentNode.prev = newNode;
      this.size++;
    }
    return true;
  }

  display() {
    let currentNode = this.head;
    const result = [];
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(result.join(" <-> "));
  }
}

// Usage
const list = new DoublyLinkedList();
console.log(list.isEmpty()); // Output: true

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.display(); // Output: 0 <-> 1 <-> 2 <-> 3
console.log(list.getSize()); // Output: 4

list.shift();
list.display(); // Output: 1 <-> 2 <-> 3
console.log(list.getSize()); // Output: 3

list.removeIndex(1);
list.display(); // Output: 1 <-> 3
console.log(list.getSize()); // Output: 2

list.removeValue(1);
list.display(); // Output: 3
console.log(list.getSize()); // Output: 1

list.insert(1, 4);
list.display(); // Output: 3 <-> 4
console.log(list.getSize()); // Output: 2

console.log(list.isEmpty()); // Output: false
