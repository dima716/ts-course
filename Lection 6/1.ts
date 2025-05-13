function pair<T, U>(a: T, b: U): { first: T; second: U } {
  return {
    first: a,
    second: b,
  };
}

const result = pair('hello', 42);
console.log(result);

export {};
