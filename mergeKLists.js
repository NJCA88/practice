class ListNode {
    constructor(val){
        this.val = val
        this.next =null
    }
}


var movePointer = function (nodes, nodeToMove) {
    //increment the 1 target node
    if (nodes[nodeToMove].next) {
        nodes[nodeToMove] = nodes[nodeToMove].next
    } else {
        nodes[nodeToMove].val = Infinity
    }
    return nodes

}
var getMinWithPos = function (nodes) {


    currentMinWithPos = [Infinity, 0]
    let continuing = false;
    for (let i = 0; i < nodes.length; i++) {
        if (!nodes[i]) continue

        if (nodes[i].val !== Infinity) continuing = true;
        if (nodes[i].val === Infinity) continue;

        // let val = nodes[i].val
        // if (val !== Infinity) continueing = true
        // if (val === Infinity) continue
 
     
        if (val < currentMinWithPos[0]) {

            currentMinWithPos = [nodes[i].val, i];

        }
    }


    if (!continuing) return "stop";
    return currentMinWithPos;
};

var mergeKLists = function (lists) {
    if (!lists) return null
    let answerList = null
    let prevNode
    let newNode
    // let nodes = lists

    while (true) {
        minWithPos = getMinWithPos(lists)
        if (minWithPos === "stop") break
        newNode = new ListNode(minWithPos[0])
        if (prevNode) prevNode.next = newNode
        if (!answerList) answerList = newNode
        prevNode = newNode

        lists = movePointer(lists, minWithPos[1])


    }
    return answerList
};




[[1,  4, 5], [1, 3, 4], [2, 6]]
let a = new ListNode(1)
let b = new ListNode(4)
let c = new ListNode(5)
a.next = b
b.next = c
let list1 = a

let d = new ListNode(1);
let e = new ListNode(3);
let f = new ListNode(4);
d.next = e;
e.next = f;
let list2 = e

let g = new ListNode(2);
let h = new ListNode(6);
g.next = h;
let list3 = g

console.log(mergeKLists([list1, list2, list3]))
// analyzeAnswer(mergeKLists([list1, list2, list3]))
// let nodes = [list1, list2, list3]
// let result = getMinWithPos(nodes)
// console.log(result)
// let newNodes = movePointer(nodes, result[1])

// result = getMinWithPos(newNodes)
// console.log("new result is: ", result)



