import { Layer } from '../foundation/layer.js';
import { Volume } from '../foundation/volume.js';
import { Cell } from '../cell/cell.js';
import {
    Strata
} from '../world/strata.js';
import {
    World
} from '../world/world.js';

export function createEmptyVolume(height, width, layers) {
    let newVolume = new Volume();

    for (var layer = 0; layer < layers; layer++) {
        let newLayer = new Layer(height, width, layer);
        newVolume.addLayer(newLayer);
        //console.table(newVolume);
    };

    return newVolume;
};


export function createFullVolume(height, width, layers) {
    let newVolume = new Volume();

    for (var layer = 0; layer < layers; layer++) {
        let newLayer = new Layer(height, width, layer);
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

export function createWorld(height, width, stratas) {
    let newWorld = new World(height, width, stratas)

    for (var strata = 0; strata < stratas; strata++) {
        let newStrata = new Strata(height, width, strata);
        newWorld.addStrata(newStrata);
        //console.table(newVolume);
    };

    return newWorld;
};
