module.exports = {
    mutipleToObject: function (courses) {
        return courses.map(course => course.toObject());
    },

    courseToObject: function (course) {
        return course ? course.toObject() : course;
    },
}