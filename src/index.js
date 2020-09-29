exports.min = function min(array) {
    if (arguments[0] === undefined) return 0;
    const arr = Array.from(arguments[0]);
    if (arr.length === 0) return 0;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

exports.max = function max(array) {
    if (arguments[0] === undefined) return 0;
    const arr = Array.from(arguments[0]);
    if (arr.length === 0) return 0;
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

exports.avg = function avg(array) {

    if (arguments[0] === undefined) return 0;
    const arr = Array.from(arguments[0]);
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

//console.log(exports.min());
