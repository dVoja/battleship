export function direction() {
    const direction = [1, 2, 3, 4];

    const random = Math.floor(Math.random() * direction.length);
    const chosenDirection = direction[random];
    return chosenDirection;
}