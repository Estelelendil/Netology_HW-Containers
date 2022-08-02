import Character, {
  Swordsman, Bowman, Magician, Daemon, Undead, Zombie,
} from '../class';
//   import persons from '../../index';

test('testing functiom levelUp', () => {
  const pers = new Daemon('Larry');
  const result = {
    attack: 12,
    defence: 48,
    health: 100,
    level: 2,
    name: 'Larry',
    type: 'Daemon',
  };
  expect(result).toEqual(pers.levelUp());
});

test('testing functiom levelUp for dead person', () => {
  expect(() => {
    const pers = new Daemon('Larry');
    pers.demage(250);
    pers.levelUp();
  }).toThrow('');
});

test('testing functiom demage', () => {
  const pers = new Daemon('Larry');
  const result = {
    attack: 10,
    defence: 40,
    health: 40,
    level: 1,
    name: 'Larry',
    type: 'Daemon',
  };
  expect(result).toEqual(pers.demage(100));
});

test('testing functiom demage for dead person', () => {
  expect(() => {
    const pers = new Daemon('Larry');
    pers.demage(250);
    pers.demage(150);
  }).toThrow('');
});

//   test('every daughter-object depends from parents class', () => {
//     const result = true;
//     expect(result).toBe(persons.every((item) => item instanceof Character));
//   });

test('exemplar persons Daemon corresponce class constructor', () => {
  const result = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Larry',
    type: 'Daemon',
  };
  const pers = new Daemon('Larry');
  expect(result).toEqual(pers);
});

test('exemplar persons Bowman corresponce class constructor', () => {
  const result = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Susanna',
    type: 'Bowman',
  };
  const pers = new Bowman('Susanna');
  expect(result).toEqual(pers);
});

test('exemplar persons Magician corresponce class constructor', () => {
  const result = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Din',
    type: 'Magician',
  };
  const pers = new Magician('Din');
  expect(result).toEqual(pers);
});

test('exemplar persons Swordsman corresponce class constructor', () => {
  const result = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Chack',
    type: 'Swordsman',
  };
  const pers = new Swordsman('Chack');
  expect(result).toEqual(pers);
});

test('exemplar persons Undead corresponce class constructor', () => {
  const result = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Shon',
    type: 'Undead',
  };
  const pers = new Undead('Shon');
  expect(result).toEqual(pers);
});

test('exemplar persons Zombie corresponce class constructor', () => {
  const result = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Will',
    type: 'Zombie',
  };
  const pers = new Zombie('Will');
  expect(result).toEqual(pers);
});

test('error name when create person', () => {
  expect(() => new Magician('N')).toThrow('');
});

test('error type when create person', () => {
  expect(() => new Character('Name', 'Magician1')).toThrow('');
});
