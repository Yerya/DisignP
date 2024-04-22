import { TriangleDataValidator, SphereDataValidator } from '../validators/DataValidators';
import { logger } from '../utils/Logger';
import fs from 'fs';
import path from 'path';

export const readFiguresFromFile = (filePath: string) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
        const parts = line.split(' ');
        const figureType = parts.shift();

        try {
            if (figureType === 'Triangle' && TriangleDataValidator.isValidTriangleData(parts)) {
            } else if (figureType === 'Sphere' && SphereDataValidator.isValidSphereData(parts)) {
            } else {
                if (line.trim() !== '') {
                    logger.error(`Invalid data on line ${index + 1}: ${line}`);
                }
                return;
            }
        } catch (error) {
            if (error instanceof Error) {
                logger.error(`Error on line ${index + 1}: ${error.message}`);
            } else {
                logger.error(`An unknown error occurred on line ${index + 1}`);
            }
        }
    });
};


// Example usage:
const filePath = path.join(__dirname, '../../data/figures.txt');
readFiguresFromFile(filePath);
