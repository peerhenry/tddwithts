"use strict";
var vote_1 = require('../models/vote');
var votes;
function init(options) {
    votes = options.map(function (option) { return new vote_1.default(option); });
}
exports.init = init;
;
function getTotalVotes() {
    var sum = 0;
    votes.forEach(function (vote) {
        sum += vote.votes;
    });
    return sum;
}
exports.getTotalVotes = getTotalVotes;
;
function vote(index) {
    votes[index].votes++;
}
exports.vote = vote;
;
function getVotes() {
    return votes;
}
exports.getVotes = getVotes;
;
