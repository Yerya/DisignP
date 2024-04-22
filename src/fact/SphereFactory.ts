import { Point } from '../models/Point';
import { Sphere } from '../models/Sphere';

export class SphereFactory {
    static createSphere(id: string, center: Point, radius: number): Sphere {
        return new Sphere(id, center, radius);
    }
}
