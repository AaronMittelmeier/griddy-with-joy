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

export function createThreeDimensionalCube(size) {
    var height = size;
    var width = size;
    var stratas = size;

    let newVolume = new Volume();

    for (var strata = 0; strata < stratas; strata++) {
//        var twoDimensionalArray = [];
        for (var row = 0; row < height; row++) {
  //          twoDimensionalArray[row] = [];
            for (var column = 0; column < width; column++) {
                newVolume.addCell(createCell(row, column, strata));
            }
        };
    };

    return newVolume;
};

export function createCell(row, column, strata) {
    let newCell = new Cell(row, column, strata)
    //console.table(newCell);
    return newCell;
};

export function createWorld(height, width, stratas) {
    let newWorld = new World(height, width, stratas)
    for (var strata = 0; strata < stratas; strata++) {
        let newStrata = new Strata(height, width, strata);
        newWorld.addStrata(newStrata);

        for (var row = 0; row < height; row++) {
            for (var column = 0; column < width; column++) {
                let newCell = new Cell(row, column, strata);
                newWorld.integrateCell(newCell);
            };
        };
    };

    return newWorld;
};
