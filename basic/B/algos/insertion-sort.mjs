
/**
 * A stable and fast sorting algorithm over small lists
 * - Inplace swaps give O(1) constant memory usage
 * - Being an "online" algorithm would lend to being 
 * used with data streams
 * @see https://en.wikipedia.org/wiki/Insertion_sort
 * @param {Array<number>} array 
 */
export function insertionSort(array) {
    const length = array.length;

    for (let i = 1; i < length; i++) {
        let key = array[i];
        let j = i - 1;

        /**
         * Moves element of array[0..i-1], that are greater than 
         * key to the next position up
         * */ 
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }

        array[j + 1] = key;
    }
    return array;
}
