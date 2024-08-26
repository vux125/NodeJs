class homeCtr {
    index(req, res) {
        res.render('home');
    }
}
module.exports = new homeCtr;
