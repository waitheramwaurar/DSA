// Check the character that appears most times in a string ans how many times it occurs
// Example: reference --> answer = e, occurrence = 4

// Solution
/*
1. Generate an object with key_value pairs from the string
2. The key will be the letter and the value will be the number of times the letter appears
3. If the letter is not there, it will be added and the value set to one
4. If the letter is there, the value will be incremented by 1
5. Loop over the oobject created and find the character that appears most and its frequency
*/

function max_times(str) {
    let word_obj = {};

    for (let char of str) {
        if (!word_obj[char]) {
            word_obj[char] = 1;
        }
        else {
            word_obj[char]++;
        }
    }
    console.log(word_obj)

    let maxChar = '';
    let maxCount = 0;

    for (let char in word_obj) {
        if (word_obj[char] > maxCount) {
            maxCount = word_obj[char];
            maxChar = char;
        } 
    }
    console.log(`${maxChar} is the most occurring character and it occurs ${maxCount} times.`);
    return maxCount;
}

console.log(max_times("reference"));