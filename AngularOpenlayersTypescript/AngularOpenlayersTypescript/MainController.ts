/// <reference path="reference.ts" />
module Stmt {

    interface IMap {
        map: ol.Map;
    }

    export class MainController implements IMap {
        map: ol.Map;
        test: string;

        constructor() {
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
            })
        }
    }


}


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

