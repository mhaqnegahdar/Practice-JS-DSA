class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;

      this.tail = node;
    }

    this.size++;
  }

  shift() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let removedNode = this.head;

    this.head = removedNode.next;
    this.size--;

    return removedNode.value;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let removedNode = this.tail;

    let prev = this.head;

    while (prev.next !== this.tail) {
      prev = prev.next;
    }
    prev.next = null;
    this.tail = prev;

    this.size--;
    return removedNode.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }

      console.log(listValues);
    }
  }
}

module.exports = LinkedList;

// Usage Example:
// const list = new LinkedList();

// console.log("List is empty? ", list.isEmpty());
// console.log("List size: ", list.getSize());

// list.print();

// list.prepend(10);
// list.print();

// list.prepend(20);

// list.prepend(30);
// list.print();

// console.log("Pop: ", list.pop());
// console.log("Shift: ", list.shift());

// list.print();
