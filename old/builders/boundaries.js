function createBoundary(height, width, depth, layers, boundaryName) {
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