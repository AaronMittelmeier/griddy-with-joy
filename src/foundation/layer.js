import { v4 as uuidv4 } from 'uuid';
//import { addUniversalFunctionsToClass } from '../functions/foundation.js';

export class Layer {
    constructor(height, width, depth) {
        this.identity = uuidv4().toString();
        this.type = 'Layer';
        
         this.cells = [];
        this.siblings = []

        this.height = height;
        this.width = width;
        this.depth = depth;

        this.cellArray = createCellArray(this.height, this.width, this.depth);

        this.addCellReference = function (cell) {
            this.cells.push({
                identity: cell.identity,
                type: cell.type
            });

            cell.siblings.push({
                identity: this.identity,
                type: this.type
            });
        };

        this.removeChild = function (child) {
            removeObjectFromArray(child, this.children);
            removeObjectFromArray(child, child.parents);
        };

        this.print = function () {
            console.log('\n');
            console.log('---- Type: ' + this.type + ' ---- Identity: ' + this.identity + ' ---- Details: ');
            console.table(this);
        };
        
        //addUniversalFunctionsToClass(this);
    }
};

function createCellArray(height, width, depth) {
    var cellArray = [];

    for (var row = 0; row < height; row++) {
        cellArray[row] = [];
        for (var column = 0; column < width; column++) {
            var cellIdentity = 'D' + depth + '-R' + row + '-C' + column;
            cellArray[row][column] = cellIdentity;
        }
    };

    return cellArray;
};
