import { v4 as uuidv4 } from 'uuid';

import {
    addUniversalFunctionsToClass
} from '../functions/foundation.js'
export class Volume {
    constructor() {
        addUniversalFunctionsToClass(this);

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
        };
    }
}

Volume.prototype.info = function () {

};
