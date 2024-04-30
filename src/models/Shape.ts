export abstract class Shape {
    protected constructor(public id: string) {}

    abstract area(): number;
    abstract perimeter(): number;
}
