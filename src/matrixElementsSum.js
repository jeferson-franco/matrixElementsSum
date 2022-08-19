function solution(matrix) {
    let s = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0 && i + 1 < matrix.length) {
                matrix[i + 1][j] = 0;
            }
            s += matrix[i][j];
        }
    }
    return s;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test matrixElementsSum

// alternative solution
// function solution(matrix) {
//     for (let r = 0; j = 0; j < matrix[0].length; j++) {
//         for (let i = 0; i < matrix.length; i++) {
//             if (matrix[i][j] == 0) break
//             else r += matrix[i][j]
//         }
//     }
//     return r
// }

// alternative solution
// function solution(matrix) {
//     let total = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             if (matrix[i][j] == 0) {
//                 break;
//             }
//             total += matrix[i][j];
//         }
//     }
//     return total;
// }
