// Given a String, reverse it 
// Example: string = apple
//          reverse = elppa 

// Solution 1
// 1. Convert string to array
// 2. Reverse the array
// 3. Convert reversed array back to string

function reverse_string1(word) {
    if (word === "") {
        return -1;
    }
    
    let word_array = [];

    for (let i = word.length - 1; i >= 0; i--) {
        word_array.push(word[i]);
    }
    let reversed_word = word_array.join('');
    return reversed_word;
}

console.log(reverse_string1(""));


// Solution 2
// 1. Create an empty string
// 2. Loop through each character from last to first
// 3. Return reversed array

function reverse_string2(word) {
    let revString = "";
    for (let character of word) {
        revString = character + revString;
    }
    return revString;
}

console.log(reverse_string2("hello"));