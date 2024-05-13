"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse = void 0;
const Sphere_1 = require("../models/Sphere");
const SphereService_1 = require("../services/SphereService");
class Warehouse {
    constructor() {
        this.data = new Map();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Warehouse();
        }
        return this.instance;
    }
    update(shape) {
        const metrics = {
            area: shape.area(),
            perimeter: shape instanceof Sphere_1.Sphere ? undefined : shape.perimeter(),
            volume: shape instanceof Sphere_1.Sphere ? SphereService_1.SphereService.volume(shape) : undefined
        };
        this.data.set(shape.id, metrics);
    }
    getMetrics(id) {
        return this.data.get(id);
    }
}
exports.Warehouse = Warehouse;
