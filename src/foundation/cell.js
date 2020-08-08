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

        this.addChild = function (object) {
            this.children.push({
                childIdentity: object.identity,
                childType: object.type
            });

            addParentToChildObject(object, this.identity, this.type);
        };

        this.addParent = function (object) {
            this.parents.push({
                parentIdentity: object.identity,
                parentType: object.type
            });

            addChildToParentObject(object, this.identity, this.type);
        };
    };
};
