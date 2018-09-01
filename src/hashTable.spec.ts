import HashTable from './hashTable';

describe('HashTable', () => {
  let hashTable;
  beforeEach(() => {
    hashTable = new HashTable();
  })

  describe('Insert', () => {
    beforeEach(() => {
      hashTable.insert('first', 'First Value');
      hashTable.insert('second', 'Second Value');
      hashTable.insert('third', 'Third Value');
    });

    test('Retrieve first one', () => {
      expect(hashTable.retrieve('first')).toEqual('First Value');
    });

    test('Retrieve second one', () => {
      expect(hashTable.retrieve('second')).toEqual('Second Value');
    });

    test('Retrieve third one', () => {
      expect(hashTable.retrieve('third')).toEqual('Third Value');
    });
  });
});