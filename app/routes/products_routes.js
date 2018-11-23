const axios = require('axios');

module.exports = function(app, db) {
    app.post('/products', (req, res) => {
        console.log(req.body)
        res.send('Hello')
    });

    app.get('/products', (req, res) => {
        // axios.get('https://5bf724c95cd3180013792838.mockapi.io/products')
        // .then(function(response) {
        //     res.send(response)
        // }).catch(function (error) {
        //     console.log(error);
        //   });
        res.send('Hello')
    })
}