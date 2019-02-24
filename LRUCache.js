class Node {
    constructor(val, keyname){
        this.val = val;
        this.keyName = keyname
        this.prev = null;
        this.next = null;
    }
}

class LinkList{
    constructor(){
        this.head = new Node("head");
        this.tail = new Node('tail');
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    add( node){
        // let oldPrev = this.tail.prev;
        // oldPrev.prev = node;
        // node.prev = oldPrev;
        // node.next = this.tail

        // this.tail.prev = node

        node.next = this.head.next
        this.head.next.prev = node
        this.head.next = node
        node.prev = this.head

    }
    update(node){
        if (node.prev === this.head.head) return
        node.prev.next = node.next
        node.next.prev = node.prev

        node.prev = this.head
        node.next = this.head.next
        this.head.next.prev = node
        this.head.next = node
    }

    insertNewNode(node){
        let oldLast = this.tail.prev;
        this.tail.prev = oldLast.prev;
        oldLast.prev.next = this.tail
        
        node.next = this.head.next
        this.head.next = node
        node.next.prev = node
        node.prev = this.tail
    }
    inspect(depth, opts) {
        let printableString = ""
        let node = this.head
        while(true) {
            printableString += node.val + "  "
            node = node.next
            if (!node) break
        }
        return printableString
    }

}

class LRUCache {
    constructor(max){
        this.max = max;
        this.curSize = 0
        this.map = {};
        this.store = new LinkList;
    }

    get(key){
        if (this.map[key]) {
            if(!(this.store.head.next === this.map[key])){
                this.store.update(this.map[key])
                // console.log("this is the")
                // console.log(this.store)
            }
            return this.map[key].val
        }
        return -1
    }

    put(key, value){
        if (!this.map[key] && this.curSize < this.max){
            // console.log("in place 1")
            let newNode = new Node(value, key)
            // console.log("new node is: ", newNode)
            this.map[key] = newNode
            // console.log('adding node: ', newNode)
            // this.map[key] = newNode
            this.store.add(newNode)
            this.curSize += 1;
            // console.log("LL is now: ", this.store)

            return 
        }
        if (this.map[key]){
            // console.log("in place 2");

            this.map[key].val = value
            this.store.update(this.map[key])
            return 
        }
        if (!this.map[key] && this.curSize === this.max){
            // console.log("in place 3");
            // console.log("store at start is: ", this.store)
            let newNode = new Node(value, key)
            // console.log("new node is: ", newNode)
            this.map[key] = newNode
            // console.log("getting rid of: ", this.store.tail.prev.keyName)
            this.map[this.store.tail.prev.keyName] = false
            this.store.insertNewNode(newNode)
            // console.log("store at end is: ", this.store)
            // console.log("map is at END: ", this.map)
        }
        // console.log("LL is now: ", this.store)
    }

}


// ["LRUCache", "put", "put",   "put",   "put",  "get",  "get", "get",  "get", "put", "get",    "get",  "get", "get", "get"]
//      [[3], [1, 1],  [2, 2], [3, 3],  [4, 4],  [4],    [3],    [2],    [1],  [5, 5], [1],      [2],   [3],    [4], [5]]  


let c = new LRUCache(3)
c.put(1,1)
c.put(2,2)
c.put(3,3)
c.put(4,4)

console.log("no")
c.get(4)
console.log("yes")
console.log(c.store)
c.get(3)
c.get(2)
c.get(1)
c.put(5,5)

console.log(c.store)
c.get(1)
c.get(2)
c.get(3)
console.log(c.store)
console.log("get is: ", c.get(4))
c.get(5)



