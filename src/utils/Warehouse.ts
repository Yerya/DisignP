// src/utils/Warehouse.ts
import { Shape } from '../models/Shape';
import { Sphere } from '../models/Sphere';
import { SphereService } from '../services/SphereService';

export class Warehouse {
    private static instance: Warehouse;
    private data: Map<string, { area: number, volume?: number, perimeter?: number }> = new Map();

    private constructor() {}

    public static getInstance(): Warehouse {
        if (!this.instance) {
            this.instance = new Warehouse();
        }
        return this.instance;
    }

    update(shape: Shape): void {
        const metrics = {
            area: shape.area(),
            perimeter: shape instanceof Sphere ? undefined : shape.perimeter(),
            volume: shape instanceof Sphere ? SphereService.volume(shape) : undefined
        };
        this.data.set(shape.id, metrics);
    }

    getMetrics(id: string) {
        return this.data.get(id);
    }
}
