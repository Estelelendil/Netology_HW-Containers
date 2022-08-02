import Team from './js/basic';
import {
  Swordsman, Bowman, Magician, Daemon, Undead, Zombie,
} from './js/class';

const persDaemon = new Daemon('Larry');
const persSwordsman = new Swordsman('Chack');
const persBowman = new Bowman('Susanna');
const persUndead = new Undead('Shon');
const persMagician = new Magician('Din');
const persZombie = new Zombie('Will');

const akunaMatata = new Team();
akunaMatata.add(persBowman);
akunaMatata.add(persDaemon, persSwordsman, persMagician, persUndead, persZombie);
console.log(AkunaMatata);
