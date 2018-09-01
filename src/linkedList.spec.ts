import LinkedList from './linkedList';

describe('LinkedList', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList('First');
  });

  describe('Insert', () => {
    beforeEach(() => {
      linkedList.insert('Second');
      linkedList.insert('Third');
    });

    test('Has correct head value', () => {
      expect(linkedList.head.value).toEqual('First');
    });

    test('Has correct tail node', () => {
      expect(linkedList.tail).toEqual({ value: 'Third', next: null });
    });

    test('Contails the value "Second" in the linkedList', () => {
      expect(linkedList.contains('Second')).toEqual(true);
    });

    describe('Remove tail', () => {
      beforeEach(() => {
        linkedList.removeTail();
      });

      test('Has correct tail value', () => {
        expect(linkedList.tail).toEqual({ value: 'Second', next: null });
      });

      test('isHead', () => {
        const head = { value: 'First', next: { value: 'Second', next: null } };
        expect(linkedList.isHead(head)).toEqual(true);
      });

      test('isTail', () => {
        const tail = { value: 'Second', next: null };
        expect(linkedList.isTail(tail)).toEqual(true);
      });
    });
  });
});

