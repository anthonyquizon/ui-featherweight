const Runner = require('Control/Runner');
const Component = require('Components/App');

db = _.toClj({ count: 0 });

window.runApp = () => {
    Runner.run({ Component, db, appId: 'app' });
};
