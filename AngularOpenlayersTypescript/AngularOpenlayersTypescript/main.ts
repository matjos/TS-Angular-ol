/// <reference path="reference.ts" />

var app = angular.module('app', ['ngeo']);
app.controller('mainController', Stmt.MainController);


//app.directive('myDirective', Directive.MyDirective.Init);
app.directive('myDirective', () => new Directive.MyDirective());

