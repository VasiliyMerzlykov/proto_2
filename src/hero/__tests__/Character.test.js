import Character from '../Character';

test('Получим объект Character', () => {
  const description = new Character('Green');
  const result = {
    name: 'Green', health: 100, level: 1,
  };
  expect(description).toEqual(result);
});


test('damage', () =>{
    const hero = new Character('Deamon')
    hero.defense = 40
    hero.damage(100)
    const expected = {name: 'Deamon', health: 40, level: 1, defense: 40}
    expect(expected).toEqual(hero)
})

test('level UP', () => {
  const description = new Character('warrior');
  description.health = 50;
  description.attack = 10;
  description.defense = 10;
  description.levelUp();
  const result = {
    name: 'warrior', health: 100, level: 2, attack: 12, defense: 12,
  };
  expect(description).toEqual(result);
});

test('повышение уровня', () => {
  function test() {
    const description = new Character('warrior');
    description.health = 0;
    return description.levelUp();
  }
  expect(test).toThrow('нельзя повысить левел умершего');
});

test('Короткое имя', () => {
  const description = () => new Character('В');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});

test('Длинное имя', () => {
  const description = () => new Character('Василий_Красно_Солнышко');
  expect(description).toThrow('Имя должно быть сткрой от 2 до 10 символов включительно');
});