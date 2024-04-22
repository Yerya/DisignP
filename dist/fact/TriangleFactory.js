"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriangleFactory = void 0;
const Triangle_1 = require("../models/Triangle");
class TriangleFactory {
    static createTriangle(id, p1, p2, p3) {
        return new Triangle_1.Triangle(id, p1, p2, p3);
    }
}
exports.TriangleFactory = TriangleFactory;
