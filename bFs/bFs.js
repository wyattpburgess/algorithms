class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Queue is a linked list.
// O(1) "pop" time complexity.
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new QueueNode(value);
        if (!this.head) {
            this.head = newNode;
            this.length++;
            return;
        }
        if (!this.tail) {
            // there is no tail, just a head.
            this.head.next = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    dequeue() {
        // check length
        if (this.length === 0) {
            return;
        } else if (this.length === 2) {
            this.tail = null;
        }
        const currHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currHead;
    }
}

const bFs = (graph, queue) => {
    const searched = {};
    while (queue.length > 0) {
        // check the first item in the queue
        const itemToCheck = queue.dequeue();
        if (searched[itemToCheck.value] !== undefined) {
            continue;
        }
        console.log(`Checking: ${itemToCheck.value}`);
        // todo: update logic to determine if item is what you are searching for.
        if (itemToCheck === 'item-searching-for') {
            return itemToCheck.value;
        } else {
            if (graph[itemToCheck.value] !== undefined) {
                // add itemToCheck's connections to queue.
                graph[itemToCheck.value].forEach((person) => {
                    queue.enqueue(person);
                })
            }
        }
        // add itemToCheck value to search hash table.
        searched[itemToCheck.value] = true;
    }
    return false;
}

// Creating a Graph
// Me -> Bob, Claire, Alice 
// Bob -> Peggy, Anuj
// Claire -> Thom, Jonny
// Alice -> Peggy

// Me, Bob, Claire, Alice, Peggy, Anuj, Thom, Jonny

const graph = {
    "me": ["alice", "bob", "claire"],
    "bob": ["peggy", "anuj"],
    "claire": ["thom", "jonny"],
    "alice": ["peggy"]
}

const queue = new Queue();
graph["me"].forEach((person) => {
    queue.enqueue(person);
})
const bFsResult = bFs(graph, queue);
