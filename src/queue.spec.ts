import Queue from './queue';

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  describe('queue', () => {
    beforeEach(() => {
      queue.enqueue('Hello');
      queue.enqueue('Hola');
      queue.enqueue('Bonjour');
      queue.enqueue('Ola');
    })
    test('increments length', () => {
      expect(queue.length).toEqual(4);
    });
    test('stored correct value at head', () => {
      expect(queue.storage[queue.headIndex]).toEqual('Hello');
    });
    test('stored correct value at tail', () => {
      expect(queue.storage[queue.length - 1]).toEqual('Ola');
    });

    describe('dequeue / peek', () => {
      beforeEach(() => {
        queue.dequeue();
      });
      test('decrements length', () => {
        expect(queue.length).toEqual(3);
      });
      test('first item is correct one', () => {
        expect(queue.storage[queue.headIndex]).toEqual('Hola');
      });
      test('peek returns first (oldest) item', () => {
        expect(queue.peek()).toEqual('Hola');
      });
    });
  });
});