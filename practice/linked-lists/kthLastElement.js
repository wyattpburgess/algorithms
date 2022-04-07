const findKthLastElement = (head, k) => {
    if (k <= 0) {
        return false;
    }
    const tempArr = [];
    let currNode = head;
    while (currNode !== null) {
        tempArr.push(currNode.val);
        currNode = currNode.next;
    }
    if (k > tempArr.length) {
        return false;
    }

    console.log(tempArr);
    console.log(-k);
    return tempArr[tempArr.length - k];
}

const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}

console.log(findKthLastElement(head, 2));