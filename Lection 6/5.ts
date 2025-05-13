interface Mapper<T, U> {
  transform(data: T): U extends null ? null : U;
}

class DataTransformer<T, U> implements Mapper<T, U> {
  #transformFn: (data: T) => U;

  constructor(transformer: (data: T) => U) {
    this.#transformFn = transformer;
  }

  transform(data: T): U extends null ? null : U {
    const result = this.#transformFn(data);
    return (result === null ? null : result) as U extends null ? null : U;
  }
}

export {};
