// These are the the reciprocal functions for parents / children that 
//      may want to be outside of the object itself - I don't know
// I may also want to move other functions here or figure out a way to make
//      every function in this list part of every builder

import { removeObjectFromArray } from '../util/spliceObjectArray.js';

export function addChild(childObject, childIdentity, childType) {
    childObject.push({
        childIdentity: childIdentity,
        childType: childType
    });
};

export function addParent(parentObject, parentIdentity, parentType) {
    parentObject.push({
        parentIdentity: parentIdentity,
        parentType: parentType
    });
};

export function removeChildFromParentObject(childObject, parentObject) {
    removeObjectFromArray(childObject, parentObject);
};

export function removeParentFromChildObject(parentObject, childObject) {
    removeObjectFromArray(parentObject, childObject);
};
