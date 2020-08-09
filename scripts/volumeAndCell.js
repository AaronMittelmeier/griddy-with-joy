import { createVolume, createCell } from "../src/functions/create.js";



const newCell = createCell(0, 0, 0);
const newCellTwo = createCell(1, 1, 1)

const smallVolume = createVolume(2, 2, 2);
const smallChild = createCell(2, 2, 2);
const smallChildTwo = createCell(2, 2, 2);
const smallParent = createCell(1, 1, 1);

//console.log(smallChild);
smallVolume.addChild(smallChild);
// console.log(smallChild);
// console.log(smallVolume);
smallVolume.removeChild(smallChild);
// console.log(smallChild);
// console.log(smallVolume);
smallVolume.addParent(smallChildTwo);
smallVolume.removeParent(smallChildTwo);
console.log(smallVolume);
console.log(smallChild);
console.log(smallChildTwo);


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



