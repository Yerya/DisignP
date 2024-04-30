import { Shape } from './Shape';
import { Point } from './Point';
import { TriangleService } from '../services/TriangleService';

export class Triangle extends Shape {
    constructor(id: string, public p1: Point, public p2: Point, public p3: Point) {
        super(id);
    }

    area(): number {
        return TriangleService.area(this);
    }

    perimeter(): number {
        return TriangleService.perimeter(this);
    }
}
