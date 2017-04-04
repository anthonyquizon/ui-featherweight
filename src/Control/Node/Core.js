const h = require('snabbdom/h');
const _ = require('mori/mori');

function arrRes(xs) {
    if (Array.isArray(xs)) {
        return xs.filter(x => x);
    }
    else if (_.isVector(xs) || _.isList(xs)) {
        return _.toJs(xs).filter(x => x);
    }

    return xs;
}

function node(tag, a, b) {
    return h(tag, arrRes(a), arrRes(b));
}

module.exports = { 
    node
};
