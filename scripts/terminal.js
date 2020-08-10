// just a set of functions to help with basic output
// and our test scripts

export function printLayers (volumeToPrint) {
    if (volumeToPrint.type == 'Volume') {
        for (var layer in volumeToPrint.layers) {
            console.table(volumeToPrint.layers[layer].cellArray);
        }
    } else if (volumeToPrint.type == 'World') {
        for (var strata in volumeToPrint.strata) {
            console.table(volumeToPrint.strata[strata].cellFramework);
        }
    } else {
        console.log('Object type must be Volume or World. Is: ' + object.type);
    }
}

export function cellsDone (volumeToPrint) {
    if (volumeToPrint.type == 'Volume') {
console.log("Done - Cell Count: " + volumeToPrint.length)
    } else if (volumeToPrint.type == 'World') {
        for (var strata in volumeToPrint.strata) {
            console.table(volumeToPrint.strata[strata].cellFramework);
        }
    } else {
        console.log('Object type must be Volume or World. Is: ' + object.type);
    }
}