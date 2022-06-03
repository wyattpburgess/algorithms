function shortestWayToFormString(strA, strB) {
  const charPositions = {};
  for (let i = 0; i < strA.length; i++) {
    if (!charPositions[strA[i]]) charPositions[strA[i]] = new Set();
    charPositions[strA[i]].add(i);
  }

  let rounds = 1;
  let prevIndex = -1;
  for (let i = 0; i < strB.length; i++) {
    const positionsInStrA = charPositions[strB[i]];
    if (!positionsInStrA) return -1;
    const nextIndex = getNextIndex(prevIndex, positionsInStrA);
    if (nextIndex < prevIndex) {
      rounds++;
    }
    prevIndex = nextIndex;
  }

  return rounds;
}

function getNextIndex(prevIdx, charLocations) {
  let valGreaterExists = false;
  let minNextIdx = Number.MAX_SAFE_INTEGER;
  let absMinIdx = Number.MAX_SAFE_INTEGER;
  for (const charIdx of charLocations) {
    absMinIdx = Math.min(absMinIdx, charIdx);
    if (charIdx > prevIdx) {
      valGreaterExists = true;
      minNextIdx = Math.min(minNextIdx, charIdx);
    }
  }
  if (!valGreaterExists) {
    minNextIdx = absMinIdx;
  }
  return minNextIdx;
}

// a: [0, 1, 5];
// b: [2]
// c: [3, 4]

// strA "aabcca"
// strB "aaabcac"
// should return 3

const test1 = shortestWayToFormString("aabcca", "aaabcac");
const test2 = shortestWayToFormString("cabab", "bacab");
const test3 = shortestWayToFormString("aaa", "a");
const test4 = shortestWayToFormString("aaa", "ab");
console.log(`${test1} should be 3`);
console.log(`${test2} should be 2`);
console.log(`${test3} should be 1`);
console.log(`${test4} should be -1`);
