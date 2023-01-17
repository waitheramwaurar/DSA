/*There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Function Description
Complete the function matchingStrings in the editor below. 
The function must return an array of integers representing the frequency of occurrence of each query string in strings.

matchingStrings has the following parameters:

string strings[n] - an array of strings to search
string queries[q] - an array of query strings
Returns
int[q]: an array of results for each query
*/

function matchingStrings(strings, queries) {
    let countArr = [];

    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j = 0; j < strings.length; j++) {
            if (strings[j] === queries[i])
                count++;
        }
        countArr.push(count);
    }
    return countArr;
}

const list = ["abcde", "sdaklfj", "asdjf", "na", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"];
const search_str = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];

console.log(matchingStrings(list, search_str));


//Take 1
// function matchingStrings(strings, queries) {
//     // Write your code here
//     let str_obj = {};
    
//     for (let str of strings) {
//         if (!str_obj[str]) {
//             str_obj[str] = 1;         
//         }
//         else {
//             str_obj[str]++;
//         }
//     }
//     console.log(str_obj);
    
//     var countArr = [];
//     for (let str in queries) {
//         for (let key in str_obj) {
//             if (queries[str] == key) {
//                 //console.log(`${queries[str]}: ${str_obj[key]}`);
//                 //console.log(str_obj[key]);
//                 countArr.push(str_obj[key]);
//                 break;
//                 //console.log(countArr);
//             }
//         }
//     }
//     return countArr;
// }

//Take 2
// function matchingStrings(strings, queries) {
//     // Write your code here
//     let q_obj = {};
    
//     for (let q of queries) {
//         if (!q_obj[q]) {
//             q_obj[q] = 1
//         }
//         // else {
//         //     q_obj[q]++; 
//         // }
//     }
//     console.log(q_obj);

//     for (let q in q_obj) {
//         for (let i of strings) {
//             if (strings[i] === q_obj[q]) {
//                 q_obj[q]++;
//             }
//         }
//     }
//     console.log(q_obj);

//     //return countArr;
// }

