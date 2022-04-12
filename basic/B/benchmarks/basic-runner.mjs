#!/usr/bin/env node

import { randomIntArray } from "../helpers/random-numbers.mjs";
import { countingSort } from "../algos/counting-sort.mjs";
import { fnTime } from "../helpers/fn-time.mjs";
import { builtinSort } from "../algos/builtin-sort.mjs";
import { insertionSort } from "../algos/insertion-sort.mjs";

const array = randomIntArray(11, 99);

console.dir(array);

fnTime("built-in v8 sort", () => {
    builtinSort(array);
})

fnTime("insertion sort", () => {
    insertionSort(array);
})

fnTime("counting sort", () => {
    countingSort(array);
})
