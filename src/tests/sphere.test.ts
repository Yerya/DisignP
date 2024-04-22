import { Sphere } from '../models/Sphere';
import { Point } from '../models/Point';

describe('Sphere functionality', () => {
    let center: Point;
    let radius: number;
    let sphere: Sphere;

    beforeEach(() => {
        center = new Point(1, 1, 1);
        radius = 2;
        sphere = new Sphere('testSphere', center, radius);
    });

    test('calculates surface area correctly', () => {
        expect(sphere.surfaceArea()).toBeCloseTo(4 * Math.PI * radius * radius);
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
