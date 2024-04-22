"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sphere = void 0;
class Sphere {
    constructor(id, center, radius) {
        this.id = id;
        this.center = center;
        this.radius = radius;
    }
    // Площадь поверхности шара
    surfaceArea() {
        return 4 * Math.PI * this.radius * this.radius;
    }
    // Объем шара
    volume() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }
    // Касание шара координатной плоскости
    touchesPlane() {
        // Check distance from the sphere center to each coordinate plane
        return Math.abs(this.center.x) <= this.radius ||
            Math.abs(this.center.y) <= this.radius ||
            Math.abs(this.center.z) <= this.radius;
    }
}
exports.Sphere = Sphere;
