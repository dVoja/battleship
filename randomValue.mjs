export function randomValueNumber() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const random = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[random];
    return randomNumber;
}

export function randomValueLetter() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    const random = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[random].toLowerCase();
    return randomLetter;
}