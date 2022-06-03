class MinHeap {
    constructor(k) {
        this.items = [];
        this.k = k;
    }
    
    insert(val) {
        this.items.push(val);
        this.bubbleUp();
        this.removeAdditional();
    }

    removeAdditional() {
        while (this.items.length > this.k) {
            this.pop();
        }
    }
    
    getMin() {
        return this.items[0];
    }
    
    pop() {
        const max = this.items[0];
        const lastItem = this.items.pop();
        if (this.items.length > 0) {
            this.items[0] = lastItem;
            this.bubbleDown();
        }
        return max;
    }
    
    bubbleDown() {
        let idx = 0;
        while (this.hasLeftChild(idx)) {
            let smallerChildIdx = this.getMinChildIndex(idx);
            let smallerChild = this.items[smallerChildIdx];
            if (this.items[idx] < this.items[smallerChildIdx]) break;
            this.swap(idx, smallerChildIdx);
            idx = smallerChildIdx;
        }
    }
    
    bubbleUp() {
        let idx = this.items.length - 1;
        while (this.hasParent(idx) && this.parent(idx) > this.items[idx]) {
            this.swap(this.getParentIndex(idx), idx);
            idx = this.getParentIndex(idx);
        }
    }
    
    swap(idx1, idx2) {
        const temp = this.items[idx1];
        this.items[idx1] = this.items[idx2];
        this.items[idx2] = temp;
    }
    
    getMinChildIndex(index) {
        const leftIdx = this.getLeftChildIndex(index);
        const leftVal = this.items[leftIdx];
        const rightIdx = this.getRightChildIndex(index);
        if (!this.items[rightIdx]) return leftIdx;
        
        const rightVal = this.items[rightIdx];
        const minIdx = rightVal < leftVal ? rightIdx : leftIdx
        
        return minIdx;
    }
    
    parent(idx) {
        return this.items[this.getParentIndex(idx)];
    }
    
    hasParent(idx) {
        return this.items[this.getParentIndex(idx)] !== undefined
    }
    
    hasLeftChild(idx) {
        return this.items[this.getLeftChildIndex(idx)] !== undefined;
    }
    
    hasRightChild(idx) {
        return this.items[this.getRightChildIndex(idx)] !== undefined;
    }
    
    getParentIndex(idx) {
        return Math.floor((idx - 1) / 2);
    }
    
    getLeftChildIndex(idx) {
        return (idx * 2) + 1;
    }
    
    getRightChildIndex(idx) {
        return (idx * 2) + 2;
    }
}

