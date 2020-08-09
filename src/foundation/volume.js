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
