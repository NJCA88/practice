const math = require("mathjs");


class BinaryMaxHeap {
    constructor() {
        this.store = []
        this.push = this.push.bind(this)
        this.pop = this.pop.bind(this)
        this.peek = this.pop.bind(this)
    }
    push(valsTuple) {
        if (this.store.length === 0) {
            this.store.push(valsTuple);
            return
        }
        this.store.push(valsTuple);
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
        // vals are [element, appearences]
        // console.log("heapifying up?")
        let idx = this.store.length - 1;
        let parentIdx = math.floor((idx - 1) / 2);
        while (true) {
            // console.log("the thing is: ", this.store[parentIdx])
            if (!this.store[parentIdx]) break
            if (this.store[parentIdx][1] < this.store[idx][1]) {
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
            if (!this.store[idx * 2 + 1]) return 
            if (!this.store[(idx*2) + 2]) {
       
                minChildIdx  = (idx*2) + 1
            }
            else{
 
                if (this.store[(idx * 2) + 2][1] > this.store[(idx * 2 )+ 1][1]) {
                    minChildIdx = (idx * 2) + 2

                } else {
                    minChildIdx = (idx * 2) + 1
                }
            }
            if (this.store[idx][1] < this.store[minChildIdx][1]) {
   
                [this.store[idx], this.store[minChildIdx]] = [this.store[minChildIdx], this.store[idx]]
                idx = minChildIdx
            } else break
        }
    }

}

var topKFrequent = function (nums, k) {
    let myHashMap = {}
    let myHeap = new BinaryMaxHeap
    nums.forEach(num => {
        if (!myHashMap[num]) {
            myHashMap[num] = 1;
        } else {
            myHashMap[num] += 1;
        }
    })
    Object.keys(myHashMap).forEach(key => {
        myHeap.push([key, myHashMap[key]])
    })
    answer = []
    console.log("THE HEAP starting IS: ", myHeap.store)
    for (i = 0; i < k; i++) {
        answer.push(myHeap.pop())
        console.log("the heap is now: ")
        console.log(myHeap.store)
    }


    return answer
};

console.log(topKFrequent([12, 3, 2,2,2, 4, 5, 6, 7, 12], 2))

// let myBigHeap = new BinaryMaxHeap
// myBigHeap.push([12, 2])
// myBigHeap.push([3, 1])
// myBigHeap.push([2, 3])
// myBigHeap.push([5, 1])
// myBigHeap.push([7, 1])
// myBigHeap.push([4, 1])
// // myBigHeap.push(

// console.log(myBigHeap.store)

// console.log(myBigHeap.pop())
// console.log(myBigHeap.store)