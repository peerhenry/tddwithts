/// <reference path='../typings/globals/node/index.d.ts' />
/// <reference path='../typings/globals/express/index.d.ts' />

import express = require('express');
import Vote = require('../models/Vote');
import voting = require('../controllers/voting');

function getRouter(){
    var router = express.Router();

    router.get('/api/getVotes', function(req, res){
        res.send(voting.getVotes());
    })

    router.post('api/vote/:index', function(req, res){
        voting.vote(req.params.index);
        res.send(voting.getVotes());
    });
    
    return router;
}

export = getRouter;