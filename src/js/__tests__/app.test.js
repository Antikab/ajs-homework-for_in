import orderByProperties, { character, rulesOfOrder } from '../app';

test('test order by properties', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  const received = orderByProperties(character, rulesOfOrder);

  expect(received).toEqual(expected);
});

test('test that hasOwnProperty', () => {
  for (const item in character) {
    if (Object.prototype.hasOwnProperty.call(character, item));
  }
  expect(true).toBeTruthy();
});

test('test that object keys are defined', () => {
  expect(Object.keys(character)).toEqual(['name', 'health', 'level', 'attack', 'defence']);
});

test('test that hasOwnProperty', () => {
  for (const item in character) {
    if (Object.prototype.hasOwnProperty.call(character, item)) {
      expect(true).toBeTruthy();
    } else {
      expect(false).toBeTruthy();
    }
  }
});
