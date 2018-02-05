require('./app.less');
require('./global/material-icons.less');
require('./global/roboto-font.less');

const template = require('./app.html');
const login = require('./continers/login/login');

module.exports = {    
    template,
    el: '#app',
    data: function () {
        return {
            login_data: null,
        }
    },
    methods: {
        loginData: function (data) {
            this.login_data = data;
        },
    },
    components: {
        'login-': login,
    },
}