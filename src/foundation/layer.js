import {
    v4 as uuidv4
} from "uuid";

import {
    addParentToChildObject,
    addChildToParentObject
} from '../functions/heritage.js'

export class Layer {
    constructor(height, width, depth) {
        this.identity = uuidv4().toString();
        this.type = "Layer";
        
        this.parents = [];
        this.children = [];

        this.height = height;
        this.width = width;
        this.depth = depth;

        this.cellArray = [];   

        for (var row = 0; row < height; row++) {
            this.cellArray[row] = [];
            for (var column = 0; column < width; column++) {
                var cellIdentity = "D" + this.depth + "-R" + row + "-C" + column;
                this.cellArray[row][column] = cellIdentity;
            }
        };

        this.print = function () {
            console.log("Depth: " + this.depth + " -- Layer Identity: " + this.identity + " ---- Cells: ");
            console.table(this.cellArray);
        };

        this.addChild = function (object) {
            this.children.push({
                childIdentity: object.identity,
                childType: object.type
            });

            addParentToChildObject(object, this.identity, this.type);
        };

        this.addParent = function (object) {
            this.parents.push({
                parentIdentity: object.identity,
                parentType: object.type
            });

            addChildToParentObject(object, this.identity, this.type);
        };
    }
}


// const newWorld = createWorldVolume(10, 10, 10, "W1");
// newWorld.listLayers();

//const smallVolume = createSmallVolume(2, 2, 2, 8, "S1")
//smallVolume.listLayers();



// let newVolume = new Volume("A1");
// let newLayer = new Layer(2, 3);

// newVolume.addLayer(newLayer);

// newLayer = new Layer(3,4);

// newVolume.addLayer(newLayer);
//newWorld.listLayers();





