const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const port = 8000;
app.use(bodyParser.urlencoded({extended: true}))
require('./app/routes')(app, {});
app.listen(port, () => {
    console.log("We are live on" + port);
})

async function returnJsonObj(arr) {
    const productArr = arr;
    let JsonObj = [];
    
    for(let i = 0; i < productArr.length; i++) {
        const res = await axios.get(`https://5bf724c95cd3180013792838.mockapi.io/products/${productArr[i]}`)
        // const data = res.data
        JsonObj.push(res.data);
    }
    return JsonObj
}

let arrSKUs = [1, 2, 4, 5, 23, 12];
let jsonObj =  returnJsonObj(arrSKUs);

jsonObj.then(result => {
    console.log(result);
});

