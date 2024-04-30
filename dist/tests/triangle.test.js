"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Triangle_1 = require("../models/Triangle");
const TriangleService_1 = require("../services/TriangleService");
const Point_1 = require("../models/Point");
describe('Triangle functionality', () => {
    let p1;
    let p2;
    let p3;
    let triangle;
    beforeEach(() => {
        p1 = new Point_1.Point(0, 0);
        p2 = new Point_1.Point(4, 0);
        p3 = new Point_1.Point(0, 3);
        triangle = new Triangle_1.Triangle('testTriangle', p1, p2, p3);
    });
    test('calculates perimeter correctly', () => {
        const perimeter = TriangleService_1.TriangleService.perimeter(triangle);
        expect(perimeter).toBeCloseTo(12);
    });
    test('calculates area correctly', () => {
        const area = TriangleService_1.TriangleService.area(triangle);
        expect(area).toBeCloseTo(6);
    });
    test('identifies right-angle triangle correctly', () => {
        const isRight = TriangleService_1.TriangleService.isRightAngle(triangle);
        expect(isRight).toBeTruthy();
    });
    test('identifies isosceles triangle correctly', () => {
        const isoscelesTriangle = new Triangle_1.Triangle('isoTriangle', new Point_1.Point(0, 0), new Point_1.Point(2, 2), new Point_1.Point(4, 0));
        const isIsosceles = TriangleService_1.TriangleService.isIsosceles(isoscelesTriangle);
        expect(isIsosceles).toBeTruthy();
    });
    test('identifies equilateral triangle correctly', () => {
        const equilateralTriangle = new Triangle_1.Triangle('equiTriangle', new Point_1.Point(0, 0), new Point_1.Point(1, Math.sqrt(3)), new Point_1.Point(2, 0));
        const isEquilateral = TriangleService_1.TriangleService.isEquilateral(equilateralTriangle);
        expect(isEquilateral).toBeTruthy();
    });
    test('distinguishes between acute and obtuse triangles', () => {
        const obtuseTriangle = new Triangle_1.Triangle('obtuseTriangle', new Point_1.Point(0, 0), new Point_1.Point(1, 1), new Point_1.Point(4, 0));
        const resultObtuse = TriangleService_1.TriangleService.isAcuteOrObtuse(obtuseTriangle);
        const resultRight = TriangleService_1.TriangleService.isAcuteOrObtuse(triangle);
        expect(resultObtuse).toBe("obtuse");
        expect(resultRight).toBe("right");
    });
});
