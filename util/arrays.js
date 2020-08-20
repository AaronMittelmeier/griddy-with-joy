// we have an array of objects, 
// we want to remove one object using only the identity property

export function removeObjectFromObjectArray(objectToRemove, objectArray) {
    var removeIndex = objectArray.map(function (objectToRemove) {
        return objectToRemove.identity;
    }).indexOf(objectToRemove.identity)

    objectArray.splice(removeIndex, 1);
};

export function addObjectToObjectArray(objectToAdd, objectArray) {
    objectArray.push(objectToAdd);
};

export function createTwoDimensionalArray(height, width, depth) {
    var twoDimensionalArray = [];

    for (var row = 0; row < height; row++) {
        twoDimensionalArray[row] = [];
        for (var column = 0; column < width; column++) {
            twoDimensionalArray[row][column] = depth;
        }
    };

    return twoDimensionalArray;
};