
/**
 * Wraps a console timer around code blocks 
 * to show general function execution times
 * @param {string} name 
 * @param {Function} callback 
 */
export function fnTime(name, callback) {
    console.log(`--- ${name} ---`);
    console.time(name);
    callback()
    console.timeEnd(name);
    console.log(`--- end ${name} ---\n`);
}
