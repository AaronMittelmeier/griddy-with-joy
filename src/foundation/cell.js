import { addParentToChildObject, addChildToParentObject } from '../functions/heritage.js'

import {
    v4 as uuidv4
} from "uuid";

export class Cell {
    constructor(heightIndex, widthIndex, depthIndex) {
        this.identity = uuidv4().toString();
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

        this.addChild = function (childObject) {
            addChildToParentObject(this.children, childObject.identity, childObject.type);
            addParentToChildObject(childObject.parents, this.identity, this.type);
        };

        this.addParent = function (parentObject) {
            addParentToChildObject(this.parents, parentObject.identity, parentObject.type);
            addChildToParentObject(parentObject.children, this.identity, this.type);
        };

        this.removeChild = function (childObject) {
            removeObjectFromArray(childObject, this.children);
            removeObjectFromArray(childObject.parents, this.children);
        };

        this.removeParent = function (parentObject) {
            removeObjectFromArray(parentObject, this.parents);
            removeObjectFromArray(parentObject.parents, this.parents);
        };
        
    };
};
