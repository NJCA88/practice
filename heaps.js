// import * as math from 'mathjs'
const math = require('mathjs');

console.log("starting")
// console.log(5+5)
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0
    let seenLetters = {};
    seenLetters[s[0]] = true;
    let max = 1;
    let front = 0;
    let rear = 0;
    // while (front < s.length - 1  ) {
    for (let start = 0; start < s.length - 1; start++) {
        front += 1

        if (!seenLetters[s[front]]) {
            //if the new target of front is not a dup
            // tempCount += 1
            if ((front - rear) + 1 > max) max = (front - rear) + 1
            seenLetters[s[front]] = true
        } else {
            // if the new front is a dup, we move the rear pointer
            while (!(s[rear] === s[front])) {
                seenLetters[s[rear]] = false
                rear += 1
            }
            rear += 1

        }

    }
    return max
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbb"));





const myGraph1 = math.matrix([[0, 1, 0],[0, 0, 1], [1,0,0]])
// console.log(math.multiply(m1, m2))

const biggestCycle = function(graph){
    let biggest = "none"
    let searching = true
    let oldGraph = graph
    let cycleLength = 0
    let diagsToCheck = []
    for (i = 0; i < 3; i++ ){
        diagsToCheck.push([i,i])
    }
    while (searching){
        cycleLength += 1
        let newGraph = math.multiply( graph, oldGraph) 
        newGraph = math.add(newGraph, oldGraph)
        console.log(newGraph._data)
        diagsToCheck.forEach(diag => {
            if (oldGraph._data[diag[0]][diag[1]] === 0 && newGraph._data[diag[0]][diag[1]] === 1 ){
                biggest = cycleLength
            }
        })
        // if (oldGraph._data === newGraph._data) break
        if (shouldContinue(oldGraph, newGraph) === false ) break

        if(cycleLength > 5) break
        oldGraph = newGraph
    }
    console.log("biggest is: ", biggest)
}

const shouldContinue = function(oldGraph, newGraph){
    // return true
    console.log("GRAPHS: ", oldGraph._data.length, newGraph._data.length)
    for (let i = 0; i < oldGraph._data.length; i++) {
        for (let j = 0; j < oldGraph._data.length; j++) {

            if (newGraph._data[i][j] > 0 !== oldGraph._data[i][j] ) return true  
        }
    }
    return false
}


// biggestCycle(myGraph1)

// let a = myGraph1


//       A ---> B   ---> c
//        \    /      ^
//         v  v     /     
//          D -->  E

class Node{
    constructor(val){
        this.val = val
        this.neighbors = []
    }
}
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
a.neighbors = [b];
b.neighbors = [c, d];
c.neighbors = [];
d.neighbors = [e ];
e.neighbords = [c]

let myGraphNodes = [d, c, b, e, a]


class Graph{
    constructor(nodes){
        this.nodes = nodes
        this.topSorted = []
        this.visited = new Set
        this.dfs = this.dfs.bind(this)
    }

    topSort(){

        this.nodes.forEach(node =>{
            if (!this.visited.has(node)) {
                this.dfs(node)
            }
        })      
        console.log("I think the answer is: ", this.topSorted)  
    }
    dfs(node){
        this.visited.add(node)
        node.neighbors.forEach(neighbor =>{
            if (!this.visited.has(neighbor)){
            this.dfs(neighbor)
            }
        })
        this.topSorted.unshift(node)
    }
}
const graphObject = new Graph(myGraphNodes)
graphObject.topSort()





