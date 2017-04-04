const snabbdom = require('snabbdom/snabbdom.js');
const module_props = require('snabbdom/modules/props');
const module_class = require('snabbdom/modules/class');
const module_attrs = require('snabbdom/modules/attributes');
const module_events = require('snabbdom/modules/eventlisteners');
const module_style = require('snabbdom/modules/style');
const D = require('Control/Node/DOM');

const patch = snabbdom.init([ 
    module_attrs, module_class, module_props, module_events, module_style 
]);

const _ = require('mori/mori');

let domNode = null;

function update(appId, dom0) {
    const dom1 = D.div({ 
        props: { id: appId } 
    }, [ dom0 ]);

    domNode = patch(domNode || document.getElementById(appId), dom1);
}

module.exports = { 
    update
};
