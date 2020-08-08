import {
    v4 as uuidv4
} from "uuid";

function World(identity, name, layers) {

}

const world = {
    identity: worldIdentity,
    name: worldName,
    layers: {
        identity: "L01",
        layer: 1,
        cellArray: ["A", "B", "C"]
    },
    identifyMe: function () {
        console.log(this.identity);
    },
    cellArrayTable: function () {
        console.table(this.layers.cellArray);
    }
};

function defineWorldIndex(height, width, layers, worldName) {
    // depth will need to refer to the depth relative to 0, which will be our 'plane'
    // right now both layer and depth will be 0, but we'll need to distinguish them later
    var worldIdentity = uuidv4().toString();
    var layer = 0;

    var world = {
        identity: worldIdentity,
        name: worldName,
        layers: {
            identity: '',
            layer: layer,
            cellArray: []
        }
    }; 

    var layer = 0;
    while (layer < layers) {
        var layerIdentity = "W" + world.name + "-L" + layer;
        console.log("layer Identity: " + layerIdentity);

        var cellArray = createLayerFootprint(height, width, layerIdentity);
        
        world.layers.identity = layerIdentity;
        world.layers.layer = layer;
        world.layers.cellArray = cellArray;

        layer++;
    };

    return world;
};

function createLayerFootprint(height, width, layerIdentity) {
    var cellArray = [];

    for (var row = 0; row < height; row++) {
        cellArray[row] = [];
        for (var column = 0; column < width; column++) {
            var cellIdentity = layerIdentity + "-R" + row + "-C" + column;
            cellArray[row][column] = cellIdentity;
            console.log("Cell Identity: " + cellIdentity);
        }
    };

    return cellArray;
}

function printWorld(world) {

}

var newWorld = defineWorldIndex(3, 5, 7, "AA");


// function createBoundary(height, width, depth, layers, boundaryName) {
//     // depth will need to refer to the depth relative to 0, which will be our 'plane'
//     // right now both layer and depth will be 0, but we'll need to distinguish them later

//     var volumeIdentity = uuidv4().toString();

//     var Volume = {
//         identity: volumeIdentity,
//         name: volumeName,
//         layers: {
//             depth: depth,
//             layer: '',
//             identity: ''
//         }
//     };

//     var layer = 0;

//     while (layer < layers) {
//         var layerIdentity = uuidv4().toString();
//         console.log("Creating layer: " + layerIdentity + " at depth: " + Volume.layers.depth);

//         Volume.layers.identity = layerIdentity;
//         Volume.layers.layer = layer;

//         createLayerFingerprint(height, width, Volume.layers.depth, Volume.layers.layer, Volume.layers.identity, volumeIdentity);

//         Volume.layers.depth++;
//         layer++;
//     };

//     return Volume;

// };

// function createLayerFingerprint(height, width, depth, layer, layerIdentity, volumeIdentity) { // height = rows, width = columns
//     var Layer = [];
//     var row;

//     for (row = 0; row < height; row++) {
//         Layer[row] = [];
//         for (var column = 0; column < width; column++) {
//             var cellIdentity = uuidv4().toString();
//             Layer[row][column] = cellIdentity;
//             var Cell = createCell(cellIdentity, row, column, depth, layer, layerIdentity, volumeIdentity);
//         }
//     }

//     // console.log("Layer ID: " + Cell.coordinates.layer + " created successfully. ");
//     // console.table(Layer);

//     return Layer;
// };