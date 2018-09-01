// Class representing a Queue.

export default class Queue {
  public storage: object;
  public length: number;
  public headIndex: number;

  constructor() {
    this.storage = {};
    this.length = 0;
    this.headIndex = 0;
  }

  /**
   * Enqueues a new value at the end of the queue
   * @param {string} value - the value to enqueue
   */
  enqueue(value: string): void {
    this.storage[this.length + this.headIndex] = value;
    this.length++;
  }

  /**
   * Dequeues the value from the beginning of the queue and
   * returns it
   * @return {*} the first and oldest value in the queue
   */
  dequeue(): string {
    if (!this.length) {
      return;
    }
    const headValue: string = this.storage[this.headIndex];
    delete this.storage[this.headIndex];
    this.length--;
    this.headIndex++;
    return headValue;
  }

  /**
   * Returns the value at the beginning of the queue without
   * removing it from the queue
   * @return {*} value the first and oldest value in the queue
   */
  peek() {
    if (!this.length) {
      return;
    }

    return this.storage[this.headIndex];
  }
}