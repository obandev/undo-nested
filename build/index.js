"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.undoNesting = void 0;
exports.undoNesting = function (nestedValue) {
    var unNestedValues = JSON.stringify(nestedValue)
        .replace(/\[|\]|\{|[^#\&\?,]*:|\}/g, '')
        .split(',');
    return JSON.parse("[" + unNestedValues + "]");
};
