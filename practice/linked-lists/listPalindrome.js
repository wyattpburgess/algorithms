const isPalindrome = (l) => {
    if (l === null || l.data === null) {
        return false;
    }
    const listLen = getListLen(l);
    if (listLen === 1) return true;
    const mid = Math.floor(listLen / 2);
    const stack = [];
    let currNode = l;
    let stepCount = 0;
    while(stepCount < mid) {
        stack.push(currNode.data);
        currNode = currNode.next;
        stepCount++;
    }

    if (listLen % 2 !== 0) {
        currNode = currNode.next;
    }
    
    while (currNode !== null) {
        if (stack.pop() !== currNode.data) {
            return false;
        }
        currNode = currNode.next;
    }
    return true;
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

const validOdd = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: {
                data: 2,
                next: {
                    data: 1,
                    next: null
                }
            }
        }
    }
};

const validEven = {
    data: 5,
    next: {
        data: 6,
        next: {
            data: 6,
            next: {
                data: 5,
                next: null
            }
        }
    }
};

const validEvenShort = {
    data: 5,
    next: {
        data: 5,
        next: null
    }
};

const invalidEven = {
    data: 5,
    next: {
        data: 2,
        next: {
            data: 1,
            next: {
                data: 4,
                next: null
            }
        }
    }
};

const invalidOdd = {
    data: 5,
    next: {
        data: 2,
        next: {
            data: 1,
            next: {
                data: 4,
                next: {
                    data: 4,
                    next: null
                }
            }
        }
    }
};

const invalidOddShort = {
    data: 3,
    next: {
        data: 2,
        next: {
            data: 1,
            next: null
        }
    }
};

console.log(`Valid odd: ${isPalindrome(validOdd)}`);
console.log(`Valid even: ${isPalindrome(validEven)}`);
console.log(`Valid even short: ${isPalindrome(validEvenShort)}`);
console.log(`Invalid odd: ${isPalindrome(invalidOdd)}`);
console.log(`Invalid odd short: ${isPalindrome(invalidOddShort)}`);
console.log(`Invalid odd: ${isPalindrome(invalidEven)}`);
