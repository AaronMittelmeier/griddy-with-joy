import { v4 as uuidv4 } from 'uuid';
import {
    removeObjectFromArray
} from '../../util/spliceObjectArray.js';

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

        this.addChild = function (object) {
            this.children.push({
                identity: object.identity,
                type: object.type
            });

            if (object.type == 'Cell') {
                this.layers[object.coordinates.depth.index].cellArray[object.coordinates.height.index][object.coordinates.width.index] = object.identity;
            }
            //var layerCellIndex = this.layers[identity].cellArray[row][column].identity
            //this.children.i
            //this.layers[identity].cellArray[row][column].identity = object.identity
            // if object.type = cell, replace cell ID in layer,
            // with this cell this.identity, but also store the original
            // layer cell id DX-RY-CZ in the Cell, so we can use
            // the id type to let us know whether or not this cell is active
            // at the correct position

            object.parents.push({
                identity: this.identity,
                type: this.type
            });
        };

        this.addParent = function (object) {
            this.parents.push({
                identity: object.identity,
                type: object.type
            });

            object.children.push({
                identity: this.identity,
                type: this.type
            });
        };

        this.removeChild = function (object) {
            removeObjectFromArray(object, this.children);
            removeObjectFromArray(object, object.parents);
        };

        this.removeParent = function (object) {
            removeObjectFromArray(object, this.parents);
            removeObjectFromArray(object, object.children);
        };
    }
}

Volume.prototype.info = function () {

};
