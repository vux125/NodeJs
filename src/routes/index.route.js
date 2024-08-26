const home = require('./home.route');
const admin = require('./admin.route');
const routes = (app) => {
    app.use('/home', home);
    app.use('/admin', admin);
}

module.exports = routes;