class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertRecursively(this.root, newNode);
    }
  }

  _insertRecursively(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertRecursively(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertRecursively(node.right, newNode);
      }
    }
  }

  search(value) {
    return this._searchRecursively(this.root, value);
  }

  _searchRecursively(node, value) {
    if (!node) {
      return null;
    }

    if (value === node.value) {
      return node;
    } else if (value < node.value) {
      return this._searchRecursively(node.left, value);
    } else {
      return this._searchRecursively(node.right, value);
    }
  }

  // DFS Traversal
  // Inorder
  inorderTraversal(callback) {
    this._inorderTraversalRecursively(this.root, callback);
  }

  _inorderTraversalRecursively(node, callback) {
    if (node) {
      this._inorderTraversalRecursively(node.left, callback);
      callback(node.value);
      this._inorderTraversalRecursively(node.right, callback);
    }
  }

  // Preorder
  preorderTraversal(callback) {
    this._preorderTraversalRecursively(this.root, callback);
  }

  _preorderTraversalRecursively(node, callback) {
    if (node) {
      callback(node.value);
      this._preorderTraversalRecursively(node.left, callback);
      this._preorderTraversalRecursively(node.right, callback);
    }
  }

  // Postorder
  postorderTraversal(callback) {
    this._postorderTraversalRecursively(this.root, callback);
  }

  _postorderTraversalRecursively(node, callback) {
    if (node) {
      this._postorderTraversalRecursively(node.left, callback);
      this._postorderTraversalRecursively(node.right, callback);
      callback(node.value);
    }
  }

  //BFS Traveersal
  levelOrder(callback) {
    const queue = [];

    queue.push(this.root);

    while (queue.length) {
      let curr = queue.shift();
      callback(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  // Min & Max
  min() {
    return this._recursiveMin(this.root);
  }

  _recursiveMin(node) {
    if (!node.left) {
      return node.value;
    } else {
      return this._recursiveMin(node.left);
    }
  }

  max() {
    return this._recursiveMax(this.root);
  }

  _recursiveMax(node) {
    if (!node.right) {
      return node.value;
    } else {
      return this._recursiveMax(node.right);
    }
  }

  delete(value) {
    this.root = this._deleteRecursively(this.root, value);
  }

  _deleteRecursively(node, value) {
    if (!node) {
      return null;
    }

    if (value === node.value) {
      // Node with only one child or no child
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      // Node with two children
      const minValue = this._findMinValue(node.right);
      node.value = minValue;
      node.right = this._deleteRecursively(node.right, minValue);
    } else if (value < node.value) {
      node.left = this._deleteRecursively(node.left, value);
    } else {
      node.right = this._deleteRecursively(node.right, value);
    }

    return node;
  }

  _findMinValue(node) {
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }
}

// Usage
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// DFS Traversal
console.log("Inorder Traversal:");
bst.inorderTraversal(value => console.log(value));

console.log("Preorder Traversal:");
bst.preorderTraversal(value => console.log(value));

console.log("Postorder Traversal:");
bst.postorderTraversal(value => console.log(value));

// BFS Traversal

console.log("Level Order Traversal:");
bst.levelOrder(value => console.log(value));

// Min

console.log("Min:", bst.min());
console.log("Max:", bst.max());

bst.delete(3);

console.log("Search 3:", bst.search(3)); // Output: null
console.log("Search 10:", bst.search(10));
