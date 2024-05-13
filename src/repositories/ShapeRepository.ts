// src/repositories/ShapeRepository.ts
import { Shape } from '../models/Shape';
import {Warehouse} from "../utils/Warehouse";

interface IRepository<T> {
    add(item: T): void;
    remove(id: string): void;
    findById(id: string): T | undefined;
    findByCriteria(criteria: (item: T) => boolean): T[];
    findAll(): T[];
    sort(criteria: (a: T, b: T) => number): T[];
}

export class ShapeRepository implements IRepository<Shape> {  // Добавлено implements IRepository<Shape>
    private items: Map<string, Shape> = new Map();
    private warehouse: Warehouse;

    constructor(warehouse: Warehouse) {
        this.warehouse = warehouse;
    }

    add(item: Shape): void {
        this.items.set(item.id, item);
        this.warehouse.update(item);  // Обновление метрик при добавлении фигуры
    }

    remove(id: string): void {
        this.items.delete(id);
    }

    findById(id: string): Shape | undefined {
        return this.items.get(id);
    }

    findByCriteria(criteria: (item: Shape) => boolean): Shape[] {
        return Array.from(this.items.values()).filter(criteria);
    }

    findAll(): Shape[] {
        return Array.from(this.items.values());
    }

    sort(criteria: (a: Shape, b: Shape) => number): Shape[] {
        return Array.from(this.items.values()).sort(criteria);
    }
}
