/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/chai/index.d.ts" />

import chai = require('chai');
import voting = require('../controllers/voting');
var expect = chai.expect;

describe('my app tests', () => {
    it('should be able to init app', () =>{
        // Arrange
        var options = ['Awesome', 'Ok', 'Bad'];
        
        // Act
        voting.init(options);
        
        // Assert
        expect(voting.getTotalVotes()).to.be.equal(0);
    })
});

describe('voting-app', () => {
    beforeEach(() => {
        // Arrange
        var options = ['Awesome', 'Ok', 'Bad'];
        voting.init(options);
    });
    
    it('should be able to vote', () => {
        // Act
        voting.vote(0);
        
        // Assert
        expect(voting.getTotalVotes()).equals(1);
        
        expect(voting.getVotes()[0].votes).equals(1);
        expect(voting.getVotes()[1].votes).equals(0);
        expect(voting.getVotes()[2].votes).equals(0);
    });
})