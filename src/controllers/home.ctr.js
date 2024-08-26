const { createCourse, getMultipleCourse, getCourse,
    updateCourse, deleteCourse, } = require('../services/CRUDsevice');
const { mutipleToObject, courseToObject } = require('../util/fomat_data_hbs');

class homeCtr {
    async show(req, res) {
        try {
            const courses = await getMultipleCourse();
            res.render('home', {
                courses,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }

    }
}

module.exports = new homeCtr;

