import { v4 as uuidv4 } from "uuid";
import fakerObject from "faker";

var msg = "test message";

var arrayone = new Array("a", "b");
var arraytwo = ["c", "d"];

// console.log("array one, index 0: " + arrayone[0]);

let fruits = ["Banana"];

// almost everything in js is an object, unless it's a primitive
// primitives are not mutable, whereas all other objects are

let arr = fruits; // copy by reference (two variables reference the same array)

// console.log( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

// console.log( fruits ); // Banana, Pear - 2 items now



// obj
//person and person2 do the same thing
// this is an object'literal' which basically means that i declare and assign value at the same time
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// use person not person2 for ease, convention
var person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

var z = person;
z.age = 12;
// objects are always references
// this doesn't make a copy of person, it's a reference to person.
// if i change z or i change person, both will change
// person.age now equals 12

// arrays are similar to objects, but do so in an order.  They can be assigned properties, but associated properties can't be pulled as the result of a range

//objectName.property // person.age
person.age = 22;
// console.log(person.age);
// console.log(z.age);

//objectName["property"]
person["age"] = 44;

//objectName[expression]
//x = "age"; person[x]

var txt;

// for ... in statement loops through each property of an object
//for (variable in object)
function runProperties (person) {
    for (var property in person) {
        txt += person[property];
        // console.log("person.property[" + property + "] = : " + person[property]);
    }
}

runProperties(person);

let activities = [
    ['Work', 9, 2],
    ['Eat', 1, 3],
    ['Commute', 2, 4],
    ['Play Game', 1, 5],
    ['Sleep', 7, 5]
];
// In the activities array, the first dimension represents the activity and the second one shows the number of hours spent per day
// for each.

// To show the activities array in the console, you use the console.table() method as follows:
// console.table(activities);
// console.log(activities[row]);
// // console.log(activities[0][1]);
// console.log(activities[row][column]);
// console.log(activities[row][2]);

function createDimension() {

};

function createPlane(height, width) {
    var Plane = createVolume(height, width, 0, 1, "Plane1");
    return Plane
}

//var volumeName = "Building A";
//var volume = createVolume(10, 12, 5, volumeName);

// var planeA = createPlane(20, 20);
// console.log(JSON.stringify(planeA));

var volumeA = createVolume(3, 4, 5, 6, "Volume1");
console.log(JSON.stringify(volumeA));


function getCell(height, width, depth, layer) {};

function createVolume(height, width, depth, layers, volumeName) {
    // depth will need to refer to the depth relative to 0, which will be our 'plane'
    // right now both layer and depth will be 0, but we'll need to distinguish them later

    var volumeIdentity = uuidv4().toString();

    var Volume = {
        identity: volumeIdentity,
        name: volumeName,
        layers: {
            depth: depth,
            layer: '',
            identity: ''
        }
    };

    var layer = 0;

    while (layer < layers) {
        var layerIdentity = uuidv4().toString();
        console.log("Creating layer: " + layerIdentity + " at depth: " + Volume.layers.depth);

        Volume.layers.identity = layerIdentity;
        Volume.layers.layer = layer;

        createLayerFingerprint(height, width, Volume.layers.depth, Volume.layers.layer, Volume.layers.identity, volumeIdentity);

        Volume.layers.depth++;
        layer++;
    };

    return Volume;

};

function createLayerFingerprint(height, width, depth, layer, layerIdentity, volumeIdentity) { // height = rows, width = columns
    var Layer = [];
    var row;

    for (row = 0; row < height; row++) {
        Layer[row] = [];
        for (var column = 0; column < width; column++) {
            var cellIdentity = uuidv4().toString();
            Layer[row][column] = cellIdentity;
            var Cell = createCell(cellIdentity, row, column, depth, layer, layerIdentity, volumeIdentity);
        }
    }
    
    // console.log("Layer ID: " + Cell.coordinates.layer + " created successfully. ");
    // console.table(Layer);

    return Layer;
};

function createCell(cellIdentity, row, column, depth, layer, layerIdentity, volumeIdentity) {
    var fakeObject = fakerObject.random.word().toString();

    var Cell = {
        existence: 1,
        occupied: 1,
        identity: cellIdentity,
        // layerIdentity: layerIdentity,
        volumeIdentity: volumeIdentity,
        coordinates: {
            row: row,
            column: column, 
            depth: depth,
            layer: layer
        }, 
        modifiers: {  // percentage - 0 to 1, translate to descriptor
            visibility: 1,
            cover: 0, 
            ethereal: 0, // cant remember the reason for this
            material: {
                type: [], // water, stone
                attributes: [], // inherited from the material, such as breathability, difficult terrain if walkable
            }, 
        },
        objects: [fakeObject],
        items: [fakeObject],
        containers: {
            type: "chest",
            modifiers: []
        },
        npc: [],
        playerChar: [],
        faces: { // may be able to store this as an array, but right now its just going to be 0 for solid / nonpermeable
            bottomSurface: 0, // tells us if the surface is solid / not
            bottomAdjacent: "", // Tells us the id of the cell adjacent to it
            topSurface: 0,
            topAdjacent: "",
            northSurface: 0,
            northAdjacent: "",
            westSurface: 0,
            westAdjacent: "",
            southSurface: 0,
            southAdjacent: "",
            eastSurface: 0,
            eastAdjacent: ""
        }
    };

    console.log("Relative Depth from Bottom, Cell Row / Height, Cell Column / Width, Volume LAyer): (" + Cell.coordinates.depth + ", " + Cell.coordinates.row + ", " + Cell.coordinates.column + ", "+ Cell.coordinates.layer + ")");

    return Cell;
};

//console.table(person);

