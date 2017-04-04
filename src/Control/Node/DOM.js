const N = require('Control/Node/Core');
const _ = require('mori/mori');

const tags = [
    'div', 'span', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 
    'button', 'label', 'select', 'option', 'small', 'img',
    'input', 'header', 'ul', 'li', 'hr', 'i', 'b', 'form',
    'br',
    //SVG
    'svg', 'polygon', 'text', 'g', 'rect', 'path'
];

function exports() {
    return tags.reduce((acc, t) => {
        acc[t] = (a, b) => N.node(t, a, b);
        return acc;
    }, {});
}

module.exports = exports();
