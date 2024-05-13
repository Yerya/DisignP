"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const ShapeRepository_1 = require("./repositories/ShapeRepository");
const Warehouse_1 = require("./utils/Warehouse");
const readFigures_1 = require("./scripts/readFigures");
const Specifications_1 = require("./services/Specifications");
const warehouse = Warehouse_1.Warehouse.getInstance();
const repo = new ShapeRepository_1.ShapeRepository(warehouse);
(0, readFigures_1.readFiguresFromFile)('./data/figures.txt', repo);
// repo.remove('triangle-0');
console.log('All shapes in the repository:', repo.sort(Specifications_1.Specifications.sortByX));
repo.findAll().forEach(shape => {
    console.log(`Metrics for ${shape.id}:`, warehouse.getMetrics(shape.id));
});
