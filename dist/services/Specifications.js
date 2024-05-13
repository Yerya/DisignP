"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specifications = void 0;
const Triangle_1 = require("../models/Triangle");
const Sphere_1 = require("../models/Sphere");
const Point_1 = require("../models/Point");
class Specifications {
    static byFirstQuadrant(shape) {
        if (shape instanceof Triangle_1.Triangle) {
            return shape.p1.x > 0 && shape.p1.y > 0 &&
                shape.p2.x > 0 && shape.p2.y > 0 &&
                shape.p3.x > 0 && shape.p3.y > 0;
        }
        else if (shape instanceof Sphere_1.Sphere) {
            return shape.center.x > 0 && shape.center.y > 0 && shape.center.z > 0;
        }
        return false;
    }
    static byAreaRange(min, max) {
        return shape => shape.area() >= min && shape.area() <= max;
    }
    static byDistanceFromOrigin(maxDistance) {
        return shape => {
            const origin = new Point_1.Point(0, 0, 0);
            if (shape instanceof Triangle_1.Triangle) {
                return [shape.p1, shape.p2, shape.p3].every(p => Point_1.Point.distance(p, origin) <= maxDistance);
            }
            else if (shape instanceof Sphere_1.Sphere) {
                return Point_1.Point.distance(shape.center, origin) <= maxDistance;
            }
            return false;
        };
    }
    static sortByX(shapeA, shapeB) {
        if (shapeA instanceof Triangle_1.Triangle && shapeB instanceof Triangle_1.Triangle) {
            return shapeA.p1.x - shapeB.p1.x;
        }
        else if (shapeA instanceof Sphere_1.Sphere && shapeB instanceof Sphere_1.Sphere) {
            return shapeA.center.x - shapeB.center.x;
        }
        return 0;
    }
    static sortByY(shapeA, shapeB) {
        if (shapeA instanceof Triangle_1.Triangle && shapeB instanceof Triangle_1.Triangle) {
            return shapeA.p1.y - shapeB.p1.y;
        }
        else if (shapeA instanceof Sphere_1.Sphere && shapeB instanceof Sphere_1.Sphere) {
            return shapeA.center.y - shapeB.center.y;
        }
        return 0;
    }
}
exports.Specifications = Specifications;
