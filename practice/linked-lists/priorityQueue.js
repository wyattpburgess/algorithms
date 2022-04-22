class Node {
    constructor(weight, value) {
        this.weight = weight;
        this.value = value;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.size = 0;
        this.items = [];
    }

    getParentIndex(idx) {
        return Math.floor((idx - 1) / 2);
    }

    getLeftChildIndex(idx) {
        return idx * 2 + 1;
    }

    getRightChildIndex(idx) {
        return idx * 2 + 2;
    }

    hasLeftChild(idx) {
        return this.items[this.getLeftChildIndex(idx)] !== undefined;
    }

    hasRightChild(idx) {
        return this.items[this.getRightChildIndex(idx)] !== undefined;
    }

    hasParent(idx) {
        return this.items[this.getParentIndex(idx)] !== undefined
    }

    leftChild(idx) {
        return this.items[this.getLeftChildIndex(idx)];
    }

    rightChild(idx) {
        return this.items[this.getRightChildIndex(idx)];
    }

    parent(idx) {
        return this.items[this.getParentIndex(idx)];
    }

    peek() {
        if (this.items.length === 0) return null;
        return this.items[0];
    }

    enqueue(weight, value) {
        const newNode = new Node(weight, value);
        this.items.push(newNode);
        this.bubbleUp();
        return this.items;
    }

    dequeue() {
        if (this.items.length === 0) return null;
        const topItem = this.items[0];
        const lastItem = this.items[this.items.length - 1];
        // remove item from end
        this.items.pop();
        // add item to top and bubble down
        this.items[0] = lastItem;
        this.bubbleDown();
        return topItem;
    }

    swap(idxOne, idxTwo) {
        const temp = this.items[idxOne];
        this.items[idxOne] = this.items[idxTwo];
        this.items[idxTwo] = temp;
    }

    bubbleUp() {
        let idx = this.items.length - 1;
        while (this.hasParent(idx) && this.parent(idx).weight < this.items[idx].weight) {
            this.swap(this.getParentIndex(idx), idx);
            idx = this.getParentIndex(idx);
        }
    }

    bubbleDown() {
        let idx = 0;
        while (this.hasLeftChild(idx)) {
            let largerChildIdx = this.getLeftChildIndex(idx);
            let largerChildWeight = this.items[largerChildIdx].weight;
            if (this.hasRightChild(idx) && this.rightChild(idx).weight > largerChildWeight) {
                largerChildIdx = this.getRightChildIndex(idx);
            }
            if (this.items[idx].weight > this.items[largerChildIdx].weight) break;
            this.swap(idx, largerChildIdx);
            idx = largerChildIdx;
        }
    }


}

const pQ = new PriorityQueue();
pQ.enqueue(10, "Lebron");
pQ.enqueue(12, "Kobe");
pQ.enqueue(100, "Scalabrine");
pQ.enqueue(50, "Chalmers");
pQ.enqueue(20, "Jordan");
console.log(pQ);
console.log(pQ.dequeue());
console.log(pQ.dequeue());
console.log(pQ.dequeue());
console.log(pQ.dequeue());
console.log(pQ.dequeue());
