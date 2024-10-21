function sumNums(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length === 0) {
            reject('Cannot sum an empty array');
        }
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);
        console.log('returning from sum');
    });
}

const nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sp1 = sumNums(nums);
sp1
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

const sp2 = sumNums([]);
sp2
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


