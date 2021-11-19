export function direction() {
    const direction = ["1", "2", "3", "4"];

    const random = Math.floor(Math.random() * direction.length);
    let direction1 = (direction[random]);
    return direction1;
}