const uE = require('Util/expect');
const _ = require('mori/mori');

let Queue = [];

function dispatch(queue) {
    uE.check([[queue, Array, Function]]);

    Queue = Queue.concat(queue);
}

function init(updates=[]) {
    Queue = [];

    dispatch(updates);
}

function destroy() {
    Queue = []; 
}

function update(model0) {
    const queue = Queue.splice(0);

    return queue.reduce((acc, update) => {
        const model1 = update(acc)(model0);

        uE.check([[model1, uE.HashMap]]);

        return model1;
    }, model0);
}

module.exports = {
    init: init,
    destroy: destroy,
    update: update,
    dispatch: dispatch
};
