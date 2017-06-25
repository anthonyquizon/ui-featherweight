//@flow
import E from 'UI/Engine';
import C from './Component';

const db = _.toClj({ count: 0 });

window.runApp = () => {
    E.run({ C, db, appId: 'app' });
};
