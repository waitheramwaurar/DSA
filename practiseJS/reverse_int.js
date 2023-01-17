// Program to reverse an integer

//Solution 1
/*
1. Convert int to string
2. Reverse string
3. Convert string to int
*/

function reverseInt(num) {
    
    let num_str = (Math.abs(num)).toString();
    //console.log(num);
    let str = '';

    for (c of num_str) {
        str = c + str;
    }
    //console.log(str)
    if (num < 0)
        return -1 * (+str);
    return (+str);
}

console.log(reverseInt(-500));
console.log(reverseInt(45));
console.log(reverseInt(-90));
console.log(reverseInt(0));
//console.log(typeof reverseInt(-21));

console.log(reverseInt(213))