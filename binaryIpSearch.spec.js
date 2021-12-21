const {binaryIpSearch} = require('./ipBinarySearch');
const IndexOutOfRangeError = require('./exceptions/indexOutOfRangeException');

describe('binaryIpSearch func', function () {
});

test('binaryIpSearch should return correct arr', () => {
    const arr = [
        ["0","16777215","-","-"],
        ["16777216","16777471","US","United States of America"],
        ["16777472","16778239","CN","China"],
        ["16778240","16779263","AU","Australia"],
    ]
    let ip = 16777217;

    let resutlArr = ["16777216","16777471","US","United States of America"];
    expect(binaryIpSearch(arr,  ip, 0,arr.length-1)).toEqual(resutlArr);

    ip = 0;
    resutlArr = ["0","16777215","-","-"];
    expect(binaryIpSearch(arr,  ip, 0,arr.length-1)).toEqual(resutlArr);
})

test('binaryIpSearch should return exception', () => {
    const arr = [
        ["0","16777215","-","-"],
        ["16777216","16777471","US","United States of America"],
        ["16777472","16778239","CN","China"],
        ["16778240","16779263","AU","Australia"],
    ]
    let ip = -1;
    expect(() => binaryIpSearch(arr,  ip, 0,arr.length-1)).toThrow(IndexOutOfRangeError);

    ip = 16779264;
    expect(() => binaryIpSearch(arr,  ip, 0,arr.length-1)).toThrow(IndexOutOfRangeError);
})
