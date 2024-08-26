const admin = require('./admin.route');
const home = require('./home.route');
const routes = (app) => {
    app.use('/home', home);

}

module.exports = routes;