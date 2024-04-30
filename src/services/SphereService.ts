import { Sphere } from '../models/Sphere';

export class SphereService {
    static area(sphere: Sphere): number {
        return 4 * Math.PI * sphere.radius * sphere.radius;
    }

    static volume(sphere: Sphere): number {
        return (4 / 3) * Math.PI * Math.pow(sphere.radius, 3);
    }

    static touchesPlaneOnDistance(sphere: Sphere, distance: number): boolean {
        return Math.abs(sphere.center.x) <= sphere.radius + distance ||
            Math.abs(sphere.center.y) <= sphere.radius + distance ||
            Math.abs(sphere.center.z) <= sphere.radius + distance;
    }
}
