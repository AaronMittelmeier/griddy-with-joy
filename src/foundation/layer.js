import { v4 as uuidv4 } from 'uuid';
import { createTwoDimensionalArray } from '../../util/arrays.js'
//import { addUniversalFunctionsToClass } from '../functions/foundation.js';

export class Layer {
    constructor(height, width, depth) {
        this.identity = uuidv4().toString();
        this.type = 'Layer';
        this.volume = {};
        
        this.cells = [];

        this.height = height;
        this.width = width;
        this.depth = depth;

        this.cellFramework = () => {
            var cellArray = createTwoDimensionalArray(this.height, this.width, this.depth);
            // cellArray.forEach((cell) => {
            //     cell.length
            // })
            // trying to set up the cell framework to automatically find the IDs of cells that are in this position.
        }
            

        this.addCell = function (cell) {
            if (cell.coordinates.depth == layer.depth) {
                this.cells.push({
                    identity: cell.identity,
                    type: cell.type,
                    coordinates: cell.coordinates
                })
            } else {
                console.log("cannot append cell to layer")
            }
        };

        this.removeCell = function (cell) {
            removeObjectFromObjectArray(cell, this.cells);
        };

        this.addToVolume = function (volume) {
            this.volume = {
                identity: volume.identity,
                type: volume.type
            };

            volume.layers.push({
                identity: this.identity,
                type: this.type
            });
        };

        this.removeFromVolume = function (volume) {
            this.volume = {};
            removeObjectFromObjectArray(this, volume.layers);
        };

        this.print = function () {
            console.log('\n');
            console.log('---- Type: ' + this.type + ' ---- Identity: ' + this.identity + ' ---- Details: ');
            console.table(this);
        };
        
        //addUniversalFunctionsToClass(this);
    }
};