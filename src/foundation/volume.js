import { v4 as uuidv4 } from 'uuid';

import  { 
    removeObjectFromObjectArray, 
    createTwoDimensionalArray 
        } from '../../util/arrays.js'

export class Volume {
    constructor() {
        this.identity = uuidv4().toString();
        this.layers = [];
        
        this.world = {};
        this.volumes = [];
        this.siblings = [];
        this.cells = [];
        
        this.properties = [];
        this.affectedBy = []; // things that change me
        this.affectsOthers = []; // things that i change

        this.type = 'Volume';

        this.addAffectedBy = function (affect) {
            this.affectedBy.push({
                identity: affect.identity,
                type: affect.type,
                propertiesAffected: affect.propertiesAffected
            });
        };

        this.addAffectsOthers = function (affector) {
            this.affectsOthers.push({
                identity: affector.identity,
                type: affector.type,
                propertiesAffected: affector.propertiesAffected
            });
        };

        this.addCell = function (cell, isOrigin) {
            isOrigin = originEvaluator(this.cells, isOrigin);
            
            this.cells.push({
                identity: cell.identity,
                volumes: cell.volumes,
                volumeOrigin: isOrigin,
                type: cell.type,
                coordinates: cell.coordinates,
                world: this.world
            });

            this.layers[cell.coordinates.depth.index].cellFramework[cell.coordinates.height.index][cell.coordinates.width.index] = cell.identity;

            cell.volumes.push({
                identity: this.identity,
                world: this.world,
                type: this.type,
                isOrigin: isOrigin,
                relativeCoordinates: []
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
            removeObjectFromObjectArray(this, world.volumes);
            this.world = {};
        };
        
        this.addLayer = function (height, width, depth) {
            this.layers.push({
                layer: this.layers.length,
                height: height,
                width: width,
                depth: depth,
                identity: uuidv4().toString(),
                cellFramework: createTwoDimensionalArray(height, width, depth)
            });
        };

        // no removeLayer
        this.print = function () {
            console.log('\n');
            console.log('---- Type: ' + this.type + ' ---- Identity: ' + this.identity + ' ---- Details: ');
            console.table(this);
        };

        this.getIdentity = function () {
            const idObject = {
                identity: this.identity,
                type: this.type
            };

            return idObject;
        };
    };
};

// Volume.prototype.info = function () {

// };

function originEvaluator (cellOriginArray, isOrigin) {
    if (typeof isOrigin == 'undefined') {
        isOrigin = false
    };

    var hasOrigin = '';

    if (cellOriginArray.length > 0 ) {
        cellOriginArray.forEach((cellObject) => {
            if (hasOrigin == false) {
                if (cellObject.volumeOrigin == true) {
                    hasOrigin = true;
                } else {
                    hasOrigin = false;
                };
            };
        });
    } else {
        hasOrigin = false;
    };

    if (hasOrigin == false) {
        isOrigin = true;
    }

    return isOrigin;
}