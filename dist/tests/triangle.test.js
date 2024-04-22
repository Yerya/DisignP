"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Triangle_1 = require("../models/Triangle");
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
        expect(triangle.perimeter()).toBeCloseTo(12);
    });
    test('calculates area correctly', () => {
        expect(triangle.area()).toBeCloseTo(6);
    });
    test('identifies right-angle triangle correctly', () => {
        expect(triangle.isRightAngle()).toBeTruthy();
    });
    test('identifies isosceles triangle correctly', () => {
        const isoscelesTriangle = new Triangle_1.Triangle('isoTriangle', new Point_1.Point(0, 0), new Point_1.Point(2, 2), new Point_1.Point(4, 0));
        expect(isoscelesTriangle.isIsosceles()).toBeTruthy();
    });
    test('identifies equilateral triangle correctly', () => {
        const equilateralTriangle = new Triangle_1.Triangle('equiTriangle', new Point_1.Point(0, 0), new Point_1.Point(1, Math.sqrt(3)), new Point_1.Point(2, 0));
        expect(equilateralTriangle.isEquilateral()).toBeTruthy();
    });
    test('distinguishes between acute and obtuse triangles', () => {
        const obtuseTriangle = new Triangle_1.Triangle('obtuseTriangle', new Point_1.Point(0, 0), new Point_1.Point(1, 1), new Point_1.Point(4, 0));
        expect(obtuseTriangle.isAcuteOrObtuse()).toBe("obtuse");
        expect(triangle.isAcuteOrObtuse()).toBe("right"); // Изменено ожидаемое значение
    });
});
