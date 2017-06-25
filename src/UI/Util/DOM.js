function on(ev, fn) {
    const props = { on: {} };
    props.on[ev] = fn;

    return props;
}

function id(x) {
  return { props: { id: x } };
}

function cls(x) {
  return { props: { className: x }};
}

export { id, cls, on };

