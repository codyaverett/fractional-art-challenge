## Prompt

B) Please write a function that sorts 11 small numbers (<100) as fast as possible. Once written, provide an estimate for how long it would take to execute that function 10 Billion (10^10) times on a normal machine.

## Cody's Answer

To get an accurate estimate of how long it would take to on an average computer I would first need to define an average computer and make a few assumptions about the prompt.

I will make the following assumptions about this task:
- For this test we will calculate using integers instead of floating points because integer operations are faster
- Values should be sorted from lowest to highest
- A set of new random integer numbers should be used for each function execution because it wouldn't make sense to resort the same random array more than one time.
- I will use NodeJS to compare a few sorting algorithm implementations against each other.  This will allow me to calculate the number of operations performable over a period of time.
- Native code will probably be faster than nodejs code, probably worth doing for a real problem

My ideal goal would be to find a way to sort these numbers in linear time O(n) where n is 11.  Given that the array is only 11 numbers memory won't be an issue unless parallelization of the calculations comes into play.  Also, we'd also like to have a good bigO for the memory footprint.

I tested a few algorithms that I thought would give good performance on our 11 number array of small numbers.

Out of the two algorithms I decided to implement, [Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort) and [Counting sort](https://en.wikipedia.org/wiki/Counting_sort), Insertion sort came out on top EVERY TIME.  Insertion has an edge over counting sort because counting sort loses performance when the range of values to index spreads out. e.g. 1-100 is easier to itterate than 1-1000.

### Insertion sort [Implementation](B/algos/insertion-sort.mjs) 

```javascript
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
```

### Running this insertion sort function 10 billion times!

The benchmarking results on my M1 macbook pro consistently gave me around 21ms runtime for one sort to complete.
  
> 21ms * 10,000,000,000 = 210,000,000,000ms

> 1 minute = 60,000 ms

> 210,000,000,000ms / 60,000ms = 3,500,000 minutes

> 3,500,000 minutes / 1440 minutes/day = 2430.56 days or 6.67 years 

If a computer has 16 logical processors and we used all the cores the execution wait time decreases maybe to 0.42 years. :sob:

It would make sense to run something like this on a GPU.
I don't have experience with that yet, but I will explore that if I ever run into a code execution problem like this again. 

### Running demo code

In the `B` directory you can install dependencies with `npm`

There are two scripts that will run the benchmarkJS and simple timer benchmarking scripts

```JSON
  "scripts": {
    "benchmarks": "node benchmarks/benchmarks.mjs",
    "basic-timer": "node benchmarks/basic-runner.mjs"
  },
```

e.g.
`npm run benchmarks` and `npm run basic-timer`

### Planning

#### How can I get accurate measurements of execution times and compare?
  - `time` executable gives process boundry run-time
  - `console.time` can be used in a javascript context
  - [microtime npm module](https://github.com/wadey/node-microtime)
  - [benchmark npm module](https://github.com/bestiejs/benchmark.js)

#### Algos to consider
  - v8's builtIn sort
  - insertion sort
  - counting sort
  - ~radix sort~

#### Checklist
- [x] Look up big O notations for standard sorting algos
- [x] Setup basic nodejs script to run tests
- [x] Generate random number array of variable length
- [x] [Built-in v8 sort implementation](B/algos//builtin-sort.mjs)
- [x] [Insertion sort implementation](B/algos/insertion-sort.mjs)
- [x] [Counting sort implementation](B/algos/counting-sort.mjs)
- [x] Setup test framework ([fnTime function](helpers/fn-time.mjs))
- [x] Setup benchmark suite
- [x] Output estimates

#### References

- [Adding CPUs to shorten execution time Theory and Amdahl's law](https://hmf.enseeiht.fr/travaux/CD0001/travaux/optmfn/micp/reports/s13itml/theory.htm) - I found interesting to consider what the limitations of process parallelization could be.
- [Fast Parallel Sorting algorithms on GPUs](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.403.5244&rep=rep1&type=pdf)
- [BigO cheatsheet](https://www.bigocheatsheet.com/)
