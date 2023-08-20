class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket[i].value = value;
        return;
      }
    }
    bucket.push({ key, value });
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return bucket[i].value;
      }
    }
    return undefined;
  }

  delete(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      console.log(`Bucket ${i}:`, this.buckets[i]);
    }
  }
}

// Usage
const hashTable = new HashTable();

hashTable.set("name", "John");
hashTable.set("age", 30);
hashTable.set("city", "New York");

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 30
console.log(hashTable.get("city")); // Output: New York

hashTable.delete("age");
console.log(hashTable.get("age")); // Output: undefined

hashTable.display();
