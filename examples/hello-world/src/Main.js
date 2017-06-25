//@flow
import Runner from 'Control/Runner';
import Component from 'Component';

const db = _.toClj({ count: 0 });

window.runApp = () => {
    Runner.run({ Component, db, appId: 'app' });
};
