const rs = require('readline-sync');

class Game {
    constructor() {
        this.board = [];
        this.numberOfShips = 5;
        this.typeOfShips = [{
                name: 'carrier',
                unit: 5,
                coordinates: [],
            },
            {
                name: 'battleship',
                unit: 4,
                coordinates: [],
            },
            {
                name: 'cruiser',
                unit: 3,
                coordinates: [],
            },
            {
                name: 'submarine',
                unit: 3,
                coordinates: [],
            },
            {
                name: 'destroyer',
                unit: 2,
                coordinates: [],
            }
        ];
        this.coordinates = {
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
            ['1']: 0,
            ['2']: 1,
            ['3']: 2,
            ['4']: 3,
            ['5']: 4,
            ['6']: 5,
            ['7']: 6,
            ['8']: 7,
            ['9']: 8,
            ['10']: 9,
        }
        this.storedAttackLocation = [];
    }

    gameStart() {
        rs.keyIn('Press any key to start');
        this.board();
        for (let ship of this.typeOfShips) {
            this.placeShipOnTheBoard();
        }

    }

    createBoard() {
        let grid = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        let gridArray = [];

        for (let coordinate of grid) {
            for (let i = 10; i >= 0; i--) {
                gridArray.push(coordinate + i.toString);
            }
            this.board.push(gridArray);
        }

    }

    placeShipOnTheBoard() {

    }

}

const g = new Game();
g.gameStart();