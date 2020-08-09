// just a set of functions to help with basic output
// and our test scripts

export function printVolumeLayers (object) {
    if (object.type == 'Volume') {
        for (var layer in object.layers) {
            console.table(object.layers[layer].cellArray);
        }
    } else {
        console.log("Object type must be Volume. Is: " + object.type)
    }
}