// Longest Common Substring
// Input: 2 strings.
// Output: length of longest substring that appears in input strings.

//     F  I  S  H
//  H  0  0  0  1
//  I  0  1  0  0
//  S  0  0  2  0
//  H  0  0  0  3

// check if value at indices are equal
// => matrix[i-1][j-1] += 1
// else 0

const getLongestSubstring = (str1, str2) => {
    const comparisonGrid = [];
    let longestSubstringLength = 0;
    for (let i = 0; i < str1.length; i++) {
        // Initiate subarray.
        if (!comparisonGrid[i]) {
            comparisonGrid[i] = [];
        }
        for (let j = 0; j < str2.length; j++) {
            const valTopLeft = comparisonGrid[i-1] === undefined || comparisonGrid[j-1] === undefined || comparisonGrid[i-1][j-1] === undefined ? 0 : comparisonGrid[i-1][j-1];
            if (str1[i] === str2[j]) {
                comparisonGrid[i][j] = valTopLeft + 1;
                longestSubstringLength = comparisonGrid[i][j];
            } else {
                comparisonGrid[i][j] = 0;
            }
        }
    }

    console.log(comparisonGrid);
    return longestSubstringLength;
}

const longestSubstring = getLongestSubstring("blue", "clues");
console.log(longestSubstring);
