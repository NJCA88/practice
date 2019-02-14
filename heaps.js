// // import * as math from 'mathjs'
// const math = require('mathjs');

// console.log("starting")
// // console.log(5+5)
// var lengthOfLongestSubstring = function (s) {
//     if (s.length === 0) return 0
//     let seenLetters = {};
//     seenLetters[s[0]] = true;
//     let max = 1;
//     let front = 0;
//     let rear = 0;
//     // while (front < s.length - 1  ) {
//     for (let start = 0; start < s.length - 1; start++) {
//         front += 1

//         if (!seenLetters[s[front]]) {
//             //if the new target of front is not a dup
//             // tempCount += 1
//             if ((front - rear) + 1 > max) max = (front - rear) + 1
//             seenLetters[s[front]] = true
//         } else {
//             // if the new front is a dup, we move the rear pointer
//             while (!(s[rear] === s[front])) {
//                 seenLetters[s[rear]] = false
//                 rear += 1
//             }
//             rear += 1

//         }

//     }
//     return max
// };

// // console.log(lengthOfLongestSubstring("abcabcbb"));
// // console.log(lengthOfLongestSubstring("bbbb"));





// const myGraph1 = math.matrix([[0, 1, 0],[0, 0, 1], [1,0,0]])
// // console.log(math.multiply(m1, m2))

// const biggestCycle = function(graph){
//     let biggest = "none"
//     let searching = true
//     let oldGraph = graph
//     let cycleLength = 0
//     let diagsToCheck = []
//     for (i = 0; i < 3; i++ ){
//         diagsToCheck.push([i,i])
//     }
//     while (searching){
//         cycleLength += 1
//         let newGraph = math.multiply( graph, oldGraph) 
//         newGraph = math.add(newGraph, oldGraph)
//         console.log(newGraph._data)
//         diagsToCheck.forEach(diag => {
//             if (oldGraph._data[diag[0]][diag[1]] === 0 && newGraph._data[diag[0]][diag[1]] === 1 ){
//                 biggest = cycleLength
//             }
//         })
//         // if (oldGraph._data === newGraph._data) break
//         if (shouldContinue(oldGraph, newGraph) === false ) break

//         if(cycleLength > 5) break
//         oldGraph = newGraph
//     }
//     console.log("biggest is: ", biggest)
// }

// const shouldContinue = function(oldGraph, newGraph){
//     // return true
//     console.log("GRAPHS: ", oldGraph._data.length, newGraph._data.length)
//     for (let i = 0; i < oldGraph._data.length; i++) {
//         for (let j = 0; j < oldGraph._data.length; j++) {

//             if (newGraph._data[i][j] > 0 !== oldGraph._data[i][j] ) return true  
//         }
//     }
//     return false
// }


// // biggestCycle(myGraph1)

// // let a = myGraph1


// //       A ---> B   ---> c
// //        \    /      ^
// //         v  v     /     
// //          D -->  E

// class Node{
//     constructor(val){
//         this.val = val
//         this.neighbors = []
//     }
// }
// let a = new Node('a');
// let b = new Node('b');
// let c = new Node('c');
// let d = new Node('d');
// let e = new Node('e');
// a.neighbors = [b];
// b.neighbors = [c, d];
// c.neighbors = [];
// d.neighbors = [e ];
// e.neighbords = [c]

// let myGraphNodes = [d, c, b, e, a]


// class Graph{
//     constructor(nodes){
//         this.nodes = nodes
//         this.topSorted = []
//         this.visited = new Set
//         this.dfs = this.dfs.bind(this)
//     }

//     topSort(){
//         this.nodes.forEach(node =>{
//             if (!this.visited.has(node)) {
//                 this.dfs(node)
//             }
//         })      
//         console.log("I think the answer is: ", this.topSorted)  
//     }
//     dfs(node){
//         this.visited.add(node)
//         node.neighbors.forEach(neighbor =>{
//             if (!this.visited.has(neighbor)){
//             this.dfs(neighbor)
//             }
//         })
//         this.topSorted.unshift(node)
//     }
// }
// const graphObject = new Graph(myGraphNodes)

// graphObject.topSort()




//SHORTEST PATH PROBLEM


// function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
//     // solve here
//     let nodes = []
//     for (let i = 0; i < graphNodes; i++) {
//         //build the nodes
//         let node = new Node((i + 1), ids[i])
//         nodes.push(node)
//     }
//     for (let i = 0; i < graphFrom.length; i++) {
//         // build the edges

//         nodes[graphFrom[i] - 1].neighbors.push(nodes[graphTo[i] - 1])
//         nodes[graphTo[i] - 1].neighbors.push(nodes[graphFrom[i] - 1])
//     }
//     // console.log(nodes)

//     let answer = getAnswer(nodes, val)
//     console.log(answer)
//     return answer
// }

// const getAnswer = function (nodes, target) {
//     let visited = new Set
//     let targetNodes = []
//     nodes.forEach(node => {
//         if (node.color === target) {
//             targetNodes.push(node)
//         }
//     })
//     let min = -1
//     targetNodes.forEach(targetNode => {
//         let value = searchForSame(targetNode, nodes)
//         if (value > 0 && min === -1) min = value
//         if (min !== -1 && value < min) min = value
//     })
//     return min
// }

// const searchForSame = function (targetNode, nodes) {
//     let visited = new Set
//     let visitQueue = []
//     targetNode.neighbors.forEach(neighbor => {
//         // console.log("neigh, tar: ", neighbor, targetNode)
//         if (neighbor !== targetNode) {
//             visitQueue.push([1, neighbor])
//         }
//     })


//     while (visitQueue.length !== 0) {
//         let currentNode = visitQueue.shift()
//         visited.add(currentNode[1])
//         if (currentNode[1].color === targetNode.color && currentNode[1] !== targetNode) {
//             console.log(targetNode, currentNode[1])
//             return currentNode[0]
//         } else {
//             currentNode[1].neighbors.forEach(neighbor => {
//                 if (!visited.has(neighbor)) {
//                     visitQueue.push([currentNode[0] + 1, neighbor])
//                 }
//             })
//         }
//     }
//     return -1

// }


class Node {
    constructor(id, color) {
        this.id = id
        this.color = color
        this.neighbors = []
    }
}

// above solution works


//LONGEST PALINDROME
const checkPal = function(s){
    // if (s.length % 2 !== 0) {
        let j = s.length - 1
        for (let i = 0; i< s.length / 2; i++){
            console.log(i, j-i)
            if (s[i] !== s[j-i]) return false
        }
    // }
    return true
}
var longestPalindrome = function (s) {
    if (s === "") return ""
    if (s.length === 1) return s
    for (let len = s.length ; len > 0; len--) {
        console.log("len is: ", len)
        for (let start = 0; start <= s.length - len; start++) {
            console.log("start, len + start: ", start, len + start)
            // let temp = s.slice(start, len + start)
            if (checkPal(s.slice(start, len+start))) return s.slice(start, len+start) 
            }
        }
}



console.log(longestPalindrome("bbabc"))


// console.log(checkPal("carat"))

