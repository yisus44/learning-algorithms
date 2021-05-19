////////////////////////////////////////////////////
//Big O
const { performance } = require("perf_hooks");
/////////////////////////////////////////////////////
//o(n)
const nemo = [",3", "nemo", "3", "r", "5"];
const large = new Array(10000).fill("nemo");

function findNemo(arr) {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      //console.log("found Nemo at", i);
      (i + 100 * 311) ^ 2;
    }
  }
  let t1 = performance.now();
  console.log("Founding nemo took", (t1 - t0) / 1000, "seconds");
}

findNemo(large); //O(n) --> Linear time(depends of the number of the elements in the input)
/////////////////////////////////////////////////////
//o(1)
function log2(boxes) {
  console.log(boxes[0]); //o(1)
  console.log(boxes[1]); //o(1)
}

//log2([3, 3, 4, 4]);
////Big O rules
//1.-We'll analyze the worst case scenario instead of the best one
//2.-drop the contest
//3.-If we have more than one input, we need to consider them in the O notation like O(n+m)
//4.-The most bad term is the only we will consider
const boxes = [1, 2, 3, 4, 5];
function logPairs(arr) {
  for (let x = 0; x < arr.length; x++) {
    console.log(arr[x], arr[x + 1]);
  }
}

//logPairs(boxes);

function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boo");
  }
}
boo([34, 4, 5]); //o(1)

function arrayOfHiNtIMES(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  console.log(hiArray);
  return hiArray;
}
arrayOfHiNtIMES(6);
/////////////////////////////////////
const arr = ["hi", "a", "me funaron"];
arr[0]; //0(1)
arr[arr.length - 1]; //o(1)
