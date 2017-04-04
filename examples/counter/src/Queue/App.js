const uE = require('Util/expect');
const _ = require('mori/mori');

let inc = v => m => prevM => {
    uE.check([[v, Number], [m, uE.HashMap]]);

    return _.assocIn(m, ['count'], v + 1);
};

