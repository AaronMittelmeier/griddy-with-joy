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