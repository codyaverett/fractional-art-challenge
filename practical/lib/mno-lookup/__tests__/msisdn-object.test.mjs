import test from 'ava';
import { Msisdn } from '../dist/mno-lookup.mjs';

test('has value after creation', t => {
    const input = "123456789";
    const num = new Msisdn('123456789');
    t.assert(num.value === input);
});
