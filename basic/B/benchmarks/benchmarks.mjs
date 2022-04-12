import Benchmark from 'benchmark';

import { randomIntArray } from '../helpers/random-numbers.mjs';
import { builtinSort } from '../algos/builtin-sort.mjs';
import { insertionSort } from '../algos/insertion-sort.mjs';
import { countingSort } from '../algos/counting-sort.mjs';

const randomArray = randomIntArray(11, 99);

const suite = new Benchmark.Suite('algo tests', { async: false,  })
    .add(`built-in v8 sort`, () => {
        return builtinSort(randomArray);
    })
    .add('insertion sort', () => {
        return insertionSort(randomArray);
    })
    .add('counting sort', () => {
        return countingSort(randomArray);
    })
    .on('complete', event => {
        const suite = event.currentTarget;
        // console.table(suite.f);
        const fastestOption = suite.filter('fastest').map('name');
        console.log(`The fastest option is ${fastestOption}`);
    })
    .on('cycle', event => {
        const benchmark = event.target;
        console.log(benchmark.toString());
    })
    .run();



