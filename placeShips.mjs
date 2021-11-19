import { direction } from "./direction.mjs"
import { randomValueLetter } from "./randomValue.mjs";
import { randomValueNumber } from "./randomValue.mjs";
import { checkIfShipFitsOnTheBoard } from "./checkIfFits.mjs"
import { mapDirectionToVector } from "./checkIfFits.mjs"
import { createCoordinates } from "./checkIfFits.mjs"
import { blockingShip } from "./checkBlocking.mjs"


export let ships = [{
        name: 'carrier',
        length: 5,
        coordinates: [],
    },
    {
        name: 'battleship',
        length: 4,
        coordinates: [],
    },
    {
        name: 'cruiser',
        length: 3,
        coordinates: [],
    },
    {
        name: 'submarine',
        length: 3,
        coordinates: [],
    },
    {
        name: 'destroyer',
        length: 2,
        coordinates: [],
    }
];

// dir 1 = up 
// dir 2 = down
// dir 3 = left
// dir 4 = right
let dir = direction(); // generates direction based on value 1-4
let y = randomValueNumber(); // generates random number 1-10
let letter = randomValueLetter(); // generates random letter A-J
const map = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
};

const x = map[letter];
export function placeShips(ships) {
    ships.forEach(ship => {
            mapDirectionToVector(dir);
            checkIfShipFitsOnTheBoard(x, y, dir, ship.length)

            while (checkIfShipFitsOnTheBoard === false && (blockingShip === true)) {
                y = randomValueNumber();
                letter = randomValueLetter();

            }
            createCoordinates(x, y, dir, ship.length);

        }

    );

}

placeShips(ships);