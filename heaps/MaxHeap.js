class MaxHeap {
    constructor(k) {
        this.items = [];
    }
    
    insert(val) {
        this.items.push(val);
        this.bubbleUp();
        this.removeAdditionalItems();
    }
    
    getMax() {
        if (!this.items.length) {
            return null;
        }
        return this.items[0];
    }
    
    removeMax() {
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
            let largerChildIdx = this.getMaxChildIndex(idx);
            let smallerChild = this.items[largerChildIdx];
            if (this.items[idx] > this.items[largerChildIdx]) break;
            this.swap(idx, largerChildIdx);
            idx = largerChildIdx;
        }
    }
    
    bubbleUp() {
        let idx = this.items.length - 1;
        while (this.hasParent(idx) && this.parent(idx) < this.items[idx]) {
            this.swap(this.getParentIndex(idx), idx);
            idx = this.getParentIndex(idx);
        }
    }
    
    swap(idx1, idx2) {
        const temp = this.items[idx1];
        this.items[idx1] = this.items[idx2];
        this.items[idx2] = temp;
    }
    
    getMaxChildIndex(index) {
        const leftIdx = this.getLeftChildIndex(index);
        const leftVal = this.items[leftIdx];
        const rightIdx = this.getRightChildIndex(index);
        const rightVal = this.items[rightIdx];
        const maxIdx = rightVal > leftVal ? rightIdx : leftIdx
        
        return maxIdx;
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
    
    getParentIndex(index) {
        return Math.abs(Math.trunc(index - 1 / 2));
    } 
    
    getLeftChildIndex(index) {
        return (index * 2) + 1;
    }
    
    getRightChildIndex(index) {
        return (index * 2) + 2;
    }
}
