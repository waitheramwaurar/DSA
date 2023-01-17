//Given an array of integers, where all elements but one occur twice, find the unique element.
function lonelyinteger(a) {
    // Write your code here
    let arr_obj = {};
    for (let i of a) {
        if (!arr_obj[i]) {
            arr_obj[i] = 1;
        }
        else {
            arr_obj[i]++;
        }
    }
    console.log(arr_obj);
    for (let i in arr_obj) {
        if (arr_obj[i] === 1)
            return i;
    }
    return null;
}

a = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyinteger(a));