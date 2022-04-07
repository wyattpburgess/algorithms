const getIntersectionOld = (l1, l2) => {
    if (l1 === null || l2 === null) {
        return null;
    }
    const l1Len = getListLen(l1);
    const l2Len = getListLen(l2);
    let lenDiff = Math.abs(l1Len - l2Len);
    while (l1 !== null && l2 !== null) {
        if (l1 === l2) {
            let l1Pointer = l1;
            let l2Pointer = l2;
            while (l1Pointer !== null && l2Pointer !== null) {
                if (l1Pointer.next === null && l2Pointer.next === null) {
                    return l1;
                }
                l1Pointer = l1Pointer.next;
                l2Pointer = l2Pointer.next;
            }
        }
        l1 = lenDiff > 0 && l2Len > l1Len 
            ? l1
            : l1.next;
        l2 = lenDiff > 0 && l1Len > l2Len 
            ? l2
            : l2.next;
        lenDiff--;
    }
    return null;
}

const getIntersection = (l1, l2) => {
    if (l1 === null || l2 === null) {
        return false;
    }
    // get tail and length
    const { tail: l1Tail, length: l1Len } = getTailAndLength(l1);
    const { tail: l2Tail, length: l2Len } = getTailAndLength(l2);

    // return null if tails are not equal
    if (l1Tail !== l2Tail) return null;

    // get to the same "starting point"
    let longest = l1Len > l2Len ? l1 : l2;
    let shortest = l1Len > l2Len ? l2 : l1;
    let diff = Math.abs(l1Len - l2Len);
    while (diff > 0) {
        longest = longest.next;
        diff--;
    }

    while (longest !== null && shortest !== null) {
        if (longest === shortest) return longest;
        longest = longest.next;
        shortest = shortest.next;
    }
    
    return null;
}

const getTailAndLength = (head) => {
    let length = 0;
    let currNode = head;
    let tail = null;
    while (currNode !== null) {
        length++;
        tail = currNode.next === null ? currNode : null;
        currNode = currNode.next;
    }
    return {
        tail,
        length
    }
}

const getListLen = (head) => {
    let listLen = 0;
    let currNode = head;
    while (currNode !== null) {
        listLen++;
        currNode = currNode.next;
    }
    return listLen;
}

const intersection = {
    data: 4,
    next: {
        data: 5,
        next: null
    }
}

const l1 = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: intersection
        }
    }
};

const l2 = {
    data: 5,
    next: {
        data: 2,
        next: {
            data: 4,
            next: {
                data: 10,
                next: {
                    data: 2,
                    next: intersection
                }
            }
        }
    }
};

console.log(getIntersection(l1, l2));