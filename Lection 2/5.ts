type Integer = number;

type MyNumber = `${Integer}${'px' | '%'}`;

const number1: MyNumber = '12px';
const number2: MyNumber = '12%';
const number3: MyNumber = '12.2%';

export {};
