"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SphereService = void 0;
class SphereService {
    static area(sphere) {
        return 4 * Math.PI * sphere.radius * sphere.radius;
    }
    static volume(sphere) {
        return (4 / 3) * Math.PI * Math.pow(sphere.radius, 3);
    }
    static touchesPlaneOnDistance(sphere, distance) {
        return Math.abs(sphere.center.x) <= sphere.radius + distance ||
            Math.abs(sphere.center.y) <= sphere.radius + distance ||
            Math.abs(sphere.center.z) <= sphere.radius + distance;
    }
}
exports.SphereService = SphereService;
