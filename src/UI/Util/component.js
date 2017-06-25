import D from 'UI/Node/DOM';
import _ from 'mori/mori';

function match(model, list) {
    const empty = { Component: () => D.div() };

    const x = list.reduce((acc, c) => {
        const value = _.getIn(model, c.key);
        
        return !acc && c.value === value ? c : acc;
    }, null) || empty;

    return x.Component({ model });
}

export { match };
