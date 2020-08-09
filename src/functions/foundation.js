// 

export function addUniversalFunctionsToClass(foundationObject) {
    foundationObject.addChild = function (object) {
        this.children.push({
            identity: object.identity,
            type: object.type
        });

        if (object.type == 'Cell') {
            this.layers[object.coordinates.depth.index]
                .cellArray[object.coordinates.height.index][object.coordinates.width.index] = object.identity;
        };

        object.parents.push({
            identity: this.identity,
            type: this.type
        });
    };

    foundationObject.addParent = function (object) {
        this.parents.push({
            identity: object.identity,
            type: object.type
        });

        object.children.push({
            identity: this.identity,
            type: this.type
        });
    };

    foundationObject.removeChild = function (object) {
        removeObjectFromArray(object, this.children);
        removeObjectFromArray(object, object.parents);
    };

    foundationObject.removeParent = function (object) {
        removeObjectFromArray(object, this.parents);
        removeObjectFromArray(object, object.children);
    };
};

export function getCellIdentityFromVolumeLayers(object) {
    var cellIdentity = object.layers[object.coordinates.depth.index]
    .cellArray[object.coordinates.height.index][object.coordinates.width.index]

    return cellIdentity;
};
