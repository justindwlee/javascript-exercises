function sumUpTo (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++)
        sum += i;

    return sum;
}

const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b))
        return "ERROR";

    if (a < 0 || b < 0)
        return "ERROR";

    const start = a < b ? a : b;
    const end = a > b ? a : b;
    return sumUpTo(end) - sumUpTo(start - 1);
};



// Do not edit below this line
module.exports = sumAll;
