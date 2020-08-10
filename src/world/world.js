import { v4 as uuidv4 } from 'uuid';

export class World {
    constructor() {
        this.identity = uuidv4().toString();
        this.name = "AaronWorld1";
        this.strata = [];
        this.cells = [];
        this.type = 'World';

        this.addStrata = function (strata) {
            this.strata.push({
                strata: this.strata.length,
                height: strata.height,
                width: strata.width,
                depth: strata.depth,
                identity: strata.identity,
                cellFramework: strata.cellFramework
            });
        };

        this.integrateCell = function (cell) {
            this.cells.push({
                identity: cell.identity,
                coordinates: cell.coordinates
            });

            this.strata[cell.coordinates.depth.index].cellFramework[cell.coordinates.height.index][cell.coordinates.width.index] = cell.identity;

            
        };

        this.disintegrateCell = function (cell) {
            removeObjectFromArray(cell, this.cells);
            removeObjectFromArray(cell, this.strata[cell.coordinates.depth.index].cellFramework[cell.coordinates.height.index][cell.coordinates.width.index]);
        };

        this.print = function () {
            console.log('\n');
            console.log('---- Type: ' + this.type + ' ---- Identity: ' + this.identity + ' ---- Details: ');
            console.table(this);
        };

        this.getIdentity = function () {
            return this.identity;
        };
    };
};





// Volume.prototype.info = function () {

// };
