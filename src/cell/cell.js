// import { addUniversalFunctionsToClass } from '../functions/foundation.js'
import { v4 as uuidv4 } from 'uuid';
import { World } from '../world/world.js';
import { removeObjectFromObjectArray } from '../../util/arrays.js'

export class Cell {
    constructor(heightIndex, widthIndex, depthIndex) {
        this.identity = uuidv4().toString(); 
        this.type = 'Cell';

        this.world = {};
        this.volumes = [];
        this.containers = [];
        this.siblings = [];
        this.faces = [];

        // relative to the world it is in - it can only belong to one world
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

        this.addToVolume = function (volume) {
            this.volumes.push({
                identity: volume.identity,
                relativeCoordinates: []
            });

            volume.cells.push({
                identity: this.identity,
                type: this.type,
                coordinates: this.coordinates
            });
        };

        this.removeFromVolume = function (volume) {
            removeObjectFromObjectArray(volume, this.volumes);
            removeObjectFromObjectArray(this, volume.cells);
        };

        this.addToWorld = function (world) {
            this.world.push({
                identity: world.identity,
                relativeCoordinates: []
            });

            world.cells.push({
                identity: this.identity,
                type: this.type
            });
        };

        this.removeFromWorld = function (world) {
            removeObjectFromObjectArray(world, this.world);
            removeObjectFromObjectArray(this, world.cells);
        };


        this.addContainer = function (container) {
            // object type must be a 'container' for a cell, it can't be a volume
            this.containers.push({
                identity: container.identity,
                type: container.type
            });
            // if (object.type == 'Cell') {
            //     this.layers[object.coordinates.depth.index].cellArray[object.coordinates.height.index][object.coordinates.width.index] = object.identity;
            // };
            container.cell = {
                identity: this.identity,
                type: this.type
            };
        };

        this.removeContainer = function (container) {
            removeObjectFromArray(container, this.containers);
            removeObjectFromArray(container, container.cell);
        };

        this.print = function () {
            console.log('\n');
            console.log('---- Type: ' + this.type + ' ---- Identity: ' + this.identity + ' ---- Details: ');
            console.table(this);
        };

        //addUniversalFunctionsToClass(this);
    };
};
