import { v4 as uuidv4 } from 'uuid';
import {
    removeObjectFromArray
} from '../../util/spliceObjectArray.js';


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
            addChildToParentObject(this.children, childObject.identity, childObject.type);
            addParentToChildObject(childObject.parents, this.identity, this.type);
        };

        this.addParent = function (parentObject) {
            addParentToChildObject(this.parents, parentObject.identity, parentObject.type);
            addChildToParentObject(parentObject.children, this.identity, this.type);
        };

        this.removeChild = function (childObject) {
            removeObjectFromArray(childObject, this.children);
           // removeObjectFromArray(childObject.parents, this.children);
        };

        this.removeParent = function (parentObject) {
            removeObjectFromArray(parentObject, this.parents);
          //  removeObjectFromArray(parentObject.parents, this.parents);
        }



    }
}

Volume.prototype.info = function () {

};
