export abstract class Shape {
    protected constructor(public id: string) {}

    abstract area(): number;
    abstract perimeter(): number;
    // Метод для проверки, касается ли фигура координатной плоскости на заданное расстояние
    abstract touchesPlaneOnDistance(distance: number): boolean;
}
