import { v4 as uuidv4 } from 'uuid';

import { removeObjectFromObjectArray } from '../../util/arrays.js'
// import {
//     addUniversalFunctionsToClass
// } from '../functions/foundation.js'

export class Volume {
    constructor() {
        this.identity = uuidv4().toString();
        this.layers = [];
        
        this.world = {};
        this.volumes = [];
        this.siblings = [];
        this.cells = [];

        this.modifications = []; // things that change me
        this.modifiers = []; // things that i change

        this.type = 'Volume';

        this.addModifications = function (modification) {
            this.modifications.push({
                identity: modification.identity,
                objectTypesToModify: []
            })
        };

        this.addModfiers = function (modifier) {
            this.modifiers.push({
                identity: modifier.identity,
                objectTypesToModify: []
            })
        }

        this.addCell = function (cell, isOrigin) {
            if(typeof isOrigin == 'undefined') {isOrigin = false};

            this.cells.push({
                identity: cell.identity,
                volumeOrigin: isOrigin,
                type: cell.type,
                coordinates: cell.coordinates
            });

            cell.volumes.push({
                identity: this.identity,
                volumeOrigin: isOrigin,
                type: this.type,
            });
        };

        this.removeCell = function (cell) {
            removeObjectFromObjectArray(cell, this.cells);
            removeObjectFromObjectArray(this, cell.volumes);
        };
        
        this.addToVolume = function (volume) {
            this.volumes.push({
                identity: volume.identity,
                type: volume.type
            });

            volume.volumes.push({
                identity: this.identity,
                type: this.type
            });
        };

        this.removeFromVolume = function (volume) {
            removeObjectFromObjectArray(volume, this.volumes);
            removeObjectFromObjectArray(this, volume.volumes);
        };

        this.addToWorld = function (world) {
            this.world = {
                identity: volume.identity,
                type: volume.type
            };

            world.volumes.push({
                identity: this.identity,
                type: this.type
            });
        };

        this.removeFromWorld = function (world) {
            removeObjectFromObjectArray(world, this.worlds);
            removeObjectFromObjectArray(this, world.volumes);
        };
        
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

        // no removeLayer
        this.print = function () {
            console.log('\n');
            console.log('---- Type: ' + this.type + ' ---- Identity: ' + this.identity + ' ---- Details: ');
            console.table(this);
        };
    }
}

Volume.prototype.info = function () {

};
