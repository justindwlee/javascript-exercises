// const removeFromArray = function() {
//     const arr = arguments[0];
//     const targets = Array.prototype.slice.call(arguments, 1);
//     let result = [];

//     outer: for (const ele of arr) {
//         for (const target of targets) {
//             if (ele === target)
//                 continue outer;
//         }
//         result.push(ele);
//     }

//     return result;
// };



// function removeFromArray(arr, ...args) {
//     const result = [];

//     arr.forEach((item) => {
//         if (!args.includes(item))
//             result.push(item); 
//     });

//     return result;
// }



// let removeFromArray = function(arr, ...args) {
//     return arr.filter(item => !args.includes(item))
// }

// console.log(removeFromArray([1,2,3,4], 2,3));







// Do not edit below this line
module.exports = removeFromArray;
