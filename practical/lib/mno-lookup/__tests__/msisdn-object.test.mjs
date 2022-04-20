import test from 'ava';
import { Msisdn } from '../dist/mno-lookup.mjs';

const basicInput = "123456789";
const basicInstance = new Msisdn('123456789');

test('has value after creation', t => {
    t.assert(basicInstance.value === basicInput);
});

test('toString()', t => {
    t.snapshot(basicInstance.toString());
});
