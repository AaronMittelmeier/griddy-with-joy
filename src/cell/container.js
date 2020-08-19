import { removeObjectFromObjectArray } from '../../util/objectArray.js'

export class Container {
    constructor() {
        this.identity = uuidv4().toString();
        this.cell = {};
        this.type = 'Container'; // I think containers are going to be a catch all for objects like trees, etc
        this.subType = ''; 

        this.contents = [];

        this.addContent = function(content) {
            this.contents.push({
                identity: content.identity,
                type: content.type
            });
        }

        this.addToCell = function(cell) {
            cell.containers.push({
                identity: this.identity,
                type: this.type,
                contents: this.conents
            });

            this.cell = {
                identity: cell.identity,
                type: cell.type,
                coordinates: cell.coordinates
            }
        }
    }
}