function defineEmptyCell(column, row, depth) {
    var cellIdentity = uuidv4().toString();

    var Cell = {
        identity: cellIdentity,
        existence: 1,
        occupants: {
            occupantIdentity: '',
            occupantType: ''
        },
        coordinates: {
            row: row,
            column: column,
            depth: depth
        },
        adjacents: { // may be able to store this as an array, but right now its just going to be 0 for solid / nonpermeable
            topIdentity: '',//defineCellAdjacencies("top"),
            bottomIdentity: '', //defineCellAdjacencies("bottom"),
            northIdentity: '', //defineCellAdjacencies("north"),
            southIdentity: '', //defineCellAdjacencies("south"),
            westIdentity: '', //defineCellAdjacencies("west"),
            eastIdentity: '', //defineCellAdjacencies("top"),
        }
    }
    
    return Cell;
};

function defineBoundary () {
    // use this to create an 'array' of cellidentities
    // this will be the new volume method
};

function addCelltoBoundary() { 
    // to help defineBoundary decide if the cell needs in the array / can be,
    // and to do it if it can
}

function defineCellAdjacents() {
    // catch all function to help instantiate the cell object
    // to index the cells around it for easier info grab later
}

function defineCellAdjacency(face) {
    var adjacencyID

    switch (face) {
        case (face == "top"):
            adjacencyID = "top1"
            break;
        case (face == "bottom"):
            adjacencyID = "bottom1"
            break;
        case (face == "north"):
            adjacencyID = "north1"
            break;
        case (face == "south"):
            adjacencyID = "south1"
            break;
        case (face == "west"):
            adjacencyID = "west1"
            break;
        case (face == "east"):
            adjacencyID = "east1"
            break;
        default:
            adjacencyID = "default"
    };

    return adjacencyID
}

function addCellModifiers() {

}

function addCellObjects() {

}

function addCellObjects() {

}

function createCell(cellIdentity, row, column, depth, layer, layerIdentity, volumeIdentity) {
    var fakeObject = fakerObject.random.word().toString();

    var Cell = {
        existence: 1,
        occupied: 1,
        identity: cellIdentity,
        // layerIdentity: layerIdentity,
        // volumeIdentity: volumeIdentity,
        coordinates: {
            row: row,
            column: column,
            depth: depth,
            layer: layer
        },
        modifiers: { // percentage - 0 to 1, translate to descriptor
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

    console.log("Relative Depth from Bottom, Cell Row / Height, Cell Column / Width, Volume LAyer): (" + Cell.coordinates.depth + ", " + Cell.coordinates.row + ", " + Cell.coordinates.column + ", " + Cell.coordinates.layer + ")");

    return Cell;
};