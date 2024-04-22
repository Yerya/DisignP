import { TriangleFactory } from '../fact/TriangleFactory';
import { Point } from '../models/Point';
import { Triangle } from '../models/Triangle';

describe('Triangle functionality', () => {
    let p1: Point;
    let p2: Point;
    let p3: Point;
    let triangle: Triangle;

    beforeEach(() => {
        p1 = new Point(0, 0);
        p2 = new Point(4, 0);
        p3 = new Point(0, 3);
        triangle = TriangleFactory.createTriangle('testTriangle', p1, p2, p3);
    });

    test('calculates perimeter correctly', () => {
        expect(triangle.perimeter()).toBeCloseTo(12);
    });

    test('calculates area correctly', () => {
        expect(triangle.area()).toBeCloseTo(6);
    });

    test('identifies right-angle triangle correctly', () => {
        expect(triangle.isRightAngle()).toBeTruthy();
    });

    test('identifies isosceles triangle correctly', () => {
        const isoscelesTriangle = new Triangle('isoTriangle', new Point(0, 0), new Point(2, 2), new Point(4, 0));
        expect(isoscelesTriangle.isIsosceles()).toBeTruthy();
    });

    test('identifies equilateral triangle correctly', () => {
        const equilateralTriangle = new Triangle('equiTriangle', new Point(0, 0), new Point(1, Math.sqrt(3)), new Point(2, 0));
        expect(equilateralTriangle.isEquilateral()).toBeTruthy();
    });

    test('distinguishes between acute and obtuse triangles', () => {
        const obtuseTriangle = new Triangle('obtuseTriangle', new Point(0, 0), new Point(1, 1), new Point(4, 0));
        expect(obtuseTriangle.isAcuteOrObtuse()).toBe("obtuse");
        expect(triangle.isAcuteOrObtuse()).toBe("right"); // Изменено ожидаемое значение
    });
});