"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SphereDataValidator = exports.TriangleDataValidator = void 0;
const Logger_1 = require("../utils/Logger");
class TriangleDataValidator {
    static isValidTriangleData(parts) {
        if (parts.length !== 6) {
            Logger_1.logger.error("Invalid data: There should be exactly 6 numbers for three points of a triangle.");
            return false;
        }
        const allNumbers = parts.every(part => !isNaN(parseFloat(part)));
        if (!allNumbers) {
            Logger_1.logger.error("Invalid data: All parts must be valid numbers.");
            return false;
        }
        return true;
    }
    static canFormTriangle(parts) {
        if (!this.isValidTriangleData(parts)) {
            return false;
        }
        const numbers = parts.map(Number);
        const p1 = { x: numbers[0], y: numbers[1] };
        const p2 = { x: numbers[2], y: numbers[3] };
        const p3 = { x: numbers[4], y: numbers[5] };
        // Checking for collinearity using the area formula for a triangle
        const area = p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y);
        if (area === 0) {
            Logger_1.logger.error("Invalid triangle formation: Points are collinear.");
            return false;
        }
        return true;
    }
}
exports.TriangleDataValidator = TriangleDataValidator;
class SphereDataValidator {
    static isValidSphereData(parts) {
        if (parts.length !== 4) {
            Logger_1.logger.error("Invalid data: There should be exactly 4 numbers for a sphere (x, y, z, radius).");
            return false;
        }
        const allNumbers = parts.every(part => !isNaN(parseFloat(part)));
        if (!allNumbers) {
            Logger_1.logger.error("Invalid data: All parts must be valid numbers.");
            return false;
        }
        if (parseFloat(parts[3]) < 0) {
            Logger_1.logger.error("Invalid sphere data: Radius cannot be negative.");
            return false;
        }
        return true;
    }
}
exports.SphereDataValidator = SphereDataValidator;
