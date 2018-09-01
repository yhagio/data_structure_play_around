/** Class representing a Hash Table */

export default class HashTable {
  public storage: any[];
  public tableSize: number;

  constructor() {
    this.storage = [];
    this.tableSize = 0;
  }
  /**
   * Inserts a new key-value pair
   * @param {string} key - the key associated 
   * with the value
   * @param {string} value - the value to insert
   */
  insert(key: string, value: string) {
    const index = this._hash(key, this.tableSize);

    if (!this.storage[index]) {
      this.storage[index] = [];
    } else {
      if (this.storage[index].some(item => item[0] === key)) {
        throw `The key ${key} is already used!`;
      }
    }

    this.storage[index].push([key, value]);
  }

  /**
   * Deletes a key-value pair
   * @param {string} key - the key associated with the value
   * @return {*} value - the deleted value
   */
  remove() {

  }
  /**
   * Returns the value associated with a key
   * @param {string} key - the key to search for
   * @return {*} - the value associated with the key
   */
  retrieve(key): string {
    const index: number = this._hash(key, this.tableSize);
    const storageAtIndex: any[] = this.storage[index];
    if (storageAtIndex) {
      const item: any[] = storageAtIndex.find(item => item[0] === key);
      if (!item) {
        return `Item not found with key: ${key}`;
      }
      return item[1];
    }
  }

  /**
   * Hashes string value into an integer that can be mapped to an array index
   * @param {string} str - the string to be hashed
   * @param {number} n - the size of the storage array
   * @return {number} - an integer between 0 and n
   */
  _hash(str: string, n: number): number {
    let sum: number = 0;
    for (let i = 0; i < str.length; i++)
      sum += str.charCodeAt(i) * 3

    return sum % n;
  }
}