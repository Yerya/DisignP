"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sphere_1 = require("../models/Sphere");
const SphereService_1 = require("../services/SphereService");
const Point_1 = require("../models/Point");
describe('Sphere functionality', () => {
    let center;
    let radius;
    let sphere;
    beforeEach(() => {
        center = new Point_1.Point(1, 1, 1);
        radius = 2;
        sphere = new Sphere_1.Sphere('testSphere', center, radius);
    });
    test('calculates surface area correctly', () => {
        // given (in beforeEach)
        // when
        const area = SphereService_1.SphereService.area(sphere);
        // then
        expect(area).toBeCloseTo(4 * Math.PI * radius * radius);
    });
    test('calculates volume correctly', () => {
        // given (in beforeEach)
        // when
        const volume = SphereService_1.SphereService.volume(sphere);
        // then
        expect(volume).toBeCloseTo((4 / 3) * Math.PI * Math.pow(radius, 3));
    });
    test('checks if sphere touches any coordinate plane correctly', () => {
        // given (in beforeEach)
        const distance = 1;
        // when
        const doesTouch = SphereService_1.SphereService.touchesPlaneOnDistance(sphere, distance);
        // then
        expect(doesTouch).toBeTruthy();
        const notTouchingSphere = new Sphere_1.Sphere('notTouchingSphere', new Point_1.Point(5, 5, 5), 2);
        expect(SphereService_1.SphereService.touchesPlaneOnDistance(notTouchingSphere, distance)).toBeFalsy();
    });
});
