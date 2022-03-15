// Longest Common Subsequence
// Input: 2 strings.
// Output: length of longest subsequence that appears in inputted strings.

//     F  O  S  H
//  F  1  1  1  1
//  I  1  1  1  1
//  S  1  1  2  2
//  H  1  1  2  3

// check if value at indices are equal
// => matrix[i-1][j-1] += 1
// else 0

const getLongestSubsquence = (str1, str2) => {
    const comparisonGrid = [];
    let longestSubsequenceLength = 0;
    for (let i = 0; i < str1.length; i++) {
        // Initiate subarray.
        if (!comparisonGrid[i]) {
            comparisonGrid[i] = [];
        }
        for (let j = 0; j < str2.length; j++) {
            const top = comparisonGrid[i-1] === undefined ? 0 : comparisonGrid[i-1][j];
            const left = comparisonGrid[i][j-1] === undefined ? 0 : comparisonGrid[i][j-1];
            const topLeft = comparisonGrid[i-1] === undefined || comparisonGrid[i-1][j-1] === undefined ? 0 : comparisonGrid[i-1][j-1];

            if (j === 0 && str1[i] !== str2[j]) {
                comparisonGrid[i][j] = top;
            } else {
                if (str1[i] === str2[j]) {
                    comparisonGrid[i][j] = topLeft + 1;
                    longestSubsequenceLength++;
                } else {
                    const maxOfOptions = Math.max(left, top);
                    comparisonGrid[i][j] = maxOfOptions;
                }
            }
        }
    }

    console.log(comparisonGrid);
    return longestSubsequenceLength;
}

const longestSubsequence = getLongestSubsquence("fosh", "fish");
console.log(longestSubsequence);
