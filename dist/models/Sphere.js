"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sphere = void 0;
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
    perimeter() {
        // Сфера не имеет периметра в обычном понимании, так что здесь можно вернуть 0 или бросить ошибку.
        return 0;
        // Или выбросить ошибку, если это предпочтительнее:
        // throw new Error("Spheres do not have a perimeter.");
    }
}
exports.Sphere = Sphere;
