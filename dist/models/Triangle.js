"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const Shape_1 = require("./Shape");
const TriangleService_1 = require("../services/TriangleService");
class Triangle extends Shape_1.Shape {
    constructor(id, p1, p2, p3) {
        super(id);
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    area() {
        return TriangleService_1.TriangleService.area(this);
    }
    perimeter() {
        return TriangleService_1.TriangleService.perimeter(this);
    }
}
exports.Triangle = Triangle;
