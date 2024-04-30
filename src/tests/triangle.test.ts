import { Triangle } from '../models/Triangle';
import { TriangleService } from '../services/TriangleService';
import { Point } from '../models/Point';

describe('Triangle functionality', () => {
    let p1: Point;
    let p2: Point;
    let p3: Point;
    let triangle: Triangle;

    beforeEach(() => {
        p1 = new Point(0, 0);
        p2 = new Point(4, 0);
        p3 = new Point(0, 3);
        triangle = new Triangle('testTriangle', p1, p2, p3);
    });

    test('calculates perimeter correctly', () => {
        // given (in beforeEach)

        // when
        const perimeter = TriangleService.perimeter(triangle);

        // then
        expect(perimeter).toBeCloseTo(12);
    });

    test('calculates area correctly', () => {
        // given (in beforeEach)

        // when
        const area = TriangleService.area(triangle);

        // then
        expect(area).toBeCloseTo(6);
    });

    test('identifies right-angle triangle correctly', () => {
        // given (in beforeEach)

        // when
        const isRight = TriangleService.isRightAngle(triangle);

        // then
        expect(isRight).toBeTruthy();
    });

    test('identifies isosceles triangle correctly', () => {
        // given
        const isoscelesTriangle = new Triangle('isoTriangle', new Point(0, 0), new Point(2, 2), new Point(4, 0));

        // when
        const isIsosceles = TriangleService.isIsosceles(isoscelesTriangle);

        // then
        expect(isIsosceles).toBeTruthy();
    });

    test('identifies equilateral triangle correctly', () => {
        // given
        const equilateralTriangle = new Triangle('equiTriangle', new Point(0, 0), new Point(1, Math.sqrt(3)), new Point(2, 0));

        // when
        const isEquilateral = TriangleService.isEquilateral(equilateralTriangle);

        // then
        expect(isEquilateral).toBeTruthy();
    });

    test('distinguishes between acute and obtuse triangles', () => {
        // given
        const obtuseTriangle = new Triangle('obtuseTriangle', new Point(0, 0), new Point(1, 1), new Point(4, 0));

        // when
        const resultObtuse = TriangleService.isAcuteOrObtuse(obtuseTriangle);
        const resultRight = TriangleService.isAcuteOrObtuse(triangle);

        // then
        expect(resultObtuse).toBe("obtuse");
        expect(resultRight).toBe("right");
    });
});
