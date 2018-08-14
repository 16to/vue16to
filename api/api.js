const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const a=require('./a.json');
const special_list=require('./special_list.json');
const skill_list=require('./skill_list.json');
const skill_detail =require('./skill_detail.json');
const skill_tag =require('./skill_tag.json');
const skill_type =require('./skill_type.json');
const skill_all =require('./skill_all.json');
const skill_all_tag =require('./skill_all_tag.json');
const skill_all_type =require('./skill_all_type.json');
const special_all=require('./special_all.json');
const special_detail=require('./special_detail.json');
const works_all=require('./works_all.json');
const system_tree=require('./system_tree.json');
const search_all=require('./search_all.json');
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

app.get('/api/special_detail/:id', function (req, res) {
    res.send(special_detail);
});

app.get('/api/special_all', function (req, res) {
    res.send(special_all);
});

app.get('/api/skill_list', function (req, res) {
    res.send(skill_list);
});

app.get('/api/skill_list10', function (req, res) {
    res.send(skill_list);
});

app.get('/api/works_all', function (req, res) {
    res.send(works_all);
});

app.get('/api/skill_all', function (req, res) {
    console.log(req.query);
    if(req.query.s=="tag"){
        res.send(skill_all_tag);
    }
    else if(req.query.s=="type"){
        res.send(skill_all_type);
    }
    else{
        res.send(skill_all);
    }

});

app.get('/api/skill_detail/:id', function (req, res) {
    res.send(skill_detail);
});

app.get('/api/skill_tag', function (req, res) {
    res.send(skill_tag);
});

app.get('/api/skill_type', function (req, res) {
    res.send(skill_type);
});

app.get('/api/search', function (req, res) {
    res.send(search_all);
});

app.get('/api/system_tree', function (req, res) {
    res.send(system_tree);
});
//init
var server = app.listen(3000, function () {
    console.log('listening on port %d', server.address().port);
});