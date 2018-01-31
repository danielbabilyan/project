require('./material-icons.less');

const template = require('./app.html');
const log_in = require('./continers/log-in/log-in');

module.exports = {    
    template,
    el: '#app',
    components: {
        'log-in': log_in,
    },
}