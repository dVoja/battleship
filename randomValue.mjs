export function randomValueNumber() {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    const random = Math.floor(Math.random() * numbers.length);
    let randomNumber = (numbers[random]);
    return randomNumber;
}

export function randomValueLetter() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    const random = Math.floor(Math.random() * letters.length);
    let randomLetter = (letters[random]).toLowerCase();
    return randomLetter;
}