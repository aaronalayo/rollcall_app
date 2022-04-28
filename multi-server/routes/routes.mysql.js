
const passphraseRouter = require('./router.passphrase');
const checkinRouter = require('./router.checkin');
const healthCheckRouter = require('./router.healthCheck');
const loginRoute = require('./router.login');
const registerRoute = require('./router.register');
const teacherAPI = require('./router.teacherAPI');
const studentAPI = require('./router.studentAPI');

const baseRoute = '/api';

module.exports = function (app) {
    app.use(baseRoute, passphraseRouter);
    app.use(baseRoute, checkinRouter);
    app.use(baseRoute, healthCheckRouter);
    app.use(baseRoute, loginRoute);
    app.use(baseRoute, registerRoute);
    app.use(baseRoute + '/teachers', teacherAPI);
    app.use(baseRoute + '/students', studentAPI);

}
