import { 
    createVolume, 
    createCell, 
    createWorld
} from "../src/functions/create.js";

import {
    printLayers,
    cellsDone
} from "../src/functions/terminal.js"


const worldAlpha = createWorld(5,5,5);

const cellZero = createCell(0, 0, 0); // coordinates 
const cellOne = createCell(1, 1, 1);

const volumeA = createVolume(2, 2, 2);
const volumeB = createVolume(3, 3, 3);


worldAlpha.integrateCell(cellZero);
worldAlpha.disintegrateCell(cellZero);

worldAlpha.integrateVolume(volumeA);
worldAlpha.disintegrateVolume(volumeA)



console.log(cellZero);
console.log(volumeA);
console.log(worldAlpha);

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



