function find(xs, a) {
    return xs.filter(x => x === a)[0];
}

function findWith(xs, f) {
    return xs.filter(f)[0];
}

function insert(xs, i, a) {
    return xs.splice(0).splice(i, 0, a);
}

function range(n) {
    let xs = [];

    for (let i=0; i<n; i++)  {
        xs.push(i);
    }

    return xs;
}

function iterate(n, fn, xs) {
    return range(n).reduce((acc, _) => fn(acc), xs);
}

module.exports = {
    find,
    findWith,
    insert,
    exists: (xs, a) => find(xs, a).length !== 0,
    range,
    iterate
};
