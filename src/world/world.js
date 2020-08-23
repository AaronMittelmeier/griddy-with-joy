import { v4 as uuidv4 } from 'uuid';
import { removeObjectFromObjectArray } from '../../util/arrays.js'

export class World {
    constructor() {
        this.identity = uuidv4().toString();
        this.name = "AaronWorld1";
        this.strata = [];
        this.cells = [];
        this.volumes = [];
        this.type = 'World';

        this.properties = [];
        this.affectedBy = []; // things that change me
        this.affectsOthers = []; // things that i change

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
                volumes: cell.volumes,
                type: cell.type,
                coordinates: cell.coordinates
            });

            this.strata[cell.coordinates.depth.index].cellFramework[cell.coordinates.height.index][cell.coordinates.width.index] = cell.identity;

            cell.world = {
                identity: this.identity,
                name: this.name
            };
        };

        this.disintegrateCell = function (cell) {
            var objectArray = this.cells;        
            removeObjectFromObjectArray(cell, objectArray);
            this.strata[cell.coordinates.depth.index].cellFramework[cell.coordinates.height.index][cell.coordinates.width.index] = '';
            cell.world = {};
        }; 

        this.integrateVolume = function (volume) {
            var cellArray = volume.cells;  
        
            this.volumes.push({
                identity: volume.identity,
                type: volume.type
            }); 

            cellArray.forEach((cell) => {
                this.integrateCell(cell);
            });

            volume.world = {
                identity: this.identity,
                name: this.name
            };
        };

        this.disintegrateVolume = function (volume) {
            var cellArray = volume.cells;     

            cellArray.forEach((cell) => {
                this.disintegrateCell(cell);
            })

            removeObjectFromObjectArray(volume, this.volumes);
            
            volume.world = '';
        };

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
