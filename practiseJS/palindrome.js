// Find palindrome
// palindrome("abba") === True
// palindrome("apple") == false 

// Solution 1
// 1. Create an empty string 
// 2. Loop through the string to reverse string
// 3. Check if reversed string is the same as original string

function is_palindrome1(str) {
    let revString = "";
    for (let c of str) {
        revString = c + revString;
    }
    if (str.toLowerCase() === revString.toLowerCase()) 
        return true;
    return false;    
}

console.log(is_palindrome1("aBBAT"));


// Solution 2
/*
1. Set two pointers; one from start of str, the other from end
2. Check in each traversal if the chars being pointed are the same
3. If yes, palindrome, if no, not a palindrome
*/

function is_palindrome2(str) {

    // Change string to array
    let new_str = str.toLowerCase().split('');

    console.log(new_str)

    for (let i = 0, j = new_str.length - 1; i <= new_str.length/2, j >= new_str.length/2; i++, j--) {
        if (new_str[i] != new_str[j]) {
            return false;
        }    
    }
    str = new_str.join('');
    return true
}

console.log(is_palindrome2("hannaH"));