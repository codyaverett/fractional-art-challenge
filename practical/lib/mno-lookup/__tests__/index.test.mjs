import test from 'ava';

import { lookupByMobileOperatorId } from '../dist/mno-lookup.mjs';

test('lookup existing Mobile Operator Id', t => {
    const value = lookupByMobileOperatorId("768");
    t.snapshot(value);
});

test('fail to lookup a non-existing Mobile Operator Id', t => {
    const value = lookupByMobileOperatorId("7682222");
    t.snapshot(value);
});
