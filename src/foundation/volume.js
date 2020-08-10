import { v4 as uuidv4 } from 'uuid';

// import {
//     addUniversalFunctionsToClass
// } from '../functions/foundation.js'

export class Volume {
    constructor() {
        this.identity = uuidv4().toString();
        this.layers = [];
        
        this.volumes = [];
        this.siblings = [];

        this.cells = [];
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

        this.addCell = function (cell) {
            this.cells.push({
                identity: cell.identity,
                type: cell.type
            });

            // this works but we need to move this part to the cell -> world
            // Volume needs to be itself, an index object, as is layer.
            // the only thing that really matters is the specific cell position in the world
            // if (object.type == 'Cell') {
            //     this.layers[object.coordinates.depth.index].cellArray[object.coordinates.height.index][object.coordinates.width.index] = object.identity;
            // };

            cell.volumes.push({
                identity: this.identity,
                type: this.type
            });
        };
        
        this.addToVolume = function (volume) {
            // should it be able to belong to 'all volumes, or should we nest volumes?
            // probably nest because who is to say that multiple volumes can not exist as attribute layers on top

            this.volumes.push({
                identity: volume.identity,
                type: volume.type
            });

            volume.volumes.push({
                identity: this.identity,
                type: this.type
            });
        };

        this.removeCell = function (cell) {
            removeObjectFromArray(cell, this.cells);
            removeObjectFromArray(cell, cell.volumes);
        };

        this.removeFromVolume = function (volume) {
            removeObjectFromArray(volume, this.volumes);
            removeObjectFromArray(volume, volume.volumes);
        };

        this.print = function () {
            console.log('\n');
            console.log('---- Type: ' + this.type + ' ---- Identity: ' + this.identity + ' ---- Details: ');
            console.table(this);
        };
    }
}

Volume.prototype.info = function () {

};
