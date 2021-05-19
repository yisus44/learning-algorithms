/*
Analytic skills
Coding skills
Techincal skills
Communication skills
*/
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

//check if there is a element in common in 2 arrays
//recieve 2 array no size limit
// return boolean

//O(n*m)
// function checkCommon(arr, arr2) {
//   if (!arr || !arr2) return;

//   for (let index1 = 0; index1 < arr.length; index1++) {
//     for (let index2 = 0; index2 < arr2.length; index2++) {
//       if (arr[index1] === arr2[index2]) return true;
//     }
//   }
//   return false;
// }

function checkCommon2(arr1, arr2) {
  if (!arr1 || !arr2) throw new Error("bad input");
  //loop through first array and create object wheere properties === items in the arra
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  //loop through second array and check if items in second array exist on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
//O(a+b)
//
const result = checkCommon2(array1, array2);
console.log(result);
