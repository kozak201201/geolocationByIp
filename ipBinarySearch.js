const IndexOutOfRangeException = require('./exceptions/indexOutOfRangeException');

function binaryIpSearch(arr, ip, startIndex, finishIndex) {
    let midIndexOfArray = Math.trunc((startIndex + finishIndex) / 2);

    if (midIndexOfArray < 0 || midIndexOfArray >= arr.length) {
        throw new IndexOutOfRangeException('ip not found');
    }

    let midArr = arr[midIndexOfArray];

    if (ip < midArr[0]) {
        finishIndex = midIndexOfArray;
        return binaryIpSearch(arr, ip, startIndex - 1, finishIndex);
    }

    if (ip > midArr[1]) {
        startIndex = midIndexOfArray;
        return binaryIpSearch(arr, ip, startIndex, finishIndex + 1);
    }

    return midArr;
}

module.exports.binaryIpSearch = binaryIpSearch;