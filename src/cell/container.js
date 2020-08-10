export class Container {
    constructor(cell) {
        this.identity = uuidv4().toString();
        this.type = 'Container';

        this.cell = cell.identity;
    }
}