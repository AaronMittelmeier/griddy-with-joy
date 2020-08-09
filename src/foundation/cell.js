import {
    removeObjectFromObjectArray
} from '../functions/objectArray.js';

import { addUniversalFunctionsToClass } from '../functions/foundation.js'

import {
    v4 as uuidv4
} from "uuid";

export class Cell {
    constructor(heightIndex, widthIndex, depthIndex) {
        addUniversalFunctionsToClass(this);

        this.identity = uuidv4().toString(); 
        // var layer = getCellIdentityByCoords(2, 2, 2);
        // 
        this.type = "Cell";

        this.parents = [];
        this.children = [];

        this.coordinates = {
            height: {
                index: heightIndex,
                row: heightIndex + 1
            },
            width: {
                index: widthIndex,
                column: widthIndex + 1
            },
            depth: {
                index: depthIndex,
                layer: depthIndex + 1
            }
        };

        this.print = function () {
            console.log("---- Type: " + this.type + " ---- Identity: " + this.identity + " ---- Details: ");
            console.table(this);
        };

        // this.addChild = function (object) {
        //     this.children.push({
        //         identity: object.identity,
        //         type: object.type
        //     });

        //     object.parents.push({
        //         identity: this.identity,
        //         type: this.type
        //     });
        // };

        // this.addParent = function (object) {
        //     this.parents.push({
        //         identity: object.identity,
        //         type: object.type
        //     });

        //     object.children.push({
        //         identity: this.identity,
        //         type: this.type
        //     });
        // };

        // this.removeChild = function (object) {
        //     removeObjectFromArray(object, this.children);
        //     removeObjectFromArray(object, object.parents);
        // };

        // this.removeParent = function (object) {
        //     removeObjectFromArray(object, this.parents);
        //     removeObjectFromArray(object, object.children);
        // };
        
        //this.print();
    };
};
