interface Shape1 {
  type: 'circle' | 'rectangle';
}

interface Circle1 extends Shape1 {
  type: 'circle';
  radius: number;
}

interface Rectangle1 extends Shape1 {
  type: 'rectangle';
  width: number;
  height: number;
}

type ShapeType = 'circle' | 'rectangle';

// satisfies
let myShape = {
  type: 'circle',
  radius: 5,
} satisfies Shape1;

// up-cast
/*
 * Up-cast успешен так как, мы от подтипа перешли супертипу(родительскому)
 * Это безопасно, так подтип в любом случае включает в себя все свойста и поведение базового типа
 * */
let shape: Shape1 = myShape;

// down-cast
/*
 * Даункаст может быть опасен, потому что объект, который мы даункастим, может не содержать дополнительные свойства и методы
 * характерные для подтипа. В итоге можем получить ошибку в runtime.
 * */
let circle = myShape as Circle1;

// down-cast (с as и проверкой типа)
function isCircle(shape: Shape1): shape is Circle1 {
  return shape.type === 'circle';
}

if (isCircle(shape)) {
  circle = shape;
} else {
  console.log('This is not a Circle');
}

// Двойной cast через any
/*
 * Двойной cast через any является плохой практикой, так как мы сначала делаем upcast до any, а потом
 * downcast до типа Circle1. И как в случае с обычным downcast, мы не можем гарантировать что unsafe circle содержит свойства и методы типа Circle1
 * */
const unsafeCircle: Circle1 = shape as any as Circle1;
unsafeCircle.radius = 5;

export {};
