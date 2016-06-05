/// <reference path='typings/globals/node/index.d.ts' />
/// <reference path='typings/globals/express/index.d.ts' />

import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as voting from './controllers/voting';

var app = express();

console.log('HELLO YALL');

// parsing req/res
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true, encoded: false })); // parse application/...
app.use(bodyParser.json()); // parse application/json

// set static directory
app.use(express.static(path.join(__dirname, 'public')));

// routes
//import getRouter = require('./app_start/routeconfig');
//var router = getRouter();

var router = express.Router();

router.get('/api/getVotes', function(req, res){
    res.send(voting.getVotes());
})

router.post('/api/vote/:index', function(req, res){
    voting.vote(req.params.index);
    res.send(voting.getVotes());
});

app.use('/', router);

console.log('WEVE PASSED THE ROUTER!');

//app.set('port', process.env.PORT || 3000);

var port = process.env.PORT || 3000;

// run app
var server = app.listen(port, function(){
    voting.init(['Awesome', 'Ok', 'Bad']);
    console.log('Express server listening on port: ' + server.address().port);
})