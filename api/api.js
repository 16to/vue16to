const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const a=require('./a.json');
const special_list=require('./special_list.json');
const skill_list=require('./skill_list.json');
const skill_detail =require('./skill_detail.json');
const skill_tag =require('./skill_tag.json');
const skill_type =require('./skill_type.json');
const special_type =require('./special_type.json');
const works_type =require('./works_type.json');
const skill_all =require('./skill_all.json');
const skill_all_tag =require('./skill_all_tag.json');
const skill_all_type =require('./skill_all_type.json');
const special_all=require('./special_all.json');
const special_detail=require('./special_detail.json');
const works_all=require('./works_all.json');
const system_tree=require('./system_tree.json');
const javascript_tree=require('./javascript_tree.json');
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
app.get('/16to/a', function (req, res) {
    res.send(a);
});
//post demo
app.post('/16to/a', function (req, res) {
    res.send(a);
});
//delete demo
app.delete('/16to/a', function (req, res) {
    res.send(a);
});
//put demo
app.put('/16to/b/:id', function (req, res) {
    res.send(a);
});

app.get('/16to/special_list', function (req, res) {
    res.send(special_list);
});

app.get('/16to/special_detail/:id', function (req, res) {
    res.send(special_detail);
});

app.get('/16to/special_all', function (req, res) {
    res.send(special_all);
});

app.get('/16to/skill_list', function (req, res) {
    res.send(skill_list);
});

app.get('/16to/skill_list10', function (req, res) {
    res.send(skill_list);
});

app.get('/16to/works_all', function (req, res) {
    res.send(works_all);
});

app.get('/16to/skill_all', function (req, res) {
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

app.get('/16to/skill_detail/:id', function (req, res) {
    res.send(skill_detail);
});

app.get('/16to/skill_tag', function (req, res) {
    res.send(skill_tag);
});

app.get('/16to/skill_type', function (req, res) {
    res.send(skill_type);
});

app.get('/16to/special_type', function (req, res) {
    res.send(special_type);
});

app.get('/16to/works_type', function (req, res) {
    res.send(works_type);
});

app.get('/16to/search', function (req, res) {
    res.send(search_all);
});

app.get('/16to/system_tree', function (req, res) {
    if(req.query.s=="0"){
        res.send(javascript_tree);
    } else{
        res.send(system_tree);
    }
});
//init
var server = app.listen(3001, function () {
    console.log('listening on port %d', server.address().port);
});
