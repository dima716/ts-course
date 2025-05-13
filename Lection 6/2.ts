interface MyStorage<T> {
  addItem(item: T): void;
  getAll(): T[];
}

class MemoryStorage<T> implements MyStorage<T> {
  #store: T[] = [];

  addItem(item: T) {
    this.#store.push(item);
  }

  getAll(): T[] {
    return this.#store;
  }
}

const stringStorage = new MemoryStorage<string>();
stringStorage.addItem('apple');
stringStorage.addItem('banana');
console.log(stringStorage.getAll()); // ["apple", "banana"]

export {};
