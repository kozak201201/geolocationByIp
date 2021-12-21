const IndexOutOfRangeException = require('./exceptions/indexOutOfRangeException');

function binaryIpSearch(arr, ip, startIndex, finishIndex) {
    let midIndex = Math.trunc((startIndex + finishIndex) / 2);

    if (midIndex < 0 || midIndex >= arr.length) {
        throw new IndexOutOfRangeException('ip not found');
    }

    let midVal = arr[midIndex];

    if (ip < midVal[0]) {
        finishIndex = midIndex;
        return binaryIpSearch(arr, ip, startIndex - 1, finishIndex);
    }

    if (ip > midVal[1]) {
        startIndex = midIndex;
        return binaryIpSearch(arr, ip, startIndex, finishIndex + 1);
    }

    return midVal;
}

module.exports.binaryIpSearch = binaryIpSearch;