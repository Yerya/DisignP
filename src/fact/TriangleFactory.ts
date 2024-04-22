import { Point } from '../models/Point';
import { Triangle } from '../models/Triangle';

export class TriangleFactory {
    static createTriangle(id: string, p1: Point, p2: Point, p3: Point): Triangle {
        return new Triangle(id, p1, p2, p3);
    }
}
