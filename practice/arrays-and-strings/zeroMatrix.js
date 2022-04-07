const zeroMatrix = (m) => {
    if (m.length === 0) {
        return false;
    }
    const zeroedRows = {};
    const zeroedCols = {};
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            if (m[i][j] === 0) {
                zeroedRows[i] = true;
                zeroedCols[j] = true;
            }
        }
    }
    m = zeroifyRows(zeroedRows, m);
    m = zeroifyCols(zeroedCols, m);
    return m;
}

const zeroifyRows = (rows, matrix) => {
    for (const row of Object.keys(rows)) {
        for (let c = 0; c < matrix[row].length; c++) {
            matrix[row][c] = 0;
        }
    }
    return matrix;
}

const zeroifyCols = (cols, matrix) => {
    for (const col of Object.keys(cols)) {
        for (let r = 0; r < matrix.length; r++) {
            matrix[r][col] = 0;
        }
    }
    return matrix;
}

const testMatrix = [
    [1,2,3],
    [1,1,0],
    [4,5,6]
]

const testMatrix2 = [
    [1,5,8,2,1,2],
    [1,0,2,1,0,3],
    [3,5,7,2,3,1]
];

console.log(zeroMatrix(testMatrix2));