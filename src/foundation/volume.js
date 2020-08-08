import { v4 as uuidv4 } from 'uuid';

import {
    addParentToChildObject,
    addChildToParentObject,
    removeParentFromChildObject,
    removeChildFromParentObject
} from '../functions/heritage.js'


export class Volume {
    constructor() {
        this.identity = uuidv4().toString();
        this.layers = [];
        this.parents = [];
        this.children = [];
        this.type = 'Volume';

        this.addLayer = function (layer) {
            this.layers.push({
                layer: this.layers.length,
                height: layer.height,
                width: layer.width,
                depth: layer.depth,
                identity: layer.identity,
                cellArray: layer.cellArray
            });

            //this.print();
        };

        this.print = function () {
            console.log('---- Type: ' + this.type + ' ---- Identity: ' + this.identity + ' ---- Details: ');
            console.table(this);
            //console.log(this.layers);
        };

        this.addChild = function (childObject) {
            this.children.push({
                childIdentity: childObject.identity,
                childType: childObject.type
            });

            addParentToChildObject(childObject, this.identity, this.type);
        };

        this.addParent = function (parentObject) {
            this.parents.push({
                parentIdentity: parentObject.identity,
                parentType: parentObject.type
            });

            addChildToParentObject(parentObject, this.identity, this.type);
        };

        this.removeChild = function (childObject) {
            removeObjectFromArray(childObject, this.children);
            // need to remove the 
        }


    }
}

Volume.prototype.info = function () {

};
