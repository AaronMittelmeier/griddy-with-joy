import { createVolume, createCell } from "../src/functions/create.js";

// const newWorld = createWorldVolume("W1", 15, 12, 10);
// newWorld.print();
const newCell = createCell(0, 0, 0);
const newCellTwo = createCell(1, 1, 1)
const smallVolume = createVolume(3, 4, 5);

smallVolume.addChild(newCell);
smallVolume.addParent(newCellTwo);

console.log(smallVolume.children);
console.log(newCell.parents);



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



