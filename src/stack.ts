// Class representing a Stack.

export default class Stack {
  public storage: object;
  public length: number;

  constructor() {
    this.storage = {};
    this.length = 0;
  }

  /**
   * Adds a new value at the end of the stack
   * @param {string} value the value to push
   */
  push(value: string): void {
    // TODO: check the value type?
    this.storage[this.length] = value;
    this.length++;
  }

  /**
   * Removes the value at the end of the stack and returns it
   * @return {string} the last and newest value in the stack
   */
  pop(): string {
    if (!this.length) {
      return;
    }
    const lastValue = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return lastValue;
  }

  /**
   * Returns the value at the end of the stack without removing it
   * @return {*} the last and newest value in the stack
   */
  peek(): string {
    if (!this.length) {
      return;
    }
    const lastValue = this.storage[this.length - 1];
    return lastValue;
  }
}
