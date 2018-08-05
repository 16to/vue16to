const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const a=require('./a.json');
const special_list=require('./special_list.json');
const skill_list=require('./skill_list.json');
const art_list=require('./art_list.json');
const comment_list=require('./comment_list.json');

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

app.get('/api/special_list', function (req, res) {
    res.send(special_list);
});

app.get('/api/skill_list', function (req, res) {
    res.send(skill_list);
});

app.get('/api/art_list', function (req, res) {
    res.send(art_list);
});

app.get('/api/comment_list', function (req, res) {
    res.send(comment_list);
});
//init
var server = app.listen(3000, function () {
    console.log('listening on port %d', server.address().port);
});
