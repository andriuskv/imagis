/* global importScripts, JSZip, onmessage, postMessage */

"use strict";

importScripts("../libs/jszip.min.js");

var zip = new JSZip();

var i = 0;

function zipImages(name, uri, type) {
    zip.folder("images").file(name + "." + type, uri, { base64: true });
}

function truncateUri(uri, type) {
    if (type.length === 4) {
        return uri.slice(23);
    }

    return uri.slice(22);
}

onmessage = function (event) {
    var data = event.data;

    switch (data.action) {
        case "add":
            var image = data.image;
            var type = image.type;
            var uri = truncateUri(image.uri, type);

            zipImages(image.name + i, uri, type);
            i += 1;

            break;
        case "generate":
            i = 0;

            if (Object.keys(zip.files).length) {
                postMessage(zip.generate({ type: "blob" }));
            }

            break;
        case "remove":
            zip.remove("images");

            break;
    }
};