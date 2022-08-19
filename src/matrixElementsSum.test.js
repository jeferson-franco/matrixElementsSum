const solution = require('./matrixElementsSum.js');

test('test 1', () => {
    expect(
        solution([
            [0, 1, 1, 2],
            [0, 5, 0, 0],
            [2, 0, 3, 3],
        ])
    ).toBe(9);
});

test('test 2', () => {
    expect(
        solution([
            [1, 1, 1, 0],
            [0, 5, 0, 1],
            [2, 1, 3, 10],
        ])
    ).toBe(9);
});

test('test 3', () => {
    expect(
        solution([
            [1, 1, 1],
            [2, 2, 2],
            [3, 3, 3],
        ])
    ).toBe(18);
});

test('test 4', () => {
    expect(solution([[0]])).toBe(0);
});

test('test 5', () => {
    expect(
        solution([
            [1, 0, 3],
            [0, 2, 1],
            [1, 2, 0],
        ])
    ).toBe(5);
});

test('test 6', () => {
    expect(solution([[1], [5], [0], [2]])).toBe(6);
});

test('test 7', () => {
    expect(solution([[1, 2, 3, 4, 5]])).toBe(15);
});

test('test 8', () => {
    expect(solution([[2], [5], [10]])).toBe(17);
});

test('test 9', () => {
    expect(
        solution([
            [4, 0, 1],
            [10, 7, 0],
            [0, 0, 0],
            [9, 1, 2],
        ])
    ).toBe(15);
});

test('test 10', () => {
    expect(solution([[1]])).toBe(1);
});
