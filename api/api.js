const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const a=require('./a.json');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());
// req.params ex: /user/:id
// req.query ex: ?id=12
// req.body ex: {"cc": 0}

// get demo
app.get('/api/a', function (req, res) {
    res.send(a);
});
//post demo
app.post('/api/a', function (req, res) {
    console.log(req);
    res.send(a);
});
//delete demo
app.delete('/api/a', function (req, res) {
    res.send(a);
});
//put demo
app.put('/api/b/:id', function (req, res) {
    console.log(req);
    res.send(a);
});
//init
var server = app.listen(3000, function () {
    console.log('listening on port %d', server.address().port);
});
