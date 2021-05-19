const strings = ["a", "b", "c", "d"];
//4*4=16 bytes of storages

//push O(1)
strings.push("e");

//pop O(1)
strings.pop("e");

//unshift O(n)
strings.unshift("x");

//splice o(n)
strings.splice(3, 1, "mr graso");

//optional
// class Player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`I am ${this.type}. I voted for morena and i will do it again`);
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//   }
//   play() {
//     console.log("SHEEEEES");
//   }
// }

// const wizard = new Wizard("Mr graso", "grasoso");
// wizard.introduce();
// //build an array
// class myArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   delete(index) {
//     const item = this.data[index];
//     this.shiftItem(index);
//     return item;
//   }

//   shiftItem(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new myArray();
// newArray.push("amlo");
// newArray.push("a");
// newArray.push("3");
// newArray.pop();
// console.log(newArray);

// function reverse(str) {
//   if (typeof str !== "string" || !str || str.length < 2) return "a";

//   let reversed = str.split("");
//   let totalItems = str.length - 1;
//   reversed.toString();
//   for (let i = totalItems; i >= 0; i--) {
//     reversed.push(str[i]);
//   }
//   return reversed;
// }

// function reverse2(str) {
//   return [...str].reverse().join("");
// }

function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const mergedArray = [...arr1, ...arr2];
  const mergedSortedArray = mergedArray.sort((a, b) => a - b);
  return mergedSortedArray;
}

// function mergeSortedArrays2(arr1, arr2) {
//   if (arr1.length === 0) return arr2;
//   if (arr2.length === 0) return arr1;

//   let arr1Item = arr1[0];
//   let arr2Item = arr2[0];
//   let i = 1;
//   let j = 1;
//   const mergedArray = [];
//   while (arr1Item || arr2Item) {
//     if (arr1Item < arr2Item) {
//       mergedArray.push(arr1Item);
//       arr1Item = arr1[i];
//       i++;
//     } else {
//       mergedArray.push(arr2Item);
//       arr2Item = arr2[j];
//       j++;
//     }
//   }
// }
// console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
