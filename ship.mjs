import { keyIn } from 'readline-sync';
import { placeShips } from "./placeShips.mjs";
import { strikeLocation } from "./strikeLocation.mjs";



keyIn('Press any key to start');

placeShips();


let a = placeShips();
console.log(a);