// import * as math from 'mathjs'
const math = require('mathjs');

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



// console.log(longestPalindrome("bbabc"))


// console.log(checkPal("carat"))

var maxArea = function (height) {
    let max = 0;
    // pointers are tuples with the heigh, and the index they're on
    let s = [height[0], 0];
    let e = [height[height.length - 1], height.length - 1];
    for (let i = 0; i <= height.length; i++) {
        console.log("new loop through the for")
        let lower = s
        if (s[0] > e[0]) lower = e
        let area = getArea(s, e);
        console.log("s e are: ", s, e);
        // console.log("area is: ", area);
        // console.log("max is: ", max);
        if (area > max) max = area;
        console.log("lower is: ", lower)
        if (lower === s) {
            lower[1] += 1
            lower[0] = height[lower[1]]
        } else {
            console.log("LOWER HERE ", lower)
            lower[1] = lower[1] - 1
            console.log("LOWER NOW ", lower)

            lower[0] = height[lower[1]]
        }
    }
    return max
}

const getArea = function (s, e) {
    let lower = s[0];
    console.log(s, e)
    if (s[0] > e[0]) lower = e[0]
    // console.log("lower is: ", lower)
    // console.log("resulting in: ", lower * (e[1] - s[1]))
    return lower * (e[1] - s[1])
}

// console.log(maxArea([2, 3, 4, 5, 18, 17, 6]))


const checkMedConditions = function(L1, L2, r1, r2){
    console.log("vals in the checker b4 infi L1, L2, r1, r2: ", L1, L2, r1, r2)

    console.log("vals in the checker L1, L2, r1, r2: ", L1, L2, r1, r2)
    if (L1 <= r2 && L2 <= r1  ) {
        console.log("returning true")
        return true
    }
    if (L1 > r2) {
        console.log("go left")
        return "goLeft"
    }
    if (L2 > r1){
        console.log("go right:", L1, L2, r1, r2)
        return "goRight"
    }
    console.log("Ruh Roh")
}
const medianOfTwoArray = function(arr1, arr2){
    //this is a fuction to get the median of 2 sorted arrays
    let smallArr, bigArr
    if (arr1.length < arr2.length){
        smallArr = arr1;
         bigArr = arr2;
        } else{
            smallArr = arr2;
            bigArr = arr1
        }
    //start the b search here
    let l1, l2, r1, r2;
    sumEl = smallArr.length + bigArr.length;
    let searching = true;
    let breakPointIdx = math.floor(smallArr.length / 2);

    let counter = 0

    while(searching){
        // console.log("current BPI is: ", breakPointIdx)
        l1 = smallArr[breakPointIdx - 1];
        r1 = smallArr[breakPointIdx];
        let rBreakPointIdx = math.floor(sumEl / 2) - breakPointIdx - 1
        l2 = bigArr[rBreakPointIdx ]
        r2 = bigArr[rBreakPointIdx + 1]
        // console.log(" before passing it to checkMed, l1, l2, r1, r2: ", l1, l2, r1, r2)
        // console.log("before passing it in, breakpointidx is: , l1 is ", breakPointIdx, l1)
        // console.log("smallArr[2] is ",  smallArr[2])
        // console.log("smallArr[3] is ",  smallArr[3])

        if (!(r1 === parseInt(r1))) r1 = Infinity
        if (!(r2 === parseInt(r2))) r2 = Infinity
        if (!(l1 === parseInt(l1))) l1 = -Infinity
        if (!(l2 === parseInt(l2))) l2 = -Infinity

        let result = checkMedConditions(l1, l2, r1, r2);
        if (result === true){
            searching = false;
        } else if (result === "goLeft") {
            // console.log("going left and decrementing: ", breakPointIdx)
            breakPointIdx -= 1;
            // console.log("BPI is now: ", breakPointIdx)
        } else if (result === "goRight"){
            // console.log("going right and incrementing BPI")
            breakPointIdx +=1;
        } 
        // counter +=1
        // if(counter === 5) return 
    }
    let answer = (math.max(l1, l2) + math.min(r1, r2)) / 2;
    debugger
    if (sumEl % 2 === 1 ) answer = math.min(r1, r2);
    console.log("the ansewr is!: ", answer)
    return answer

}
// medianOfTwoArray([3, 5, 6, 9], [1, 2, 3, 4, 7, 20]) 
// medianOfTwoArray([1, 2, 3], [9, 12, 13, 14, 15, 16, 17])
// medianOfTwoArray([1, 2], [3,4])

// medianOfTwoArray([1, 2, 5, 222], [9, 12, 13])
// 1 2 3 4 5 5 6 7 9, 20
            


// my heap implimentation
class BinaryMinHeap{
    constructor(){
        this.store = []
        this.push = this.push.bind(this)
        this.pop = this.pop.bind(this)
        this.peek = this.pop.bind(this)
    }
    push(val){
        if (this.store.length === 0){ 
            this.store.push(val);
            return}
        this.store.push(val);
        this.heapifyUp();

    }
    pop(){   
        let first = 0;
        let last = this.store.length - 1;
        [this.store[first], this.store[last] ] = [this.store[last], this.store[first]];
        console.log(this.store);

        // let tempStore = this.store[first]
        // this.store[first] = this.store[last]
        // this.store[last] = tempStore

        let popped =  this.store.pop()
        this.heapifyDown()
        return popped
     }
    peek(){ 
        return this.store[0]
       }

    heapifyUp(){
        let idx = this.store.length - 1;
        let parentIdx = math.floor((idx - 1)/2);
        while (true){
            if (this.store[parentIdx] > this.store[idx]){
                [this.store[parentIdx], this.store[idx]] = [this.store[idx], this.store[parentIdx]];
                idx = parentIdx;
                parentIdx = math.floor((idx - 1) / 2);
            } else break;
        }
    }

    heapifyDown(){
        let idx = 0
        while (true){
            let maxChildIdx
            if (this.store[(idx*2) + 1] > this.store[(idx*2 + 2)]) {
                maxChildIdx = (idx*2) + 2
            } else{
                maxChildIdx = (idx*2) + 1
            }
            if (this.store[idx] > this.store[maxChildIdx]){
                [this.store[idx], this.store[maxChildIdx]] = [ this.store[maxChildIdx], this.store[idx]]
                idx = maxChildIdx
            } else break
        }
    }

}


// console.log("heaps below")
// let myHeap = new BinaryMinHeap
// myHeap.push(5)
// // console.log("the store is: ", myHeap.store)
// myHeap.push(2)
// // console.log("the store is: ", myHeap.store)
// myHeap.push(10)
// // console.log("the store is: ", myHeap.store)
// myHeap.push(5)
// // console.log("the store is: ", myHeap.store)
// // console.log(myHeap.store)
// // console.log("popped: ", myHeap.pop())
// myHeap.push(22)
// // myHeap.push(17)
// console.log("starting heap is: ", myHeap.store)
// // console.log("resulting in: ", myHeap.store)
// myHeap.pop()
// console.log("resulting in (after a pop): ", myHeap.store)



class BinaryMaxHeap {
    constructor() {
        this.store = []
        this.push = this.push.bind(this)
        this.pop = this.pop.bind(this)
        this.peek = this.pop.bind(this)
    }
    push(val) {
        if (this.store.length === 0) {
            this.store.push(val);
            return
        }
        this.store.push(val);
        this.heapifyUp();

    }
    pop() {
        let first = 0;
        let last = this.store.length - 1
        // [this.store[first], this.store[last] ] = [this.store[last], this.store[first]]
        // console.log(this.store)
        let tempStore = this.store[first]
        this.store[first] = this.store[last]
        this.store[last] = tempStore
        let popped = this.store.pop()
        this.heapifyDown()
        return popped

    }
    peek() {
        return this.store[0]
    }

    heapifyUp() {
        let idx = this.store.length - 1;
        let parentIdx = math.floor((idx - 1) / 2);
        while (true) {
            if (this.store[parentIdx] <  this.store[idx]) {
                [this.store[parentIdx], this.store[idx]] = [this.store[idx], this.store[parentIdx]];
                idx = parentIdx;
                parentIdx = math.floor((idx - 1) / 2);
            } else break;
        }
    }

    heapifyDown() {
        let idx = 0
        while (true) {
            let minChildIdx
            console.log("in the heapDown")
            console.log(this.store)
            if ((this.store[(idx * 2) + 2] > this.store[(idx * 2 + 1)])) {
                minChildIdx = (idx * 2) + 2
            } else {
                minChildIdx = (idx * 2) + 1
            }
            console.log("idx, maxChildIDx: ", idx, minChildIdx )
            if (this.store[idx] < this.store[minChildIdx]) {
                console.log("yep, its more...");
                [this.store[idx], this.store[minChildIdx]] = [this.store[minChildIdx], this.store[idx]]
                idx = minChildIdx
            } else break
        }
    }

}

let myBigHeap = new BinaryMaxHeap();
myBigHeap.push(1);
myBigHeap.push(10,);
myBigHeap.push(25,);
myBigHeap.push(23);
// myBigHeap.push([1, 1])
myBigHeap.push(19);
myBigHeap.push(99);

console.log(myBigHeap.store);
console.log("popping");
myBigHeap.pop();
console.log(myBigHeap.store);