import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';

const bowman = new Bowman('Bowman1');
const bowman2 = new Bowman('Bowman2');
const swordsman = new Swordsman('Swordsman1');
const magician = new Magician('Magician1');
const udead = new Undead('Undead1');
const zombie = new Zombie('Zombie1');
const daemon = new Daemon('Daemon1');

console.log(bowman, bowman2, swordsman, magician, udead, zombie, daemon);