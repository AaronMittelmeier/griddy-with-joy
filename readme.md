Author: aaron.mittelmeier@gmail.com

Goal: 
    Create a gaming engine / platform that supports a narratively driven
    version of WotC 5th edition gameplay and ruleset.  The intent is for the
    player to be able to verbally interact with the game as though it were
    a personal Dungeon Master.

Plan:
    A: Architect the mapping / dungeon / environment
        - build primary objects (cells, layers, depth, dimensions)
        - build object attributes (materials, containers, inheritance)
        - setup functions to support object - environment integration

TimeLine:
    1.0.0 ~ Aaron M. ~ 07/30/2020
        Created Repository, uploaded, began to review other similar repos on github

    1.1.0 ~ Aaron M. ~ 08/08/2020
        Added ./src:
                ./foundation: 
                    primary objects
                ./functions: 
                    object support / environment integration
        Added ./scripts:
                ./volumeAndCell.js
                    our first test script to check our functions / objects
        Added ./test:
                * nothing yet - cucumber?
        Added ./util:
                ./spliceObjectArray.js
                    allows us to remove entire objects from an objectArray (which we do a lot)

    1.2.0 ~ 08/09/2020
        Split ./src into further groupings as it gets more complex
        - cell: smallest unit of space in game
        - container: a place to hold other objects in cell

        foundation:
        - volume / layer: building blocks of abstract 'groups' of cells 

        functions:
        - create: builds the actual objects / constructors

        world:
        - making world and volume the same object, while neat, was proving hard
        - i needed boundaries to drop the volumes into
        - more over, now i can build extremely large arrays with world, since i'm not filling them with any actual data
        - strata is a 'layer' object, very similar, that doesnt store as much data as the layer
 
        scripts:
        - terminal: just helps with console logging

    1.3.0 ~ 08/14/2020
        - installed the following
            cucumber - for testing later
            gatsby - for creating static content web-page groups (damien-ui)
            react & react-dom - for helping with webDev
            websocket(ws) - adding websocket
    
    1.4.0 ~ 08/19/2020
        - started transitioning from cell array to objects and object groups
        - cell.js
            -- added properties (what properties are effected or can be effected)
            -- added effectedBy (current effects on this cell)
                --- will need to have a way to identify if the current effects apply / link
                     to the current cell properties
            -- added effectsOthers (the types of objects and type of effect it has on them)
            -- added containers
            -- added world -/ forced to single world
            -- need to add 
        - container.js
            -- an object that introduces items in the world 
            -- trees, rocks, shit like that
            -- containers can be 'literal' like treasure chests or figurative in a way to add
                other content
        - world.js
            -- seperated into a different object type (originally was the same as volume)
            -- strata (the old version of layers) is literally the z axis / depth
            -- added integrateCell / Volume functions
                --- cell plants an ID into the strata index layer
                --- integrate volume loops through each of the cells within it
        - strata.js
            -- the new world layer
            -- an empty 2D index of all the possible positions that can be filled by cells in each 
                layer of the world
        - arrays.js
            -- moved the inter-function / inter-method create array functions into a utilities folder
        - promises.js
            -- added timer / sleep / wait function
        - create.js
            -- begin world building
            -- fixed world to create 'cell objects' and integrate those into strata
            -- right now new volumes overwrite the cells that are there, but need to pull the id from world, not vice versa
            

