function findNegativeInRow(arr: number[][], rowIdx: number): Promise<number[]> {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            const hasNegative = arr[rowIdx].some((num) => num < 0);
            if (hasNegative) {
                resolve(arr[rowIdx]);
            } else {
                reject(`Row ${rowIdx} has no negative numbers`);
            }
        } else {
            reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
        }
    });
}

const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let rowNegPromises: Promise<number[]>[] = [];

for (let x = 0; x < array2D_3.length; x++) {
    rowNegPromises.push(findNegativeInRow(array2D_3, x));
}

Promise.any(rowNegPromises)
    .then((negativeRow) => {
        console.log(`Negative Row: ${negativeRow}`);
    })
    .catch((error) => {
        console.log(`No rows have negative numbers`);
    });