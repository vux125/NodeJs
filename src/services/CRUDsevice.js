const bcrypt = require('bcryptjs');
const db = require('../models/index');


const salt = bcrypt.genSaltSync(6);

const createCourse = async (code, name, image, description, price, slug) => {

}

const getMultipleCourse = async () => {
    try {
        const multipleCourse = await db.Course.findAll();
        return multipleCourse;
    } catch (err) {
        console.error('getMultipleCourse: ', err);
    }
}

const getCourse = async (code) => {

}

const updateCourse = async (code, name, image, description, price, slug) => {

}

const deleteCourse = async (code) => {

}

module.exports = {
    createCourse, getMultipleCourse, getCourse,
    updateCourse, deleteCourse,
}