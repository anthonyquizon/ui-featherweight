const D = require('Control/Node/DOM');
const _ = require('mori/mori');

function match(model, list) {
    const empty = { Component: () => D.div() };

    const x = list.reduce((acc, c) => {
        const value = _.getIn(model, c.key);
        
        return !acc && c.value === value ? c : acc;
    }, null) || empty;

    return x.Component({ model });
}

module.exports = {
    match
};
