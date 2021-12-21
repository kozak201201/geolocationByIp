const fs = require("fs");
const readline = require("readline");

async function getArrFromCSV(filePath) {
    let stream = fs.createReadStream(filePath)
    let reader = readline.createInterface({ input: stream })
    let arr = []
    reader.on("line", (row) => {
        row = row.replaceAll('"', '');
        arr.push(row.split(","))
    })
    return new Promise((resolve) => {
        reader.on('close', () => {
            resolve(arr);
        })
    })
}

module.exports.getArrFromCSC = getArrFromCSV;