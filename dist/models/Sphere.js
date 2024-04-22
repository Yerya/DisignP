"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sphere = void 0;
const Shape_1 = require("./Shape");
class Sphere extends Shape_1.Shape {
    constructor(id, center, radius) {
        super(id);
        this.center = center;
        this.radius = radius;
    }
    area() {
        return 4 * Math.PI * this.radius * this.radius;
    }
    perimeter() {
        // Сфера не имеет периметра, но если имеется в виду "длина окружности на экваторе", то:
        return 2 * Math.PI * this.radius;
    }
    volume() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }
    touchesPlaneOnDistance(distance) {
        return Math.abs(this.center.x) <= this.radius + distance ||
            Math.abs(this.center.y) <= this.radius + distance ||
            Math.abs(this.center.z) <= this.radius + distance;
    }
}
exports.Sphere = Sphere;
