// console.log("hola esquizo");
// let user = {
//   age: 54,
//   name: "amlo",
//   spell: "deafeat prian",
// };
// console.log(user.age); //o(1)
// console.log(user.spell); //o(1)

// myHashTable.set("apples", 9);
// myHashTable.get("apples");
// console.log(myHashTable.get("grapes"));

function firstRecurrentCharacter(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let index2 = index + 1; index2 < arr.length; index2++) {
      if (arr[index] === arr[index2]) return [arr[index]];
    }
  }
  return undefined;
}

function firstRecurrent2Character(arr) {
  let hashTable = {};
  for (let index = 0; index < arr.length; index++) {
    if (hashTable[arr[index]] !== undefined) return arr[index];

    hashTable[arr[index]] = index;
  }
  return undefined;
}
// console.log(firstRecurrent2Character([5, 5, 1, 2, 35, 1, 2, 4]));
//the first solution is with brute for of O(n^2) and loop over the array, then again to check if there is match for every element
//////////////////////////////////////////////
///hash table
const person = {};
person["firstname"] = "bob";
person["lastname"] = "marley";
