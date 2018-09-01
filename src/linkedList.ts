/* Class representing a Linked List 

head: { value: '1', next: { value: '2', next: { value: '3', next: null }}}
tail: { value: '3', next: null }

*/


interface INode {
  value: string;
  next: INode;
}

export default class LinkedList {
  public head: INode;
  public tail: INode;

  constructor(value: string) {
    this.head = { value, next: null };
    this.tail = this.head;
  }

  /**
   * Inserts a new value to the end of the linked list
   * @param {string} value - the value to insert
   */
  insert(value: string): void {
    const node: INode = { value, next: null };
    this.tail.next = node;
    this.tail = node;
  }

  /**
   * Removes the value at the end of the linked list
   * @return {string} - the removed value
   */
  removeTail(): string {
    // Since we cannot know the previous node of the tail, loop through
    let currentNode: INode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    const deletedTail: string = this.tail.value;
    // Second last node is the new tail node
    currentNode.next = null;
    this.tail = currentNode;
    return deletedTail;
  }

  /**
   * Searches the linked list and returns true if it contains the value passed
   * @param {string} value - the value to search for
   * @return {boolean} - true if value is found, otherwise false
   */
  contains(value: string): boolean {
    let currentNode: INode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode.value === value;
  }

  /**
   * Checks if a node is the head of the linked list 
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the head, otherwise false
   */
  isHead(node: INode): boolean {
    return JSON.stringify(node) === JSON.stringify(this.head);
  }

  /**
   * Checks if a node is the tail of the linked list 
   * @param {{prev:Object|null, next:Object|null}} node - the node to check
   * @return {boolean} - true if node is the tail, otherwise false
   */
  isTail(node: INode): boolean {
    return JSON.stringify(node) === JSON.stringify(this.tail);
  }
}