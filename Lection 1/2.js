// a, b и результат должны быть строго одного типа из множества: number, bigint, string

/**
 * @template T extends {number|bigint|string}
 * @param {T} a **число 1**
 * @param {T} b **число 2**
 * @returns {T} **результат**
 *
 * @example
 * sum(2,3) === 5
 */
function sum(a, b) {
  return a + b;
}
