class Node {
    constructor(weight, value) {
        this.weight = weight;
        this.value = value;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.head = null;
        this.length = null;
    }

    enqueue(weight, value) {
        const newNode = new Node(weight, value);
        if (!this.head) {
            this.head = newNode;

            this.length++;
            return this;
        }
        let prevNode = null;
        let nextNode = this.head;
        while (nextNode !== null && newNode.weight <= nextNode.weight) {
            prevNode = nextNode;
            nextNode = nextNode.next;
        }
        if (prevNode !== null) {
            prevNode.next = newNode;
        } else {
            this.head = newNode;
        }
        newNode.next = nextNode;
        this.length++;
        return this;
    }

    dequeue() {
        const temp = this.head;
        if (this.head) {
            this.head = this.head.next;
            this.length--;
        }
        return temp;
    }

    peek() {
        return this.head;
    }
}

const pQ = new PriorityQueue();
pQ.enqueue(10, "Lebron");
pQ.enqueue(2, "Kobe");
pQ.enqueue(20, "Jordan");
pQ.enqueue(1, "Scalabrine");
pQ.dequeue();
pQ.dequeue();
console.log(pQ);

