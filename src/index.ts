
import { ShapeRepository } from './repositories/ShapeRepository';
import { Warehouse } from './utils/Warehouse';
import { readFiguresFromFile } from './scripts/readFigures';
import {Specifications} from "./services/Specifications";

const warehouse = Warehouse.getInstance();
const repo = new ShapeRepository(warehouse);

readFiguresFromFile('./data/figures.txt', repo);
// repo.remove('triangle-line-1');


console.log('All shapes in the repository:', repo.sort(Specifications.sortByX));
repo.findAll().forEach(shape => {
    console.log(`Metrics for ${shape.id}:`, warehouse.getMetrics(shape.id));
});
