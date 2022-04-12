
/**
 * The most simple javascript sorting implementation
 * @param {Array<number>} array 
 */
export function builtinSort(numberArray) {
    return numberArray.sort((a, b) => {
        return a - b;
    });
}