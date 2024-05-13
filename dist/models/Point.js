"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
// src/models/Point.ts
class Point {
    constructor(x, y, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static distance(a, b) {
        return Math.sqrt(Math.pow((b.x - a.x), 2) +
            Math.pow((b.y - a.y), 2) +
            Math.pow((b.z - a.z), 2));
    }
}
exports.Point = Point;
