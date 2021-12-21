require('dotenv').config();
const express = require('express');

const {getArrFromCSC} = require('./csvReader');
const {binaryIpSearch} = require('./ipBinarySearch');

const filePath = 'IP2LOCATION-LITE-DB1.CSV'
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/getMyIpRangeAndCountry', async (req, res) => {
    const arrFromCSV = await getArrFromCSC(filePath);
    let userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    userIp = userIp.replaceAll('.', '');

    try {
        const resultArr = binaryIpSearch(arrFromCSV, userIp, 0, arrFromCSV.length - 1);
        const resultJson = {
            from: resultArr[0],
            to: resultArr[1],
            country: resultArr[3]
        }

        res.json(resultJson);
    } catch (err) {
        res.status(err.code || 500).json({message: `${err.message}`});
    }
});

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port`)
})