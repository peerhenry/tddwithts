/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/chai/index.d.ts" />
"use strict";
var chai = require('chai');
var voting = require('../controllers/voting');
var expect = chai.expect;
describe('my app tests', function () {
    it('should be able to init app', function () {
        // Arrange
        var options = ['Awesome', 'Ok', 'Bad'];
        // Act
        voting.init(options);
        // Assert
        expect(voting.getTotalVotes()).to.be.equal(0);
    });
});
describe('voting-app', function () {
    beforeEach(function () {
        // Arrange
        var options = ['Awesome', 'Ok', 'Bad'];
        voting.init(options);
    });
    it('should be able to vote', function () {
        // Act
        voting.vote(0);
        // Assert
        expect(voting.getTotalVotes()).equals(1);
        expect(voting.getVotes()[0].votes).equals(1);
        expect(voting.getVotes()[1].votes).equals(0);
        expect(voting.getVotes()[2].votes).equals(0);
    });
});
