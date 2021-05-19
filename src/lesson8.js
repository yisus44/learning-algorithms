// //stack and queues
// // console.log("Hola esquizo");
// ///stacks
// // class Node {
// //   constructor(value) {
// //     this.value = value;
// //     this.next = null;
// //   }
// // }

// // class Stack {
// //   constructor() {
// //     // this.top = null;
// //     // this.bottom = null;
// //     this.length = 0;
// //     this.data = [];
// //   }
// //   peek() {
// //     if (this.length === 0) return null;
// //     console.log("peeking", this.data[this.length - 1]);
// //     return this.data[this.length - 1];
// //   }
// //   push(value) {
// //     // const newNode = new Node(value);
// //     // if (this.length === 0) {
// //     //   this.top = newNode;
// //     //   this.bottom = newNode;
// //     // } else {
// //     //   const holdingPointer = this.top;
// //     //   this.top = newNode;
// //     //   this.top.next = holdingPointer;
// //     // }
// //     this.length++;
// //     this.data.push(value);
// //     console.log(this);
// //     return this;
// //   }
// //   pop() {
// //     // if (!this.top) {
// //     //   return null;
// //     // }
// //     // if (this.top === this.bottom) {
// //     //   this.bottom = null;
// //     // }
// //     // const holdingPointer = this.top;
// //     // this.top = this.top.next;
// //     this.length--;
// //     this.data.pop();
// //     console.log(this);
// //     return this;
// //   }
// //   //isEmpty
// // }

// // const myStack = new Stack();
// // myStack.peek();
// // myStack.push("google");
// // myStack.push("udemy");
// // myStack.push("discord");
// // myStack.peek();
// // myStack.pop();
// // myStack.pop();
// // myStack.pop();

// //Discord
// //Udemy
// //google
// ///////////////////////////////////////////////////////
// //Queues
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.first;
//   }
//   enqueue(value) {
//     const newNode = new Node(value);
//     if (this.first) {
//       this.last.next = newNode;
//       this.last = newNode;
//     } else {
//       this.first = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//     return this;
//     //first in arrive=>last in arrive
//   }
//   dequeue() {
//     if (!this.first) {
//       return null;
//     }
//     if (this.first === this.last) {
//       this.last = null;
//     }

//     this.first = this.first.next;
//     this.length--;
//     return this;
//   }
//   //isEmpty;
// }

// const myQueue = new Queue();
// console.log(myQueue.enqueue("Joy"));
// console.log(myQueue.enqueue("Matt"));
// // console.log(myQueue.enqueue("Pavel"));
// console.log(myQueue.dequeue());

// //Joy
// //Matt
// //Pavel
// //Samir
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   //platos
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const newElement = new Node(value);
//     if (this.length === 0) {
//       this.top = newElement;
//       this.bottom = newElement;
//       this.length++;
//       return this;
//     } else {
//       newElement.next = this.top;
//       this.top = newElement;
//       this.length++;
//       return this;
//     }
//   }
//   pop() {
//     if (this.bottom === null && this.top === null) {
//       throw new Error("Nothing to delete");
//     }

//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     this.top = this.top.next;
//     this.length--;
//   }
// }

// const myStack = new Stack();
// //google
// //udemy
// //CS101
// myStack.push("google");
// myStack.push("udemy");
// myStack.push("CS101");
// myStack.pop("CS101");

// console.log(myStack);
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return null;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

//Joy
//Matt
//Pavel
//Samir
console.log(myQueue);
