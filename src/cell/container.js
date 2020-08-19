import { removeObjectFromObjectArray } from '../../util/objectArray.js'

export class Container {
    constructor(cell) {
        this.cell = cell.identity;
        this.identity = uuidv4().toString();
        this.type = 'Container';

        
    }
}