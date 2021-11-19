import { ships } from "./placeShips.mjs"

export function mapDirectionToVector(direction) {
    if (direction === 1) {
        return { x: 0, y: -1 };
    } else if (direction === 2) {
        return { x: 1, y: 0 };
    } else if (direction === 3) {
        return { x: 0, y: 1 };
    } else if (direction === 4) {
        return { x: -1, y: 0 };
    }
}

export function checkIfShipFitsOnTheBoard(x, y, direction, shipLength) {

    const vector = mapDirectionToVector(direction)

    const targetX = x + (vector.x * shipLength)
    const targetY = y + (vector.y * shipLength)

    return targetX > 0 && targetX < 10 && targetY > 0 && targetY < 10;
}

export function createCoordinates(x, y, direction, shipLength) {

    const vector = mapDirectionToVector(direction)
    const shipCoordinates = [];
    for (let i = 0; i < shipLength; i++) {
        let xCoord = x + vector.x * i;
        let yCoord = y + vector.y * i;

        shipCoordinates.push({ xCoord, yCoord })
    }

    return shipCoordinates
}