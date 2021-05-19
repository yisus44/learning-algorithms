// //edge list
// const graph = [
//   [0, 2],
//   [2, 3],
// ];

// //adjacent list
// const graph2 = [[2], [2, 3], [0, 1, 3]];

// //adjacent matrix
// const graph3=[
//     [0,0,1,0]
// ]
// class Node {
//   constructor(value, connections = null) {
//     this.value = value;
//     this.connections = connections;
//   }
// }

// class Graph {
//   constructor() {
//     this.numberOfNodes = 0;
//     this.adjacentList = {};
//   }
//   addVertex(node) {
//     const newNode = new Node(node);
//     this.adjacentList[node] = newNode;
//     this.numberOfNodes++;
//     return this;
//   }
//   addEdge(node1, node2) {
//     this.adjacentList[node1].connections = this.adjacentList[node2].value;
//     this.adjacentList[node2].connections = this.adjacentList[node1].value;
//     return this;
//     //undirected Graph
//   }
//   showConnections() {
//     const allNodes = Object.keys(this.adjacentList);
//     for (let node of allNodes) {
//       let nodeConnections = this.adjacentList[node];
//       let connections = "";
//       let vertex;
//       for (vertex of nodeConnections) {
//         connections += vertex + " ";
//       }
//       console.log(node + "-->" + connections);
//     }
//   }
// }

// const myGraph = new Graph();
// myGraph.addVertex("0");
// myGraph.addVertex("1");
// myGraph.addVertex("2");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");
// myGraph.addEdge("3", "1");
// myGraph.addEdge("3", "4");
// myGraph.addEdge("4", "2");
// myGraph.addEdge("4", "5");
// myGraph.addEdge("1", "2");
// myGraph.addEdge("1", "0");
// myGraph.addEdge("0", "2");
// myGraph.addEdge("6", "5");
// class Graph {
//   constructor() {
//     this.numberOfNodes = 0;
//     this.adjacentList = {};
//   }
//   addVertex(node) {
//     this.adjacentList[node] = [];
//     this.numberOfNodes++;
//   }
//   addEdge(node1, node2) {
//     //undirected Graph
//     this.adjacentList[node1].push(node2);
//     this.adjacentList[node2].push(node1);
//   }
//   showConnections() {
//     const allNodes = Object.keys(this.adjacentList);
//     for (let node of allNodes) {
//       let nodeConnections = this.adjacentList[node];
//       let connections = "";
//       let vertex;
//       for (vertex of nodeConnections) {
//         connections += vertex + " ";
//       }
//       console.log(node + "-->" + connections);
//     }
//   }
// }

// const myGraph = new Graph();
// myGraph.addVertex("0");
// myGraph.addVertex("1");
// myGraph.addVertex("2");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");
// myGraph.addEdge("3", "1");
// myGraph.addEdge("3", "4");
// myGraph.addEdge("4", "2");
// myGraph.addEdge("4", "5");
// myGraph.addEdge("1", "2");
// myGraph.addEdge("1", "0");
// myGraph.addEdge("0", "2");
// myGraph.addEdge("6", "5");

// myGraph.showConnections();
class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {
    }; 
  } 
  addVertex(node)  {
    this.adjacentList[node]=[];
    this.numberOfNodes++
    return this;
  } 
  addEdge(node1, node2) { 
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
    //undirected Graph 
  } 
  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
} 
} 

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');
myGraph.showConnections()