import { Sphere } from '../models/Sphere';
import { SphereService } from '../services/SphereService';
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
        const area = SphereService.area(sphere);

        expect(area).toBeCloseTo(4 * Math.PI * radius * radius);
    });

    test('calculates volume correctly', () => {
        const volume = SphereService.volume(sphere);

        expect(volume).toBeCloseTo((4 / 3) * Math.PI * Math.pow(radius, 3));
    });

    test('checks if sphere touches any coordinate plane correctly', () => {
        const distance = 1;

        const doesTouch = SphereService.touchesPlaneOnDistance(sphere, distance);

        expect(doesTouch).toBeTruthy();
        const notTouchingSphere = new Sphere('notTouchingSphere', new Point(5, 5, 5), 2);
        expect(SphereService.touchesPlaneOnDistance(notTouchingSphere, distance)).toBeFalsy();
    });
});
