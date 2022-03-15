// Camping Trip.
// Knapsack will hold max 6 pounds.
// Maximize the amount of items in your backpack based on their "value".

//                           0     1     2     3     4     5     6 
// (wt. 3 | val 10) Water    0     0     0     10    10    10    10
// (wt. 1 | val 3) Book      0     3     3     10    13    13    13 
// (wt. 2 | val 9) Food      0     3     9     12    13    19    22
// (wt. 2 | val 5) Jacket    0     3     9     12    14    19    22
// (wt. 1 | val 6) Camera    0     6     9     15    18    20    25

const maximizeValue = (items, maxWeight) => {
    const maxValues = [];
    let maxSolution = Number.MIN_SAFE_INTEGER;
    for (i = 0; i < items.length; i++) {
        const currItem = items[i];
        const currItemWeight = currItem[0];
        const currItemVal = currItem[1]
        // initialize sub-array
        if (!maxValues[i]) {
            maxValues[i] = [];
        }

        for (j = 0; j <= maxWeight; j++) {
            let valAbove = 0;
            // check if value above exists.
            if (
                maxValues[i-1] !== undefined &&
                maxValues[i-1][j] !== undefined
            ) {
                valAbove = maxValues[i-1][j];
            }
            if (currItemWeight > j) {
                maxValues[i][j] = valAbove;
            } else {
                let complementMax = 0;
                if (
                    maxValues[i-1] !== undefined &&
                    maxValues[i-1][j - currItemWeight] !== undefined
                ) {
                    complementMax = maxValues[i-1][j - currItemWeight]
                }
                const maxAtIndex = Math.max(valAbove, complementMax + currItemVal);
                maxValues[i][j] = maxAtIndex;
            }

            if (maxValues[i][j] > maxSolution) {
                maxSolution = maxValues[i][j];
            }
        }
    }

    let weightComparison = maxWeight;
    const selectedItems = [];
    // finds items that were added.
    for (let i = maxValues.length - 1; i >= 0; i--) {
        // default to 0 for first row - 1;
        const valueAbove = maxValues[i-1] === undefined ? 0 : maxValues[i-1][weightComparison]
        if (maxValues[i][weightComparison] !== valueAbove) {
            selectedItems.push(i);
            weightComparison -= items[i][0];
        }
    }

    // 0, 2, 4
    console.log(maxValues);
    console.log(selectedItems);
    return maxSolution;
}

// item = [Weight, Value]
const items = [
    [3, 10], // water
    [1, 3], // book
    [2, 9], // food
    [2, 5], // jacket
    [1, 6] // camera
];

const maxWeight = 6;

const maximizedValueWithItems = maximizeValue(items, maxWeight);
console.log(maximizedValueWithItems);
