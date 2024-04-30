export class TriangleDataValidator {
    static isValidTriangleData(parts: string[]): string | null {
        if (parts.length !== 6) {
            return `Invalid data: There should be exactly 6 numbers for three points of a triangle. Got ${parts.length} numbers instead.`;
        }
        const allNumbers = parts.every(part => !isNaN(parseFloat(part)));
        if (!allNumbers) {
            return "Invalid data: All parts must be valid numbers.";
        }
        return null;
    }

    static canFormTriangle(parts: string[]): string | null {
        const error = this.isValidTriangleData(parts);
        if (error) {
            return error;
        }
        const numbers = parts.map(Number);
        const p1 = { x: numbers[0], y: numbers[1] };
        const p2 = { x: numbers[2], y: numbers[3] };
        const p3 = { x: numbers[4], y: numbers[5] };

        const area = p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y);
        if (area === 0) {
            return "Invalid triangle formation: Points are collinear.";
        }
        return null;
    }
}

export class SphereDataValidator {
    static isValidSphereData(parts: string[]): string | null {
        if (parts.length !== 4) {
            return "Invalid data: There should be exactly 4 numbers for a sphere (x, y, z, radius).";
        }
        const allNumbers = parts.every(part => !isNaN(parseFloat(part)));
        if (!allNumbers) {
            return "Invalid data: All parts must be valid numbers.";
        }
        if (parseFloat(parts[3]) < 0) {
            return "Invalid sphere data: Radius cannot be negative.";
        }
        return null;
    }
}