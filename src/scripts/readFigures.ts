import { TriangleDataValidator, SphereDataValidator } from '../validators/DataValidators';
import { logger } from '../utils/Logger';
import { ShapeRepository } from '../repositories/ShapeRepository';
import { SphereFactory } from "../fact/SphereFactory";
import { TriangleFactory } from "../fact/TriangleFactory";
import { Point } from '../models/Point';
import fs from 'fs';

export const readFiguresFromFile = (filePath: string, repository: ShapeRepository) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
        const trimmedLine = line.trim();
        if (trimmedLine === '') {
            return; // Skip empty lines
        }

        const parts = trimmedLine.split(' ');
        const figureType = parts.shift();

        try {
            if (figureType === 'Triangle') {
                const error = TriangleDataValidator.isValidTriangleData(parts);
                if (error === null) {
                    const [x1, y1, x2, y2, x3, y3] = parts.map(Number);
                    const triangle = TriangleFactory.createTriangle(`triangle-line-${index + 1}`, new Point(x1, y1), new Point(x2, y2), new Point(x3, y3));
                    repository.add(triangle);
                } else {
                    logger.error(`Error on line ${index + 1}: ${error}`);
                }
            } else if (figureType === 'Sphere') {
                const error = SphereDataValidator.isValidSphereData(parts);
                if (error === null) {
                    const [x, y, z, radius] = parts.map(Number);
                    const sphere = SphereFactory.createSphere(`sphere-line-${index + 1}`, new Point(x, y, z), radius);
                    repository.add(sphere);
                } else {
                    logger.error(`Error on line ${index + 1}: ${error}`);
                }
            } else {
                logger.error(`Error on line ${index + 1}: Invalid figure type`);
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
