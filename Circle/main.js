var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        var _this = this;
        this.radius = 1.0;
        this.color = "violet";
        this.radius = radius;
        this.color = color;
        var area = document.getElementById("area");
        area.addEventListener('click', (function () {
            _this.radius = +document.getElementById("cir").value;
            var output = document.getElementById("output");
            output.value = _this.getArea().toString();
        }));
        var circumference = document.getElementById("circum");
        circumference.addEventListener('click', (function () {
            _this.radius = +document.getElementById("cir").value;
            var output = document.getElementById("output");
            output.value = _this.getCircumference().toString();
        }));
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.getArea = function () {
        return (Math.PI * this.radius * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * Math.PI * this.radius);
    };
    return Circle;
}());
new Circle(8, "#f00");
