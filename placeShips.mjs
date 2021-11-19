import { direction } from "./direction.mjs"
import { randomValueNumber } from "./randomValue.mjs";
import { checkIfShipFitsOnTheBoard } from "./checkIfFits.mjs"
import { mapDirectionToVector } from "./checkIfFits.mjs"
import { createCoordinates } from "./checkIfFits.mjs"
import { blockingShip } from "./checkBlocking.mjs"


export let ships = [{
        name: '5 carrier',
        length: 5,
        coordinates: [],
    },
    {
        name: '4 battleship',
        length: 4,
        coordinates: [],
    },
    {
        name: '3 cruiser',
        length: 3,
        coordinates: [],
    },
    {
        name: '3 submarine',
        length: 3,
        coordinates: [],
    },
    {
        name: '2 destroyer',
        length: 2,
        coordinates: [],
    }
];

// dir 1 = up 
// dir 2 = down
// dir 3 = left
// dir 4 = right





export function placeShips(ships) {
    ships.forEach(ship => {
        let dir = direction(); // generates direction based on value 1-4
        let y = randomValueNumber();
        let x = randomValueNumber();; // generates random number 1-10
        let shipcoord = createCoordinates(x, y, dir, ship.length);
        while (checkIfShipFitsOnTheBoard(x, y, dir, ship.length) === false || blockingShip(shipcoord) === true) {
            x = randomValueNumber();
            y = randomValueNumber();
            dir = direction();
            shipcoord = createCoordinates(x, y, dir, ship.length);

        }
        ship.coordinates = shipcoord; // << evo ga previd, pushujemo u array, umesto da replacujemo array novim arrayom

    });
}

placeShips(ships);
console.log(JSON.stringify(ships));
let output = '';
for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
        const shipAtCoords = findShipAtCoordinates(x, y);
        output += shipAtCoords ? shipAtCoords.name[0] : '.';
    }
    output += '\n';
}

function findShipAtCoordinates(x, y) {
    return ships.find(ship => ship.coordinates.find(coord => coord.xCoord === x && coord.yCoord === y));
}
console.log(output);