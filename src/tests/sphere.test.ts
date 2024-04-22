import { SphereFactory } from '../fact/SphereFactory';
import { Point } from '../models/Point';
import { Sphere } from '../models/Sphere';

describe('Sphere functionality', () => {
    let center: Point;
    let radius: number;
    let sphere: Sphere;

    beforeEach(() => {
        center = new Point(1, 1, 1);
        radius = 2;
        sphere = SphereFactory.createSphere('testSphere', center, radius);
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
