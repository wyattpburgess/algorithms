const getDrome = (leftPointer, rightPointer, s) => {
    while (leftPointer >= 0 && rightPointer < s.length) {
        if (s[leftPointer] !== s[rightPointer]) {
            break;
        }

        leftPointer--;
        rightPointer++;
    }

    return s.slice(leftPointer + 1, rightPointer);
}

const longestPalindrome = (s) => {
    let maxDrome = "";

    for (let i = 0; i < s.length; i++) {
        let even = getDrome(i - 1, i, s);
        let odd = getDrome(i - 1, i + 1, s);
        let currMax = even.length > odd.length ? even : odd;
        if (currMax.length > maxDrome.length) {
            maxDrome = currMax;
        }
    }

    return maxDrome;
}

const drome = longestPalindrome("cbbd");
console.log(drome);
