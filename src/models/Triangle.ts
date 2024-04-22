import { Point } from './Point';

export class Triangle {
    constructor(public id: string, public p1: Point, public p2: Point, public p3: Point) {}

    // Метод вычисления площади треугольника
    area(): number {
        const a = this.distance(this.p1, this.p2);
        const b = this.distance(this.p2, this.p3);
        const c = this.distance(this.p3, this.p1);
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    // Метод вычисления периметра треугольника
    perimeter(): number {
        return this.distance(this.p1, this.p2) + this.distance(this.p2, this.p3) + this.distance(this.p3, this.p1);
    }

    // Вспомогательный метод для вычисления расстояния между двумя точками
    private distance(p1: Point, p2: Point): number {
        return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    }

    // Метод для проверки, является ли треугольник прямоугольным
    isRightAngle(): boolean {
        const a = this.distance(this.p1, this.p2);
        const b = this.distance(this.p2, this.p3);
        const c = this.distance(this.p3, this.p1);
        const sortedSides = [a, b, c].sort((n1, n2) => n1 - n2);
        return Math.abs(sortedSides[2]**2 - (sortedSides[0]**2 + sortedSides[1]**2)) < 0.0001;
    }

    // Метод для проверки, является ли треугольник равнобедренным
    isIsosceles(): boolean {
        const a = this.distance(this.p1, this.p2);
        const b = this.distance(this.p2, this.p3);
        const c = this.distance(this.p3, this.p1);
        return a === b || b === c || c === a;
    }

    // Метод для проверки, является ли треугольник равносторонним
    isEquilateral(): boolean {
        const epsilon = 0.000001; // small tolerance for floating point comparison
        const a = this.distance(this.p1, this.p2);
        const b = this.distance(this.p2, this.p3);
        const c = this.distance(this.p3, this.p1);
        return Math.abs(a - b) < epsilon && Math.abs(b - c) < epsilon && Math.abs(c - a) < epsilon;
    }

    // Метод для определения, остроугольный или тупоугольный треугольник
    isAcuteOrObtuse(): string {
        const a = this.distance(this.p1, this.p2);
        const b = this.distance(this.p2, this.p3);
        const c = this.distance(this.p3, this.p1);
        // Check based on the Pythagorean theorem
        const sides = [a, b, c].sort((x, y) => x - y);
        const sumOfSquares = sides[0] * sides[0] + sides[1] * sides[1];
        const hypotenuseSquare = sides[2] * sides[2];

        if (sumOfSquares > hypotenuseSquare) {
            return "acute";
        } else if (sumOfSquares < hypotenuseSquare) {
            return "obtuse";
        } else {
            return "right";
        }
    }

}
