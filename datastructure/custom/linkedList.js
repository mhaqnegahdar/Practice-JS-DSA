class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;

      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }

    this.size++;
  }

  insert(value, index) {
    // Index should be  valid
    if (index < 0 || index > this.size) {
      console.log("Index is not valid");
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;

      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid Index");
      return;
    }
    let removedNode;

    if (index === 0) {
      this.head = this.head.next;
      removedNode = this.head;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let removedNode;

    if (this.head.value === value) {
      removedNode = this.head;

      this.head = removedNode.next;

      this.size--;
      return removedNode.value;
    } else {
      let prev = this.head;

      while (prev.next && value !== prev.next.value) {
        prev = prev.next;
      }

      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;

        this.size--;
        return removedNode.value;
      }
    }

    return null;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }

    let current = this.head;
    let i = 0;

    while (current) {
      if (current.value === value) {
        return i;
      }
      i++;
      current = current.next;
    }

    return -1;
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

  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;

      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

// Usage Example:
const list = new LinkedList();

console.log("List is empty? ", list.isEmpty());
console.log("List size: ", list.getSize());

list.print();

list.append(10);
list.print();

list.append(20);

list.insert(25, 2);
list.append(30);
list.insert(40, 2);
list.print();

// list.removeFrom(2);
list.removeValue(40);
list.print();

console.log("Find 25: ", list.search(25));

list.reverse();
list.print();
