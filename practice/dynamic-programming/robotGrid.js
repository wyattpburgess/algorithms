const robotGrid = (g) => {
    if (g === null || g[0] === undefined) return false;
    const maxHeight = g.length;
    const maxWidth = g[0].length;
    let cache = Array(maxHeight).fill().map(() => Array(maxWidth).fill(-1));

    const robotCanMakeIt = (g, row, col, mW, mH) => {
        if (row >= mH || col >= mW) {
            return false;
        }
        // return cache.
        if (cache[row][col] !== -1) return cache[row][col];
    
        // check if at the end.
        if (
            row === mH - 1 && col === mW - 1
            && g[row][col] === 1
        ) {
            cache[row][col] = 1;
            return 1;
        } else if (g[row][col] === 0) {
            cache[row][col] = 0;
            return 0;
        }
    
        // traverse
        cache[row][col] = 1;
        const down = robotCanMakeIt(g, row + 1, col, mW, mH);
        const right = robotCanMakeIt(g, row, col + 1, mW, mH);
        return {
            status: down || right,
            table: cache
        };
    }

    const getGridPath = (g) => {
        console.log(g);
        let activeRow = g.length - 1;
        let activeCol = g[0].length - 1;
        const steps = [];
        while (activeRow >= 0 && activeCol >= 0) {
            if (g[activeRow][activeCol - 1] === 1) {
                steps.push("right");
                activeCol--;
            } else if (g[activeRow - 1][activeCol] === 1) {
                steps.push("down");
                activeRow--;
            } 

            if (activeRow === 0 && activeCol === 0) break;
        }
        return steps.reverse();
    }

    const { status, table } = robotCanMakeIt(g, 0, 0, maxWidth, maxHeight);
    if (!status) return false;

    return getGridPath(table);
}

const grid = [
    [1, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
];

console.log(robotGrid(grid));
