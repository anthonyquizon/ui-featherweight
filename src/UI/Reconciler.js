//@flow
import _ from 'mori/mori';

let Queue = [];

function dispatch(queue : Array<(model:any) => any>) {
    Queue = Queue.concat(queue);
}

function init(updates : Array<any> = []) { //TODO Fix: type annotation
    Queue = [];

    dispatch(updates);
}

function destroy() {
    Queue = []; 
}

function update(model0:Map<String, any>) {
    const queue = Queue.splice(0);

    return queue.reduce((acc, update) => {
        const model1 = update(acc)(model0);

        console.assert(_.isMap(model1), 'Component doesn\'t return hashmap')

        return model1;
    }, model0);
}

export { init, destroy, update, dispatch };
