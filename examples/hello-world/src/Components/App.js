const C = require('Control/Node/Component');
const D = require('Control/Node/DOM');
const _ = require('mori/mori');

function render({ model }) {
    const props = {
        props: { className: 'container' }
    };

    return D.div(props, [
        D.h1('hello world!')
    ]);
}

module.exports = C.Component({
    render: render
});
