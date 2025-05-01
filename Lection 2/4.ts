type CalculateArea = {
    (radius: number): number;
    (width: number, height: number): number;
    (a: number, b: number, c: number): number;
}

const calculateArea: CalculateArea = (...args: number[]): number => {
    if (args.length === 1) {
        const [radius] = args;
        return Math.PI * radius * radius;
    } else if (args.length === 2) {
        const [width, height] = args;
        return width * height;
    } else if (args.length === 3) {
        const [a,b,c] = args;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c)); // формула Герона
    } else {
        throw new Error("Invalid number of arguments");
    }
}

calculateArea(1);
calculateArea(1,2);
calculateArea(2,3,4);

// @ts-expect-error
calculateArea(1,2,3,4);