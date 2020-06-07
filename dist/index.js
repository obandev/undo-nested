"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.undoNested = void 0;
exports.undoNested = function (nestedValue) {
    var unNestedValues = JSON.stringify(nestedValue)
        .replace(/\[|\]|\{|[^#\&\?,]*:|\}/g, '')
        .split(',');
    return JSON.parse("[" + unNestedValues + "]");
};
