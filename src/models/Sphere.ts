import { Shape } from './Shape';
import { Point } from './Point';

export class Sphere extends Shape {
    constructor(id: string, public center: Point, public radius: number) {
        super(id);
    }

    area(): number {
        return 4 * Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        // Сфера не имеет периметра, но если имеется в виду "длина окружности на экваторе", то:
        return 2 * Math.PI * this.radius;
    }

    volume(): number {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }

    touchesPlaneOnDistance(distance: number): boolean {
        return Math.abs(this.center.x) <= this.radius + distance ||
            Math.abs(this.center.y) <= this.radius + distance ||
            Math.abs(this.center.z) <= this.radius + distance;
    }
}
