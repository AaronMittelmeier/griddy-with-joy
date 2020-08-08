// we have an array of objects, we want to remove one object using only the id property

export function removeObjectFromArray(objectToRemove, objectArray) {
    var removeIndex = objectArray.map(function (objectToRemove) {
        return objectToRemove.identity;
    }).indexOf(objectToRemove.identity)

    objectArray.splice(removeIndex, 1);
};

// var apps = [{
//     id: 34,
//     name: 'My App',
//     another: 'thing'
// }, {
//     id: 37,
//     name: 'My New App',
//     another: 'things'
// }];

// // get index of object with id:37
// var removeIndex = apps.map(function (item) {
//     return item.id;
// }).indexOf(37);

// // remove object
// apps.splice(removeIndex, 1);