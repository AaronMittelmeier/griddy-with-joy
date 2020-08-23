import { Layer } from '../foundation/layer.js';
import { Volume } from '../foundation/volume.js';
import { Cell } from '../cell/cell.js';

import {
    Strata
} from '../world/strata.js';

import {
    addObjectToObjectArray 
} from '../../util/arrays.js'

import {
    World
} from '../world/world.js';

import {
    getCellByCoordinatesIndex
} from '../functions/locator.js'

export function createEmptyVolume(height, width, layers) {
    let newVolume = new Volume();

    for (var layer = 0; layer < layers; layer++) {
        newVolume.addLayer(height, width, layer);
    };

    return newVolume;
};

export function createThreeDimensionalCube(size) {
    var height = size;
    var width = size;
    var stratas = size;

    let newVolume = new Volume();
    var cellObjectArray = [];

    for (var strata = 0; strata < stratas; strata++) {
        newVolume.addLayer(height, width, strata);

        for (var row = 0; row < height; row++) {
            for (var column = 0; column < width; column++) {
                addObjectToObjectArray(createCell(row, column, strata), cellObjectArray);
            };
        };
    };

    cellObjectArray.forEach((cell) => newVolume.addCell(cell));
    return newVolume;
};

export function createThreeDimensionalCubeWrapper(world, size) {
    var height = size;
    var width = size;
    var stratas = size;

    let newVolume = new Volume();
    var cellObjectArray = [];

    for (var strata = 0; strata < stratas; strata++) {
        newVolume.addLayer(height, width, strata);

        for (var row = 0; row < height; row++) {
            for (var column = 0; column < width; column++) {
                addObjectToObjectArray(getCellByCoordinatesIndex(row, column, strata, world), cellObjectArray);
            };
        };
    };

    cellObjectArray.forEach((cell) => newVolume.addCell(cell));
    return newVolume;
};

export function createCell(row, column, strata) {
    let newCell = new Cell(row, column, strata)
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
