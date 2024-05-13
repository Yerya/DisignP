// src/models/Sphere.ts
import { Shape } from './Shape';
import { Point } from './Point';
import { SphereService } from '../services/SphereService';

export class Sphere extends Shape {
    constructor(id: string, public center: Point, public radius: number) {
        super(id);
    }

    area(): number {
        return SphereService.area(this);
    }

    volume(): number {
        return SphereService.volume(this);
    }

    perimeter(): number {
        throw new Error("Perimeter is not defined for spheres");
    }
}
