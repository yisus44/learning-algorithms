//Linked list
// //insert is faster than arrays
// const obj1 = { a: true };
// const obj2 = obj1; //pointer
//10=>5=>16
// let myLL = {
//   head: {
//     value: 4,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value,
//       next: null,
//       prev: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     //5 will be the new tail
//     const newNode = {
//       value,
//       next: null,
//       prev: null,
//     };

//     newNode.prev = this.tail;
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     //beging of the list
//     const newNode = {
//       value,
//       next: null,
//       prev: null,
//     };

//     newNode.prev = newNode;
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }

//   insert(index, value) {
//     //search for the index

//     if (index === 0) {
//       this.prepend(value);
//       return this.printList();
//     }
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     let i = 0;
//     let prevNode = this.head;
//     let state = true;
//     let currentNode = this.head;
//     while (i !== this.length) {
//       if (i === index) {
//         const newNode = {
//           value,
//           next: null,
//           prev: null,
//         };
//         newNode.next = currentNode;
//         prevNode.next = newNode;
//         newNode.prev = prevNode;
//         prevNode = newNode;
//         this.length++;
//         return currentNode;
//       }
//       if (state) {
//         prevNode = prevNode.next;
//       }

//       currentNode = currentNode.next;
//       state = !state;
//       i++;
//     }
//   }

//   remove(index) {
//     let currentNode = this.traverToIndex(index);
//     let prevNode = this.traverToIndex(index - 1);
//     prevNode.prev = prevNode.next = currentNode.next;
//     this.length--;
//   }
//   traverToIndex(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   printList() {
//     const array = [];
//     let curretNode = this.head;
//     while (curretNode !== null) {
//       array.push(curretNode);
//       curretNode = curretNode.next;
//     }
//     console.log(array);
//     return array;
//   }
// }
// //6=>6=>1=>10=>5
// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.prepend(1);
// myLinkedList.prepend(6);
// myLinkedList.prepend(7);

// myLinkedList.insert(2, 99);
// myLinkedList.remove(2);
//myLinkedList.printList();
console.log("hola esquizo");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //O(1)
    const newTail = new Node(value);
    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
    return this;
  }
  prepend(value) {
    //O(1)
    const newHead = new Node(value);
    newHead.next = this.head;
    this.length++;
    this.head = newHead;
    return this;
  }
  insert(indexToInsert, value) {
    //start at 0
    //O(n)
    if (indexToInsert === 0) {
      this.prepend(value);
      return this;
    } else if (indexToInsert === this.length) {
      this.append(value);
      return this;
    } else if (indexToInsert > this.length) {
      throw new Error("Bad input");
    }
    const newItem = new Node(value);
    let prevNode = this.traverseToIndex(indexToInsert - 1);
    let currentNode = prevNode.next;
    prevNode.next = newItem;
    newItem.next = currentNode;
    this.length++;
    return this;
  }

  traverseToIndex(indextToTraverse) {
    let targetNode = this.head;
    let counter = 0;
    while (counter !== indextToTraverse) {
      counter++;
      targetNode = targetNode.next;
    }
    return targetNode;
  }
  remove(indexToDelete) {
    if (indexToDelete === 0) {
      this._removeFromStart();
    }
    const prevNode = this.traverseToIndex(indexToDelete - 1);
    const unwantedNode = prevNode.next;
    prevNode.next = unwantedNode.next;
    if (indexToDelete === this.length - 1) {
      this.tail = prevNode;
    }
    this.length--;
    return this;
  }
  _removeFromStart() {
    this.head = this.head.next;
    this.length--;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(10);
myLinkedList.append(11);
myLinkedList.append(3);
// myLinkedList.prepend(69);
// myLinkedList.insert(1, 420);
// myLinkedList.insert(2, 99);
// myLinkedList.remove(5);
// myLinkedList.reverse();
myLinkedList.reverse();
console.log(JSON.stringify(myLinkedList));
////////////////////////////////////////
//this is a double linked list

// class LinkedList {
//   constructor(value) {
//     this.head = { value, next: null, last: null };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     //O(1)
//     const newTail = new Node(value);
//     newTail.last = this.tail;
//     this.tail.next = newTail;
//     this.tail = newTail;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     //O(1)
//     const newHead = new Node(value);
//     newHead.next = this.head;
//     this.head.prev = newHead;
//     this.head = newHead;
//     this.length++;
//     return this;
//   }
//   insert(indexToInsert, value) {
//     //start at 0
//     //O(n)
//     if (indexToInsert === 0) {
//       this.prepend(value);
//       return this;
//     } else if (indexToInsert === this.length) {
//       this.append(value);
//       return this;
//     } else if (indexToInsert > this.length) {
//       throw new Error("Bad input");
//     }
//     const newItem = new Node(value);
//     let prevNode = this.traverseToIndex(indexToInsert - 1);
//     let currentNode = prevNode.next;
//     prevNode.next = newItem;
//     newItem.next = currentNode;

//     newItem.last = prevNode;
//     currentNode.last = newItem;
//     this.length++;
//     return this;
//   }

//   traverseToIndex(indextToTraverse) {
//     let targetNode = this.head;
//     let counter = 0;
//     while (counter !== indextToTraverse) {
//       counter++;
//       targetNode = targetNode.next;
//     }
//     return targetNode;
//   }
//   remove(indexToDelete) {
//     if (indexToDelete === 0) {
//       this._removeFromStart();
//     }
//     const prevNode = this.traverseToIndex(indexToDelete - 1);
//     const unwantedNode = prevNode.next;
//     prevNode.next = unwantedNode.next;
//     if (indexToDelete === this.length - 1) {
//       this.tail = prevNode;
//     }
//     this.length--;
//     return this;
//   }
//   _removeFromStart() {
//     this.head = this.head.next;
//     this.length--;
//   }
// }
