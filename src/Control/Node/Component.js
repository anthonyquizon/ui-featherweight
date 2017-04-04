const _ = require('mori/mori');

function run(C, data, children, prev) {
    const model = (data && data.model) || null;
    const prevModel = (prev && prev.model) || null;

    if (model && prevModel && C.cacheKeys) {
        const hasChanged = C.cacheKeys.reduce((acc, k) => {
            const cacheA = _.getIn(prevModel, k);
            const cacheB = _.getIn(model, k);

            return !_.equals(cacheA, cacheB) || acc;
        }, false);

        if (!hasChanged) {
            return prev;
        }
    }
    
    return {
        dom: C.render(data, children),
        model: model
    };
}

function Component(C) {
    let prev = null;

    return (data, children) => {
        const res = run(C, data, children, prev);
        prev = res;

        return res.dom;
    };
}

module.exports = { 
    Component
};
