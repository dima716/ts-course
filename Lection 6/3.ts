class ListProcessor<T> {
  #items: T[] = [];

  constructor(items: T[]) {
    this.#items = items;
  }
  map<U>(callback: (item: T) => U): ListProcessor<U> {
    return new ListProcessor(this.#items.map(callback));
  }

  getItems(): T[] {
    return this.#items;
  }
}

const numberList = new ListProcessor([1, 2, 3]);
const stringList = numberList.map((num) => num.toString());
console.log(stringList.getItems()); // ["1", "2", "3"]

export {};
