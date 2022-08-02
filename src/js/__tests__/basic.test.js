import Team from '../basic';
import {
  Swordsman, Bowman, Magician, Daemon, Undead, Zombie,
} from '../class';

const persDaemon = new Daemon('Larry');
const persSwordsman = new Swordsman('Chack');
const persBowman = new Bowman('Susanna');
const persUndead = new Undead('Shon');
const persMagician = new Magician('Din');
const persZombie = new Zombie('Will');
const myDreamTeam = new Team();

test('create class', () => {
  const result = { members: new Set() };
  expect(result).toEqual(myDreamTeam);
});

test('added member', () => {
  const result = {
    'members': Set {
      Daemon {
         attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: 'Larry',
        type: 'Daemon',
      },
    }
  };
  // result.add(persDaemon);
  myDreamTeam.add(persDaemon);
  expect(result).toEqual(myDreamTeam);
});
