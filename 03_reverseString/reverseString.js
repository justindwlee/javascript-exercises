// const reverseString = function(str) {
//     let strArray = str.split('');
//     strArray.reverse();

//     let result = "";
//     for (const letter of strArray) {
//         result += letter;
//     }

//     return result;
// };

const reverseString = function (str) {
    return str.split('').reverse().join('');
}


// Do not edit below this line
module.exports = reverseString;
