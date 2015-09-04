var Directive;
(function (Directive) {
    var MyDirective = (function () {
        function MyDirective() {
            this.templateUrl = 'test.html';
        }
        return MyDirective;
    })();
    Directive.MyDirective = MyDirective;
})(Directive || (Directive = {}));
//# sourceMappingURL=MyDirective.js.map