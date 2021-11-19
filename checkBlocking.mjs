import { ships } from "./placeShips.mjs"
import { createCoordinates } from "./checkIfFits.mjs"

const coordinates = createCoordinates();

export function blockingShip() {
    ships.find(ship => {
        ship.coordinates.find(coord => coordinates.includes(coord))
    })
};