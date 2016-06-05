/// <reference path="../typings/globals/angular-protractor/index.d.ts" />
/// <reference path="../typings/globals/jasmine/index.d.ts" />
describe('Voting', function () {
    it('should increase vote count', function () {
        // Arrange
        browser.get('http://localhost:3000');
        var firstElement = element(by.css('#votes ul:first-child a'));
        // Act
        firstElement.click();
        // Assert
        expect(firstElement.getText()).toEqual('Awesome (1)');
    });
});
