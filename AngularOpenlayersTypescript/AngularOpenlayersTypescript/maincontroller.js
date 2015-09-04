/// <reference path="reference.ts" />
var Stmt;
(function (Stmt) {
    var MainController = (function () {
        function MainController() {
            this.test = "TEst";
            this.map = new ol.Map({
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                view: new ol.View({
                    center: [0, 0],
                    zoom: 4
                })
            });
        }
        return MainController;
    })();
    Stmt.MainController = MainController;
})(Stmt || (Stmt = {}));
///// <reference path="../../Content/typings/angular/angular.d.ts" />
///// <reference path="../../Content/typings/openlayers/openlayers.d.ts" />
//module MapModule {
//    export interface IMapScopes extends ng.IScope {
//        map: ol.Map;
//    }
//    export class MapControllerScope {
//        static $inject = ['$scope'];
//        map: ol.Map;
//        name:string;
//        constructor(isolateScope: TypeScriptAndAngular.Directives.IToDoListScope) {
//            this.name = isolateScope.name;
//            this.map = this.initiateMap();
//        }
//    }
//}
//# sourceMappingURL=MainController.js.map