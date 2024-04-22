"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFiguresFromFile = void 0;
const DataValidators_1 = require("../validators/DataValidators");
const Logger_1 = require("../utils/Logger");
const fs_1 = __importDefault(require("fs"));
const readFiguresFromFile = (filePath) => {
    const content = fs_1.default.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
        const parts = line.split(' ');
        const figureType = parts.shift();
        try {
            if (figureType === 'Triangle' && DataValidators_1.TriangleDataValidator.isValidTriangleData(parts)) {
            }
            else if (figureType === 'Sphere' && DataValidators_1.SphereDataValidator.isValidSphereData(parts)) {
            }
            else {
                if (line.trim() !== '') {
                    Logger_1.logger.error(`Invalid data on line ${index + 1}: ${line}`);
                }
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
