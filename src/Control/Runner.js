const Renderer = require('Control/Renderer');
const R = require('Control/Reconciler');
const _ = require('mori/mori');


function update({ Component, model, force=true, appId='app' }) {
    const model1 = R.update(model);

    if (force || !_.equals(model1, model)) {
        const dom = Component({ model: model1 }); 

        Renderer.update(appId, dom);
    }

    return model1;
}

function run({ Component, updates, db, appId }) {
    R.init(updates);

    (function loop(model0, force=false) {
        const model1 = update({ 
            Component, model: model0, force, appId 
        });

        requestAnimationFrame(_t => loop(model1));
    }(db, true));
}

module.exports = { 
    run, update 
};

