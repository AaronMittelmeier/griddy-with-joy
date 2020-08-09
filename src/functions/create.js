import { Layer } from '../foundation/layer.js';
import { Volume } from '../foundation/volume.js';
import { Cell } from '../foundation/cell.js';

export function createVolume(height, width, layers) {
    let newVolume = new Volume();

    for (var layer = 0; layer < layers; layer++) {
        var depth = layer;
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
