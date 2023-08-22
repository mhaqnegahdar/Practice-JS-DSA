class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    if (!this.nodes.has(node)) {
      this.nodes.set(node, []);
    }
  }

  addEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      const neighbors1 = this.nodes.get(node1);
      const neighbors2 = this.nodes.get(node2);
      neighbors1.push(node2);
      neighbors2.push(node1);
    }
  }

  getNeighbors(node) {
    return this.nodes.get(node) || [];
  }

  removeNode(node) {
    if (this.nodes.has(node)) {
      const neighbors = this.nodes.get(node);
      for (const neighbor of neighbors) {
        const neighborNeighbors = this.nodes.get(neighbor);
        const index = neighborNeighbors.indexOf(node);
        if (index !== -1) {
          neighborNeighbors.splice(index, 1);
        }
      }
      this.nodes.delete(node);
    }
  }

  removeEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      const neighbors1 = this.nodes.get(node1);
      const neighbors2 = this.nodes.get(node2);
      const index1 = neighbors1.indexOf(node2);
      const index2 = neighbors2.indexOf(node1);
      if (index1 !== -1) {
        neighbors1.splice(index1, 1);
      }
      if (index2 !== -1) {
        neighbors2.splice(index2, 1);
      }
    }
  }

  display() {
    for (const [node, neighbors] of this.nodes) {
      console.log(`${node} -> ${neighbors.join(", ")}`);
    }
  }
}

// Usage
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

graph.display();

graph.removeEdge("B", "C");
graph.removeNode("D");

console.log("\nAfter removals:");
graph.display();
