
// export function addChild (object) {
//         foundationObject.children.push({
//             identity: object.identity,
//             type: object.type
//         });

//         if (object.type == 'Cell') {
//             foundationObject.layers[object.coordinates.depth.index].cellArray[object.coordinates.height.index][object.coordinates.width.index] = object.identity;
//         };

//         object.parents.push({
//             identity: foundationObject.identity,
//             type: foundationObject.type
//         });
//     };

//     foundationObject.addParent = function (object) {
//         foundationObject.parents.push({
//             identity: object.identity,
//             type: object.type
//         });

//         object.children.push({
//             identity: foundationObject.identity,
//             type: foundationObject.type
//         });
//     };

//     foundationObject.removeChild = function (child) {
//         removeObjectFromArray(child, foundationObject.children);
//         removeObjectFromArray(child, child.parents);
//     };

//     foundationObject.removeParent = function (parent) {
//         removeObjectFromArray(parent, foundationObject.parents);
//         removeObjectFromArray(parent, parent.children);
//     };

//     foundationObject.print = function () {
//         console.log('\n');
//         console.log('---- Type: ' + foundationObject.type + ' ---- Identity: ' + foundationObject.identity + ' ---- Details: ');
//         console.table(foundationObject);
//     };
// };

// export function getCellIdentityFromVolumeLayers(object) {
//     var depthIndex = object.coordinates.depth.index;
//     var heightIndex = object.coordinates.height.index;
//     var widthIndex = object.coordinates.width.index;

//     var cellIdentity = object.layers[depthIndex].cellArray[heightIndex][widthIndex]

//     return cellIdentity;
// };
