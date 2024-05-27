"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeRepository = void 0;
class ShapeRepository {
    constructor(warehouse) {
        this.items = new Map();
        this.warehouse = warehouse;
    }
    add(item) {
        this.items.set(item.id, item);
        this.warehouse.update(item);
    }
    remove(id) {
        this.items.delete(id);
    }
    findById(id) {
        return this.items.get(id);
    }
    findByCriteria(criteria) {
        return Array.from(this.items.values()).filter(criteria);
    }
    findAll() {
        return Array.from(this.items.values());
    }
    sort(criteria) {
        return Array.from(this.items.values()).sort(criteria);
    }
}
exports.ShapeRepository = ShapeRepository;
