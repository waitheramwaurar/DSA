function diagonalDifference(arr) {
    let pri_sum = 0;
    let sec_sum = 0;
    let decrement = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        pri_sum += arr[i][i];
        sec_sum += arr[i][decrement];
        decrement--;

    }
    console.log(pri_sum);
    console.log(sec_sum);
    return Math.abs(pri_sum - sec_sum);
}

const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
console.log(diagonalDifference(arr));