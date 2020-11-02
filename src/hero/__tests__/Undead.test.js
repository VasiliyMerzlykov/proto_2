import Undead from '../Undead';

test('sUndead', () => {
  const description = new Undead('undead');
  const result = {
    name: 'undead', type: 'Undead', health: 100, level: 1, attack: 25, defense: 25,
  };
  expect(description).toEqual(result);
});