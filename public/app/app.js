/// <reference path="../../typings/globals/angular/index.d.ts"/>
var Voting;
(function (Voting) {
    'use strict';
    angular.module('voting', []);
    function getModule() {
        return angular.module("voting");
    }
    Voting.getModule = getModule;
})(Voting || (Voting = {}));
