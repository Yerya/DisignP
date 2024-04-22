import { TriangleDataValidator, SphereDataValidator } from '../validators/DataValidators';
import { logger } from '../utils/Logger';
import fs from 'fs';

export const readFiguresFromFile = (filePath: string) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
        const parts = line.split(' ');
        const figureType = parts.shift();

        try {
            if (figureType === 'Triangle') {
                const error = TriangleDataValidator.isValidTriangleData(parts);
                if (error) {
                    logger.error(`Error on line ${index + 1}: ${error}`);
                    return;
                }
            } else if (figureType === 'Sphere') {
                const error = SphereDataValidator.isValidSphereData(parts);
                if (error) {
                    logger.error(`Error on line ${index + 1}: ${error}`);
                    return;
                }
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