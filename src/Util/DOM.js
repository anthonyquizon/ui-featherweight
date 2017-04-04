
function on(ev, fn) {
    const props = { on: {} };
    props.on[ev] = fn;

    return props;
}

module.exports = {
    id: id => ({ props: { id } }),
    cls: className => ({ props: { className }}),
    idCls: (id, className) => ({ props: { id, className }}),
    on: on,
    forI: x => ({ props: { for: x } }),
};


