const findLoopStart = (head) => {
    if (head === null || head.next === null) {
        return null;
    }

    let slowPointer = head;
    let fastPointer = head;
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (slowPointer === fastPointer) {
            break;
        }
    }

    if (fastPointer === null || fastPointer.next === null) {
        return null;
    }

    slowPointer = head;
    while (slowPointer !== fastPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }
    return fastPointer;
}

const lastLoopNode = {
    value: 10,
    next: null
}

const firstLoopNode = {
    value: 5,
    next: {
        value: 10,
        next: {
            value: 4,
            next: lastLoopNode
        }
    }
}

lastLoopNode.next = firstLoopNode;

const linkedList = {
    data: 5,
    next: {
        data: 2,
        next: {
            data: 4,
            next: firstLoopNode
        }
    }
};

console.log(findLoopStart(linkedList));