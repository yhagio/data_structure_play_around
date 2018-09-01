import Stack from './stack';

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  describe('push', () => {
    beforeEach(() => {
      stack.push('Hello');
      stack.push('Hola');
      stack.push('Bonjour');
    })
    test('increments length', () => {
      expect(stack.length).toEqual(3);
    });
    test('stored correct value at correct index', () => {
      expect(stack.storage[0]).toEqual('Hello');
    });
    test('stored correct value at correct index 2', () => {
      expect(stack.storage[1]).toEqual('Hola');
    });
    test('stored correct value at correct index (last item)', () => {
      expect(stack.storage[stack.length - 1]).toEqual('Bonjour');
    });

    describe('pop / peek', () => {
      beforeEach(() => {
        stack.pop();
      });
      test('decrements length', () => {
        expect(stack.length).toEqual(2);
      });
      test('last item is removed', () => {
        expect(stack.storage[stack.length - 1]).toEqual('Hola');
      });
      test('peek returns last item', () => {
        expect(stack.peek()).toEqual('Hola');
      });
    });
  });
});