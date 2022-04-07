/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 const convert = (s, numRows) => {
    if (numRows === 1) {
        return s;
    }

    let col = 0;
    let row = 0;
    let grid = [];
    let upward = false;
    for (let i = 0; i < s.length; i++) {
        if (!grid[row]) {
            grid[row] = [];
        }
        col = grid[row].length;
        grid[row][col] = s[i];
        
        // update direction
        if (row + 1 >= numRows) {
            upward = true;
            row--;
            continue;
        } else if (row === 0) {
            upward = false;
            row++;
            continue;
        } else {
            if (upward) {
                row--;
            } else {
                row++;
            }
        }
    }
    
    let fullStr = "";
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            fullStr.append(grid[i][j]);
        }
    }

    return fullStr;
};

const str = convert("PAYPALISHIRING", 2);
console.log(str);
