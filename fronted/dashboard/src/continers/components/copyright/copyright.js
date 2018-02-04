require('./copyright.less');

const template = require('./copyright.html');

module.exports = {
    template,
    data: function () {
        return {
            date_year: null,
        }
    },
    created: function () {
        var date = new Date();
        var year = date.getFullYear();
        this.date_year = year;
    },
}