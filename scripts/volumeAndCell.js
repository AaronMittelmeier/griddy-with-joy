import { 
    createEmptyVolume, 
    createCell, 
    createWorld,
    createThreeDimensionalCube,
    createThreeDimensionalCubeWrapper
} from "../src/functions/create.js";

import {
    printLayers,
    cellsDone
} from "../src/functions/terminal.js"


const newCell = createCell(3,3,3)
const worldAlpha = createWorld(4,4,4)
// printLayers(worldAlpha);

// console.log('\n\n')

// const newCube = createThreeDimensionalCube(2);
// console.log(newCube);

const newCubeWrapper = createThreeDimensionalCubeWrapper(worldAlpha, 2);
console.log(newCubeWrapper);

// console.log(worldAlpha.cells)
// printLayers(worldAlpha);
// console.log('\n\n')
// worldAlpha.integrateVolume(newCube);
// printLayers(worldAlpha);
// console.log('\n\n')
worldAlpha.integrateVolume(newCubeWrapper);
console.log(newCubeWrapper);
worldAlpha.integrateCell(newCell);
console.log(newCell);
printLayers(worldAlpha);




// volumeA.addCell(cellZero);
// volumeB.addCell(cellOne);
// worldAlpha.integrateVolume(volumeA);
// worldAlpha.integrateVolume(volumeB);
// console.log(worldAlpha);
// console.log('\n');
// worldAlpha.disintegrateVolume(volumeA);
// console.log(worldAlpha);

// worldAlpha.integrateVolume(volumeA);
// worldAlpha.disintegrateVolume(volumeA)



// console.log(cellZero);
// console.log(volumeA);
// console.log(worldAlpha);

// console.log(cellOne);
// console.log('\n');

// console.log(volumeA);
// console.log('\n');

// console.log(worldAlpha.cells);
// console.log('\n');

//worldAlpha.integrateCell(cellOne);
//worldAlpha.integrateCell(cellOne);
////worldAlpha.integrateVolume(volumeA);
// cellZero.addToWorld(worldAlpha);
// printLayers(volumeA);
// printLayers(worldAlpha);

//console.log(smallVolume);
//console.log(smallChild);


//printLayers(smallVolume);



//console.log(smallChild);
//console.table(smallVolume.layers);
// smallVolume.addParent(smallChildTwo);

// console.log('\n');
// console.log(smallVolume);
// console.log('\n');
// console.log(smallChild);
// console.log('\n');
// console.log(smallChildTwo);


//console.log(smallChild);

//smallVolume.removeChild(smallChild);

//console.log(smallVolume);
//console.log(smallChild);



// smallVolume.addParent(smallParent)
// console.log(smallVolume);
//console.log(smallChild);



// smallVolume.addChild(newCell);
// smallVolume.addParent(newCellTwo);

// console.log(smallVolume);



// smallVolume.removeChild(newCell);
// smallVolume.removeParent(newCellTwo);

// console.log(smallVolume);

// const newWorld = createWorldVolume("W1", 15, 12, 10);
// newWorld.print();

// smallVolume.addChild(newCellTwo);
// console.log(smallVolume.children);


//console.log(smallVolume);

//smallVolume.print();

// const newCell = createCell(0, 0, 0);
// newCell.print();

// const newCellTwo = createCell(1, 1, 1)
//newCellTwo.print()



// for (var layer = 0; layer < smallVolume.layers.length; layer++) {
//     for (var row = 0; row < smallVolume.layers.height; row++) {
//         console.table(smallVolume.layers[layer].cellArray[row]);
//     }
// };

//console.log(newCell);



