"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SphereFactory_1 = require("../fact/SphereFactory");
const Point_1 = require("../models/Point");
describe('Sphere functionality', () => {
    let center;
    let radius;
    let sphere;
    beforeEach(() => {
        center = new Point_1.Point(1, 1, 1);
        radius = 2;
        sphere = SphereFactory_1.SphereFactory.createSphere('testSphere', center, radius);
    });
    test('calculates surface area correctly', () => {
        expect(sphere.area()).toBeCloseTo(4 * Math.PI * radius * radius);
    });
    test('calculates volume correctly', () => {
        expect(sphere.volume()).toBeCloseTo((4 / 3) * Math.PI * radius * radius * radius);
    });
    // test('checks if sphere touches any coordinate plane correctly', () => {
    //     expect(sphere.touchesPlane()).toBeFalsy();
    //     const touchingSphere = new Sphere('touchingSphere', new Point(2, 2, 2), 2);
    //     expect(touchingSphere.touchesPlane()).toBeTruthy();
    // });
});
