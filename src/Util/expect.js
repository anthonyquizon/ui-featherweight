/* Poor man's type checking */

const expect = require('expect');
const _ = require('mori/mori');

const HashMap = 'Map';
const OptString = 'OptString';
const OptNumber = 'OptNumber';

const types = {};
types[OptNumber] = x => x && expect(x).toBeA('number');
types[OptString] = x => x && expect(x).toBeA('string');
types[Number] = x => expect(x).toBeA('number');
types[String] = x => expect(x).toBeA('string');
types[Function] = x => expect(x).toBeA('function');
types[HashMap] = x => expect(_.isMap(x)).toBe(true);
types[Array] = (xs, t) => {
    expect(xs).toBeA('array');
    xs.forEach(x => types[t](x));
};

function check(xs) {
    if (window.RUNTIME_CHECKS) {
        xs.forEach(([v, t, ...rest]) => { types[t](v, rest); });
    }
}

module.exports = {
    check,
    HashMap, 
    OptString,
    OptNumber,
};
