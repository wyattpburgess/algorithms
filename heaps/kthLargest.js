/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
 class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = [];
        for (let i = 0; i < nums.length; i++) {
            this.insert(nums[i]);
        }
    }
    
    insert(num) {
        this.heap.push(num);
        this.bubbleUp();
        this.removeExtraItems();
    }
    
    bubbleUp() {
        let currIdx = this.heap.length - 1;
        let curr = this.heap[currIdx];
        let parentIdx = this.getParentIndex(currIdx);
        let parent = this.heap[parentIdx];
        while (curr < parent) {
            this.swap(currIdx, parentIdx);
            currIdx = parentIdx;
            curr = this.heap[currIdx];
            parentIdx = this.getParentIndex(currIdx)
            parent = this.heap[parentIdx];
        }
    }
    
    removeExtraItems() {
        while (this.heap.length > this.k) {
            this.heap[0] = this.heap[this.heap.length - 1]
            this.heap.pop()
            this.bubbleDown();
        }
    }
    
    add(val) {
        this.insert(val);
        return this.heap[0];
    }
    
    bubbleDown() {
        let currIdx = 0;
        let curr = this.heap[currIdx];
        let minIdx = this.getMinIndex(0);
        let minVal = this.heap[minIdx];
        while (curr > minVal) {
            this.swap(currIdx, minIdx);
            currIdx = minIdx;
            minIdx = this.getMinIndex(currIdx);
            minVal = this.heap[minIdx];
        }
    }
    
    getMinIndex(idx) {
        const leftIdx = this.getLeftChildIndex(idx);
        const leftVal = this.heap[leftIdx];
        const rightIdx = this.getRightChildIndex(idx);
        const rightVal = this.heap[rightIdx];
        let minIdx = leftIdx;
        let minVal = leftVal;
        if (rightVal < leftVal) {
            minIdx = rightIdx;
            minVal = rightVal;
        }
        
        return minIdx;
    }
    
    getLeftChildIndex(idx) {
        return (2 * idx) + 1;
    }
    
    getRightChildIndex(idx) {
        return (2 * idx) + 2;
    }
    
    swap(idx1, idx2) {
        const temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;
    }
    
    getParentIndex(idx) {
        return Math.floor((idx - 1) / 2);
    }
}

const kth = new KthLargest(3, [4, 5, 8, 2]);
console.log(kth.add(3));
console.log(kth.add(5));
console.log(kth.add(10));
console.log(kth.add(9));
console.log(kth.add(4));