"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sphere = void 0;
// src/models/Sphere.ts
const Shape_1 = require("./Shape");
const SphereService_1 = require("../services/SphereService");
class Sphere extends Shape_1.Shape {
    constructor(id, center, radius) {
        super(id);
        this.center = center;
        this.radius = radius;
    }
    area() {
        return SphereService_1.SphereService.area(this);
    }
    volume() {
        return SphereService_1.SphereService.volume(this);
    }
    perimeter() {
        throw new Error("Perimeter is not defined for spheres");
    }
}
exports.Sphere = Sphere;
