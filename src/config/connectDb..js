const { Sequelize, Model } = require('sequelize');


const seque = new Sequelize(process.env.DB, process.env.USER_DB, process.env.PWD_DB, {
    host: process.env.HOST_DB,
    dialect: 'mysql',
});

const connectdb = async () => {
    try {
        await seque.authenticate();
        console.log('Successfully!!!');
    } catch (err) {
        console.error('Unable to connect to the database:', error);
        throw err;
    }
}

module.exports = connectdb;;