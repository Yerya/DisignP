import { Point } from './Point';

export class Sphere {
    constructor(public id: string, public center: Point, public radius: number) {}

    // Площадь поверхности шара
    surfaceArea(): number {
        return 4 * Math.PI * this.radius * this.radius;
    }

    // Объем шара
    volume(): number {
        return (4 / 3) * Math.PI * this.radius**3;
    }

    // Касание шара координатной плоскости
    touchesPlane(): boolean {
        // Check distance from the sphere center to each coordinate plane
        return Math.abs(this.center.x) <= this.radius ||
            Math.abs(this.center.y) <= this.radius ||
            Math.abs(this.center.z) <= this.radius;
    }

}
