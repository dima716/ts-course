/**
 * @class
 */
class MathOperations {
  /**
   * Умножает два числа
   *
   * @param {number} a
   * @param {number} b
   * @returns {number}
   *
   * @see метод [divide]{@link MathOperations#divide} для деления.
   * @see статический метод [square]{@link MathOperations.square} для возведения в квадрат.
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Делит два числа
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  divide(a, b) {
    return a / b;
  }

  /**
   * Возводит в квадрат число
   * @param {number} x
   * @returns {number}
   * @see метод [multiply]{@link MathOperations#multiply} для умножения.
   */
  static square(x) {
    return x * x;
  }
}
