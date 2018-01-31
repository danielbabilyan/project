require('./app.less');
require('./material-icons.less');
require('./md-style/roboto-font.less');

const template = require('./app.html');
const login = require('./continers/login/login');

module.exports = {    
    template,
    el: '#app',
    components: {
        'login-': login,
    },
}