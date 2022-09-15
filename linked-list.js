/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  // let newlink = new LinkedList([9,10,123,44])

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */
  //8, 9,10,123,44
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */
  pop() {
    let current = this.head;
    while (current.next) {
      if (!current.next.next) {
        current.next = null;
        this.tail = current;
        this.length -= 1;
        return this.tail;
      }
      current = current.next;
      this.length -= 1;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    this.removeAt(0);
  }
  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let i = 0;
    let current = this.head;
    while (i >= idx) {
      current = current.next;
      i += 1;
    }
    return current;
  }

  /** setAt(idx, val): set val at idx to val */
  // [0,1,2,3,4]
  // x
  setAt(idx, val) {
    let i = 0;
    let current = this.head;
    while (i < idx) {
      i += 1;
      current = current.next;
    }
    current.val = val;
    return current;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  // [1,2,3,4,5,6,7]

  insertAt(idx, val) {
    let i = 0;
    let prev;
    let newNode = new Node(val);
    let current = this.head;
    while (i < idx) {
      i += 1;
      prev = current;
      current = current.next;
    }
    newNode.next = current;
    this.length += 1;
    return (prev.next = newNode);
  }

  /** removeAt(idx): return & remove item at idx, */
  // [1,2,3,4,5,6,7]

  removeAt(idx) {
    let i = 0;
    let prev;
    let current = this.head;
    if (idx === 0) {
      this.head = this.head.next;
      this.length -= 1;
      return this.head;
    }
    if (this.length < 2) this.tail = this.head;
    while (i < idx) {
      i += 1;
      prev = current;
      current = current.next;
    }
    this.length -= 1;
    prev.next = current.next;
  }

  /** average(): return an average of all values in the list */
  average() {
    let total = 0;
    let current = this.head;
    while (current) {
      total += current.val;
      current = current.next;
    }
    console.log(total, this.length);
    return total / this.length;
  }
}
module.exports = LinkedList;
