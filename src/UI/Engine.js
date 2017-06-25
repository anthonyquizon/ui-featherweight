import Renderer from 'UI/Renderer';
import R from 'UI/Reconciler';
import _ from 'mori/mori';

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

export { run, update };

