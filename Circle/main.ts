class Circle {
    private radius: number = 1.0;
    private color: string = "violet";
    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;

        let area = document.getElementById("area");

        area.addEventListener('click', (() => {
            this.radius = +(document.getElementById("cir") as HTMLInputElement).value;
            let output = document.getElementById("output") as HTMLInputElement;
            output.value = this.getArea().toString();
        }));
        let circumference = document.getElementById("circum");

        circumference.addEventListener('click', (() => {
            this.radius = +(document.getElementById("cir") as HTMLInputElement).value;
            let output = document.getElementById("output") as HTMLInputElement;
            output.value = this.getCircumference().toString();
        }));

    }
    getRadius(): number {
        return this.radius;
    }
    setRadius(radius: number) {
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }
    setColor(color: string) {
        this.color = color;
    }

    getArea(): number {
        return (Math.PI * this.radius * this.radius);
    }

    getCircumference(): number {
        return (2 * Math.PI * this.radius);
    }
}
new Circle(8, "#f00");
