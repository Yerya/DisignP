
import { Shape } from '../models/Shape';
import { Triangle } from '../models/Triangle';
import { Sphere } from '../models/Sphere';
import { Point } from '../models/Point';

export class Specifications {
    static byFirstQuadrant(shape: Shape): boolean {
        if (shape instanceof Triangle) {
            return shape.p1.x > 0 && shape.p1.y > 0 &&
                shape.p2.x > 0 && shape.p2.y > 0 &&
                shape.p3.x > 0 && shape.p3.y > 0;
        } else if (shape instanceof Sphere) {
            return shape.center.x > 0 && shape.center.y > 0 && shape.center.z > 0;
        }
        return false;
    }

    static byAreaRange(min: number, max: number): (shape: Shape) => boolean {
        return shape => shape.area() >= min && shape.area() <= max;
    }

    static byDistanceFromOrigin(maxDistance: number): (shape: Shape) => boolean {
        return shape => {
            const origin = new Point(0, 0, 0);
            if (shape instanceof Triangle) {
                return [shape.p1, shape.p2, shape.p3].every(p => Point.distance(p, origin) <= maxDistance);
            } else if (shape instanceof Sphere) {
                return Point.distance(shape.center, origin) <= maxDistance;
            }
            return false;
        };
    }

    static sortByX(shapeA: Shape, shapeB: Shape): number {
        if (shapeA instanceof Triangle && shapeB instanceof Triangle) {
            return shapeA.p1.x - shapeB.p1.x;
        } else if (shapeA instanceof Sphere && shapeB instanceof Sphere) {
            return shapeA.center.x - shapeB.center.x;
        }
        return 0;
    }

    static sortByY(shapeA: Shape, shapeB: Shape): number {
        if (shapeA instanceof Triangle && shapeB instanceof Triangle) {
            return shapeA.p1.y - shapeB.p1.y;
        } else if (shapeA instanceof Sphere && shapeB instanceof Sphere) {
            return shapeA.center.y - shapeB.center.y;
        }
        return 0;
    }
}
