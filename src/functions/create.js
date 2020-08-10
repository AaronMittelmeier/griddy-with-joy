import { Layer } from '../foundation/layer.js';
import { Volume } from '../foundation/volume.js';
import { Cell } from '../cell/cell.js';
import {
    Strata
} from '../world/strata.js';
import {
    World
} from '../world/world.js';

export function createVolume(height, width, depth) {
    let newVolume = new Volume();

    for (var layer = 0; layer < depth; layer++) {
        let newLayer = new Layer(height, width, depth);
        newVolume.addLayer(newLayer);
        //console.table(newVolume);
    };

    return newVolume;
};

export function createCell(height, width, depth) {
    let newCell = new Cell(height, width, depth)
    //console.table(newCell);
    return newCell;
};

export function createWorld(height, width, depth) {
    let newWorld = new World(height, width, depth)

    for (var strata = 0; strata < depth; strata++) {
        let newStrata = new Strata(height, width, depth);
        newWorld.addStrata(newStrata);
        //console.table(newVolume);
    };

    return newWorld;
};
