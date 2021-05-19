//////trees
// function BinaryTree(value){
//     this.value=value;
//     this.left=null;
//     this.rigth=null
// }
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if (this.root===null) {
//       this.root = newNode;
//     } else {
//       let currentNode = this.root;
//       while (true) {
//         if (value > currentNode.value) {
//           //rigth
//           if (!currentNode.right) {
//             currentNode.right = newNode;
//             return this;
//           }
//           currentNode = currentNode.right;
//         } else if (value < currentNode.value) {
//           //left
//           if (!currentNode.left) {
//             currentNode.left = newNode;
//             return this;
//           }
//           currentNode = currentNode.left;
//         }
//         let i = 0;
//         i++;
//         console.log(i);
//       }
//     }

//     //Code here
//   }
//   lookup(value) {
//     if (!this.root) return false;

//     let currentNode = this.root;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         return currentNode;
//       }
//     }
//     return false;
//     //Code here
//   }
//   remove(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     let parentNode = null;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         parentNode = currentNode;
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         parentNode = currentNode;
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         //We have a match, get to work!

//         //Option 1: No right child:
//         if (currentNode.right === null) {
//           if (parentNode === null) {
//             this.root = currentNode.left;
//           } else {
//             //if parent > current value, make current left child a child of parent
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.left;

//               //if parent < current value, make left child a right child of parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.left;
//             }
//           }

//           //Option 2: Right child which doesnt have a left child
//         } else if (currentNode.right.left === null) {
//           currentNode.right.left = currentNode.left;
//           if (parentNode === null) {
//             this.root = currentNode.right;
//           } else {
//             //if parent > current, make right child of the left the parent
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.right;

//               //if parent < current, make right child a right child of the parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.right;
//             }
//           }

//           //Option 3: Right child that has a left child
//         } else {
//           //find the Right child's left most child
//           let leftmost = currentNode.right.left;
//           let leftmostParent = currentNode.right;
//           while (leftmost.left !== null) {
//             leftmostParent = leftmost;
//             leftmost = leftmost.left;
//           }

//           //Parent's left subtree is now leftmost's right subtree
//           leftmostParent.left = leftmost.right;
//           leftmost.left = currentNode.left;
//           leftmost.right = currentNode.right;

//           if (parentNode === null) {
//             this.root = leftmost;
//           } else {
//             if (currentNode.value < parentNode.value) {
//               parentNode.left = leftmost;
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = leftmost;
//             }
//           }
//         }
//         return true;
//       }
//     }
//   }
// }

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// console.log(tree.lookup(20));
//console.log(JSON.stringify(traverse(tree.root)));
//     9
//  4     20
//1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }
class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value)
    if(this.root===null){
      this.root=newNode;
      return this;
    }
    let currentNode=this.root;
  
    do{
      if(newNode.value>currentNode.value){
        //right
       
        if(currentNode.right===null){
          currentNode.right=newNode;
          return this;
        }
        currentNode=currentNode.right;
        
      }else if(newNode.value<currentNode.value){
        //left
         if(currentNode.left===null){
          currentNode.left=newNode;
          return this;
        }
        currentNode=currentNode.left;
      }else if(newNode.value===currentNode.value){
          throw new Error("No duplicates allowed!")
      }
    }while(currentNode!==null)
  }
  lookup(value){
    //Code here
    if(this.root ===null){
      throw new Error("Empty tree")
    }
    let currentNode=this.root;
    do{
      if(currentNode.value===value){
        return currentNode;
      }

      if(currentNode.value>value){
        //left
        currentNode=currentNode.left;
      }else{
        //rigth
        currentNode=currentNode.right
      }
    
    }while(currentNode!==null)
    throw new Error("Node not found")
  }
    remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }

}
//    9
//  4  20
//1 6 15 21
const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(6)
tree.insert(21)
tree.insert(15)
tree.insert(44)
tree.remove(44)

console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}