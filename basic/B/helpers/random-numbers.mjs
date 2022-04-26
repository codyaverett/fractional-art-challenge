
/**
 * Generates random integer array
 * of a specific length
 * @param {number} numberOfNumbers 
 * @param {number} maximumValue 
 * @returns {Array<number>}
 */
 export function randomIntArray(numberOfNumbers, maximumValue) {
    return Array.from(
        {length: numberOfNumbers}, 
        () => Math.floor(Math.random() * maximumValue)
    );
}

/**
 * Generates random floating point array
 * of a specific length
 * @param {number} numberOfNumbers 
 * @param {number} maximumValue 
 * @returns {Array<number>}
 */
export function randomFloatArray(numberOfNumbers, maximumValue) {
    return Array.from(
        {length: numberOfNumbers}, 
        () => Math.random() * maximumValue
    );
}
