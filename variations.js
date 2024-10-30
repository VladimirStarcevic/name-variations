export function getNumberOfChars(name) {
    return name.length;
}


export function getFirstChar(name) {
    return name.charAt(0);
}


export function getLastChar(name) {
    return name.charAt(name.length - 1);
}


export function getLower(name) {
    return name.toLowerCase();
}


export function getUpper(name) {
    return name.toUpperCase();
}


export function getCapitalized(name) {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
}