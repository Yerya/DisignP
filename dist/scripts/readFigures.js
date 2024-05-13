"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFiguresFromFile = void 0;
const DataValidators_1 = require("../validators/DataValidators");
const Logger_1 = require("../utils/Logger");
const SphereFactory_1 = require("../fact/SphereFactory");
const TriangleFactory_1 = require("../fact/TriangleFactory");
const Point_1 = require("../models/Point");
const fs_1 = __importDefault(require("fs"));
const readFiguresFromFile = (filePath, repository) => {
    const content = fs_1.default.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
        const parts = line.trim().split(' ');
        const figureType = parts.shift();
        try {
            if (figureType === 'Triangle' && DataValidators_1.TriangleDataValidator.isValidTriangleData(parts) === null) {
                const [x1, y1, x2, y2, x3, y3] = parts.map(Number);
                const triangle = TriangleFactory_1.TriangleFactory.createTriangle(`triangle-${index}`, new Point_1.Point(x1, y1), new Point_1.Point(x2, y2), new Point_1.Point(x3, y3));
                repository.add(triangle);
            }
            else if (figureType === 'Sphere' && DataValidators_1.SphereDataValidator.isValidSphereData(parts) === null) {
                const [x, y, z, radius] = parts.map(Number);
                const sphere = SphereFactory_1.SphereFactory.createSphere(`sphere-${index}`, new Point_1.Point(x, y, z), radius);
                repository.add(sphere);
            }
            else {
                const error = figureType === 'Triangle' ? DataValidators_1.TriangleDataValidator.isValidTriangleData(parts) : DataValidators_1.SphereDataValidator.isValidSphereData(parts);
                Logger_1.logger.error(`Error on line ${index + 1}: ${error || 'Invalid figure type'}`);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                Logger_1.logger.error(`Error on line ${index + 1}: ${error.message}`);
            }
            else {
                Logger_1.logger.error(`An unknown error occurred on line ${index + 1}`);
            }
        }
    });
};
exports.readFiguresFromFile = readFiguresFromFile;
