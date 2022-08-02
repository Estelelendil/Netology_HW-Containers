import Character, {
  Swordsman, Bowman, Magician, Daemon, Undead, Zombie,
} from './class';

class Team {
  constructor(...members) {
    this.members = new Set(...members);
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Этот персонаж уже в команде');
    } else {
      this.members.add(member);
    }
  }

  addAll(...members) {
    members.forEach((item) => {
      if (!this.members.has(item)) {
        this.members.add(item);
      }
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
