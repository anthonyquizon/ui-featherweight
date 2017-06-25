//@flow
import snabbdom from 'snabbdom/snabbdom.js';
import module_props from 'snabbdom/modules/props';
import module_class from 'snabbdom/modules/class';
import module_attrs from 'snabbdom/modules/attributes';
import module_events from 'snabbdom/modules/eventlisteners';
import module_style from 'snabbdom/modules/style';
import D from 'UI/Node/DOM';

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

export { update };
