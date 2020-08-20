import { v4 as uuidv4 } from 'uuid';
import { createTwoDimensionalArray } from '../../util/arrays.js'
//import { addUniversalFunctionsToClass } from '../functions/foundation.js';

export class Strata {
    constructor(height, width, depth) {
        this.identity = uuidv4().toString();
        this.type = 'Strata';
        this.cells = []

        this.height = height;
        this.width = width;
        this.depth = depth;

        this.cellFramework = createTwoDimensionalArray(this.height, this.width, this.depth);

        this.addCellReference = function (cell) {
            this.cells.push({
                identity: cell.identity,
                type: cell.type
            });

            if (cell.type == 'Cell') {
                this.cellFramework[object.coordinates.depth.index].cellArray[object.coordinates.height.index][object.coordinates.width.index] = object.identity;
            };

            cell.parents.push({
                identity: this.identity,
                type: this.type
            });
        };

        this.print = function () {
            console.log('\n');
            console.log('---- Type: ' + this.type + ' ---- Identity: ' + this.identity + ' ---- Details: ');
            console.table(this);
        };
        
        //addUniversalFunctionsToClass(this);
    }
};