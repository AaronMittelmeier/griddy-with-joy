export function getCellByCoordinatesIndex (heightIndex, widthIndex, depthIndex, world) {
    var worldCells = world.cells;
    var returnCell = {};
    //console.log(worldCells);

    worldCells.forEach((cell) => {
        
        if (cell.coordinates.height.index == heightIndex) {
            if (cell.coordinates.width.index == widthIndex) {
                if (cell.coordinates.depth.index == depthIndex) {
                    // console.log('Coordinates function cell: ')
                    // console.log(cell);
                   // console.log('\n');
                    returnCell = cell;
                }
            }
        }
    })

    return returnCell;
};

export function getCellByCoordinatesAxes (row, column, strata, world) {
    var coordinateReturnCell = getCellByCoordinatesIndex(row + 1, column + 1, strata + 1, world);
    return coordinateReturnCell;
};