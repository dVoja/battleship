import { question } from 'readline-sync';

export function strikeLocation() {
    const location = question('Enter a location to strike ie \'A2\': ', {
        limit: /^[a-j][1-9]0?$/i,
        limitMessage: 'That is not a proper location. Try again.'
    })
    let lowerLetter = location.toLowerCase();
    return lowerLetter;
}