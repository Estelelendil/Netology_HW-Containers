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

describe('Team test', () => {
  let result;
  let myDreamTeam;

  beforeEach(() => {
    result = { members: new Set() };
    myDreamTeam = new Team();
  });

  test('create class', () => {
    expect(result).toEqual(myDreamTeam);
  });

  test('added member', () => {
    result.members.add(new Daemon('Larry'));
    myDreamTeam.add(persDaemon);

    expect(result).toEqual(myDreamTeam);
  });

  test('added several members', () => {
    result.members.add(new Daemon('Larry'));
    result.members.add(new Magician('Din'));
    result.members.add(new Zombie('Will'));
    myDreamTeam.addAll(persDaemon, persMagician, persZombie);

    expect(result).toEqual(myDreamTeam);
  });

  test('testing error added equal pers', () => {
    myDreamTeam.add(persDaemon);
    expect(() => myDreamTeam.add(persDaemon)).toThrow();
  });

  test('testing error added several equal pers', () => {
    result.members.add(new Daemon('Larry'));
    result.members.add(new Magician('Din'));
    result.members.add(new Zombie('Will'));
    myDreamTeam.addAll(persDaemon, persMagician, persZombie, persDaemon);

    expect(result).toEqual(myDreamTeam);
  });

  test('testing convert to Array', () => {
    result.members.add(new Daemon('Larry'));
    myDreamTeam.add(persDaemon);
    const newresult = Array.from(result.members);

    expect(newresult).toEqual(myDreamTeam.toArray());
  });
});
