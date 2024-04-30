import { Triangle } from '../models/Triangle';
import { Point } from '../models/Point';

export class TriangleService {
    static area(triangle: Triangle): number {
        const a = this.distance(triangle.p1, triangle.p2);
        const b = this.distance(triangle.p2, triangle.p3);
        const c = this.distance(triangle.p3, triangle.p1);
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    static perimeter(triangle: Triangle): number {
        return this.distance(triangle.p1, triangle.p2) +
            this.distance(triangle.p2, triangle.p3) +
            this.distance(triangle.p3, triangle.p1);
    }

    static isRightAngle(triangle: Triangle): boolean {
        const a = this.distance(triangle.p1, triangle.p2);
        const b = this.distance(triangle.p2, triangle.p3);
        const c = this.distance(triangle.p3, triangle.p1);
        const sides = [a, b, c].sort((n1, n2) => n1 - n2);
        return Math.abs(sides[2]**2 - (sides[0]**2 + sides[1]**2)) < Number.EPSILON;
    }

    static isIsosceles(triangle: Triangle): boolean {
        const a = this.distance(triangle.p1, triangle.p2);
        const b = this.distance(triangle.p2, triangle.p3);
        const c = this.distance(triangle.p3, triangle.p1);
        return a === b || b === c || c === a;
    }

    static isEquilateral(triangle: Triangle): boolean {
        const epsilon = 0.000001;
        const a = this.distance(triangle.p1, triangle.p2);
        const b = this.distance(triangle.p2, triangle.p3);
        const c = this.distance(triangle.p3, triangle.p1);
        return Math.abs(a - b) < epsilon && Math.abs(b - c) < epsilon && Math.abs(c - a) < epsilon;
    }

    static isAcuteOrObtuse(triangle: Triangle): 'acute' | 'obtuse' | 'right' {
        const a = this.distance(triangle.p1, triangle.p2);
        const b = this.distance(triangle.p2, triangle.p3);
        const c = this.distance(triangle.p3, triangle.p1);
        // Check based on the Pythagorean theorem
        const sides = [a, b, c].sort((x, y) => x - y);
        const sumOfSquares = sides[0] * sides[0] + sides[1] * sides[1];
        const hypotenuseSquare = sides[2] * sides[2];

        if (sumOfSquares > hypotenuseSquare) {
            return "acute";
        } else if (sumOfSquares < hypotenuseSquare) {
            return "obtuse";
        } else {
            return "right";
        }
    }

    private static distance(p1: Point, p2: Point): number {
        return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2 + (p2.z - p1.z) ** 2);
    }
}
