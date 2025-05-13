interface Shape {
  color: string;
  area(): number;
}

interface Circle extends Shape {
  radius: number;
}

interface Rectangle extends Shape {
  width: number;
  height: number;
}

function createCircle(radius: number): Circle {
  return {
    color: 'red',
    radius,
    area: function () {
      return Math.PI * this.radius * this.radius;
    },
  };
}

function createRectangle(width: number, height: number): Rectangle {
  return {
    color: 'red',
    width,
    height,
    area: function () {
      return this.width * this.height;
    },
  };
}

function calcArea(shape: Shape): number {
  return shape.area();
}

export {};
