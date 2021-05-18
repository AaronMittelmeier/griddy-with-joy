// import { addUniversalFunctionsToClass } from '../functions/foundation.js'
import { v4 as uuidv4 } from 'uuid';
import { World } from '../world/world.js';
import { removeObjectFromObjectArray } from '../../util/arrays.js'

export class Cell {
    constructor(heightIndex, widthIndex, depthIndex) {
        this.identity = uuidv4().toString(); 
        this.type = 'Cell';

        this.world = {};
        this.volumes = [];
        this.containers = [];
        this.siblings = [];
        this.faces = [];

        this.properties = [];
        this.affectedBy = [];
        this.affectsOthers = [];

        // relative to the world it is in - it can only belong to one world
        this.coordinates = {
            height: {
                index: heightIndex,
                row: heightIndex + 1
            },
            width: {
                index: widthIndex,
                column: widthIndex + 1
            },
            depth: {
                index: depthIndex,
                strata: depthIndex + 1
            }
        };

        this.addAffectedBy = function (affect) {
            this.affectedBy.push({
                identity: affect.identity,
                type: affect.type,
                propertiesAffected: affect.propertiesAffected
            });
        };

        this.addAffectsOthers = function (affector) {
            this.affectsOthers.push({
                identity: affector.identity,
                type: affector.type,
                propertiesAffected: affector.propertiesAffected
            });
        };

        this.addProperty = function (property, canBeAffected) {
            if(typeof canBeAffected == 'undefined') {canBeAffected = true};

            this.properties.push({
                identity: property.identity,
                canBeAffected: canBeAffected
            })
        }

        this.addToVolume = function (volume, isOrigin) {
            if(typeof isOrigin == 'undefined') {isOrigin = false};

            this.volumes.push({
                identity: volume.identity,
                isOrigin: isOrigin,
                relativeCoordinates: []
            });

            volume.cells.push({
                identity: this.identity,
                isOrigin: isOrigin,
                type: this.type,
                coordinates: this.coordinates
            });

            this.world = ({
                identity: volume.world.identity,
                name: volume.world.name
            });
        };

        this.removeFromVolume = function (volume) {
            removeObjectFromObjectArray(volume, this.volumes);
            removeObjectFromObjectArray(this, volume.cells);
        };

        this.addToWorld = function (world) {
            this.world = ({
                identity: world.identity,
                name: world.name
            });

            world.cells.push({
                identity: this.identity,
                coordinates: this.coordinates,
                type: this.type
            });
        };

        this.removeFromWorld = function (world) {
            removeObjectFromObjectArray(this, world.cells);
            this.world = {};
        };


        this.addContainer = function (container) {
            // object type must be a 'container' for a cell, it can't be a volume
            this.containers.push({
                identity: container.identity,
                type: container.type,
                contents: container.contents
            });
            // if (object.type == 'Cell') {
            //     this.layers[object.coordinates.depth.index].cellArray[object.coordinates.height.index][object.coordinates.width.index] = object.identity;
            // };
            container.cell = {
                identity: this.identity,
                type: this.type,
                coordinates: this.coordinates
            };
        };

        this.removeContainer = function (container) {
            removeObjectFromArray(container, this.containers);
            container.cell = {};
        };

        this.print = function () {
            console.log('\n');
            console.log('---- Type: ' + this.type + ' ---- Identity: ' + this.identity + ' ---- Details: ');
            console.table(this);
        };

        this.getIdentity = function () {
            const idObject = {
                identity: this.identity,
                type: this.type
            };

            return idObject;
        };

        this.faces = {
            above: {
                material: '',
                identity: '',
                coordintates: []
            },
            below: {
                material: '',
                identity: '',
                coordintates: []
            },
            north: {
                material: '',
                identity: '',
                coordintates: []
            },
            south: {
                material: '',
                identity: '',
                coordintates: []
            },
            east: {
                material: '',
                identity: '',
                coordintates: []
            },
            west: {
                material: '',
                identity: '',
                coordintates: []
            },
        };
    };
};
