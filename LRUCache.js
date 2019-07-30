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
            }
            return this.map[key].val
        }
        return -1
    }

    put(key, value){
        if (!this.map[key] && this.curSize < this.max){
            let newNode = new Node(value, key)
            this.map[key] = newNode
            this.store.add(newNode)
            this.curSize += 1;

            return 
        }
        if (this.map[key]){
            this.map[key].val = value
            this.store.update(this.map[key])
            return 
        }
        if (!this.map[key] && this.curSize === this.max){

            let newNode = new Node(value, key)
            this.map[key] = newNode
            this.map[this.store.tail.prev.keyName] = false
            this.store.insertNewNode(newNode)

        }
    }

}


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



