module.exports = {
    mutipleToObject: function (courses) {
        return courses.map(courses => courses.toObject());
    },

    courseToObject: function (course) {
        return course.toObject();
    },
}