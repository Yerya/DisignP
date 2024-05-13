// src/models/Point.ts
export class Point {
    constructor(public x: number, public y: number, public z: number = 0) {}

    static distance(a: Point, b: Point): number {
        return Math.sqrt(
            (b.x - a.x) ** 2 +
            (b.y - a.y) ** 2 +
            (b.z - a.z) ** 2
        );
    }
}
