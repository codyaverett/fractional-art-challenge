
/**
 * Counting sort is a stable O(n + k) sorting alorithm
 * - Works for positive integers
 * - Can sort negatives if the data is normalized to unsigned integers
 * and translated back after the sorting operations
 * - The larger the number of elements being sorted, the larger the
 * memory complexity becomes
 * @see https://en.wikipedia.org/wiki/Counting_sort
 * @param {Array<number>} array
 */
 export function countingSort(array) {
    
    const max = Math.max(...array); // Maximum value from array
    const min = Math.min(...array); // Minimum value will be the starting index
    const length = array.length; // How many elements we have total
    let count = []; // Stores the counts of each unique number of the array

    // Zero out all counts between min and max
    for(let i = min; i <= max; i++) {
        count[i] = 0;
    }

    // Count how many times a unique number appears
    for(let i = 0; i < length; i++) {
        count[array[i]] += 1;
    }

    // Insert values in order of their indexs into the original array
    for(let i = min, j = 0; i <= max; i++) {
        while(count[i] > 0) { // As long as the index has a count
            array[j] = i; // insert the indexed value in the next incrementing array position
            j++; // tracks where we are in the original array
            count[i]--; // removes one count of an index after it is inserted into the array
        }
    }

    return array;
}