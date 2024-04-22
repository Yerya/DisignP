"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SphereFactory = void 0;
const Sphere_1 = require("../models/Sphere");
class SphereFactory {
    static createSphere(id, center, radius) {
        return new Sphere_1.Sphere(id, center, radius);
    }
}
exports.SphereFactory = SphereFactory;
